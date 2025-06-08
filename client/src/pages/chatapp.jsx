import { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaPaperPlane,
  FaMicrophone,
  FaStop,
  FaTimes,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import speakText from "../helper/speak";
import axios from 'axios';
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

export default function ChatApp() {
  const [chats, setChats] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you? What’s happening?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("General");
  const recognitionRef = useRef(null);
  const [isListening, setIsListening] = useState(false);
  const [profileSettings, setProfileSettings] = useState({
    name: "User",
    accuracy: "Medium",
    behavior: "Accurate",
  });
  const [selectedVoice, setSelectedVoice] = useState("female");

  const handleNewChat = () => {
    if (messages.length > 1) {
      const timestamp = new Date().toLocaleString();
      setChats((prev) => [...prev, { messages, timestamp }]);
    }
    setMessages([
      {
        text: "Hi there! How can I help you? What’s happening?",
        sender: "bot",
      },
    ]);
    if (window.innerWidth < 768) setSidebarOpen(false);
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const messageToSend = input.trim();

    setMessages((prev) => [...prev, { text: messageToSend, sender: "user" }]);
    setInput("");

    const thinkingMessage = { text: "Thinking...", sender: "bot", temp: true };
    setMessages((prev) => [...prev, thinkingMessage]);

    try {
      const response = await fetch(
        "https://4b83-34-16-166-87.ngrok-free.app/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: messageToSend }),
        }
      );

      const data = await response.json();
      console.log(data);

      setMessages((prev) => prev.filter((msg) => !msg.temp));

      if (data.response) {
        setMessages((prev) => [
          ...prev,
          { text: data.response, sender: "bot" },
        ]);
        await speakText(data.response, selectedVoice);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => prev.filter((msg) => !msg.temp));
      setMessages((prev) => [
        ...prev,
        { text: "Oops, something went wrong.", sender: "bot" },
      ]);
      await speakText("Oops, something went wrong.", selectedVoice);
    }
  };

  const handleStartRecording = () => {
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setInput((prevInput) => prevInput + transcript);
          setIsListening(false);
        } else {
          interimTranscript += transcript;
        }
      }
    };

    // add this so that when recognition stops (silence, etc.), we reset the flags
    recognitionRef.current.onend = () => {
      setIsRecording(false);
      setIsListening(false);
    };

    recognitionRef.current.start();
    setIsRecording(true);
    setIsListening(true);
  };

  const handleStopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
      setIsListening(false);
    }
  };

  const handleSettingsChange = (key, value) => {
    setProfileSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex h-screen relative overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 md:w-130 bg-white border-r-2 border-gray-300 p-4 flex flex-col transform transition-transform duration-300 z-50
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:relative md:flex`}
      >
        {/* Close button for mobile */}
        <div className="flex justify-end md:hidden">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-700 p-2 hover:text-black"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <NavLink to="/">
            <img
              src="/B Logo.svg"
              alt="Logo"
              className="w-120 md:w-80"
            />
          </NavLink>
        </div>

        {/* New Chat Button */}
        <button
          onClick={handleNewChat}
          className="bg-purple-400 text-white font-semibold p-3 mt-10 rounded-lg cursor-pointer"
        >
          New Chat
        </button>

        {/* Chat History */}
        <div className="mt-4 bg-white p-4 rounded-lg overflow-y-auto flex-1">
          {chats.length === 0 ? (
            <p className="text-dark">No chats yet :)</p>
          ) : (
            chats.map((chat, index) => (
              <div
                key={index}
                className="text-dark text-sm mt-2 border-b border-gray-400 pb-2 mb-2"
              >
                <p>Chat {index + 1}</p>
                <p className="text-gray-500">{chat.timestamp}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Main Chat Section */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Topbar */}
        <div className="flex items-center justify-between p-4 bg-purple-200 relative">
          {/* Burger button (mobile only) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="bg-purple-500 text-white p-3 rounded-full"
            >
              <FaBars size={20} />
            </button>
          </div>

          {/* Simba Center (mobile) */}
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <img src="/AI Logo.png" alt="Logo" className="w-16" />
              <div>
                <h3 className="text-lg font-semibold text-center">Simba</h3>
                <p className="text-sm font-semibold text-green-600 text-center">
                  Online
                </p>
              </div>
            </div>
          </div>

          {/* Profile + Dropdown */}
          <div className="relative md:mr-20">
            <img
              src="/Profile.jpg"
              alt="Profile"
              className="size-18 rounded-full cursor-pointer border-2 border-purple-400 hover:border-purple-600 transition-all duration-200"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-50 animate-fade-in">
                <button
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-purple-100"
                  onClick={() => {
                    setSettingsOpen(true);
                    setDropdownOpen(false);
                  }}
                >
                  <FaCog className="mr-2" /> Settings
                </button>
                <button
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-purple-100"
                  onClick={() => alert("Logged Out")}
                >
                  <FaSignOutAlt className="mr-2" /> Log Out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Chat messages */}
        <div className="flex-1 px-4 py-6 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 ${
                msg.sender === "user" ? "text-right" : "text-left w-5/6"
              }`}
            >
              <span
                className={`inline-block px-4 py-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-purple-200 text-dark"
                    : msg.temp
                    ? "bg-gray-200 italic text-gray-500"
                    : "bg-gray-100"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 bg-purple-100 flex items-center rounded-full gap-2 m-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write your message..."
            className="flex-1 p-2 border-none text-lg outline-none"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            disabled={isRecording}
          />
          {isListening && (
            <div className="flex items-center justify-center gap-2 text-purple-700 font-bold animate-pulse">
              <FaMicrophone className="animate-bounce" />
              <span>Listening...</span>
            </div>
          )}
          <button
            onClick={
              input.trim() !== ""
                ? () => sendMessage()
                : isRecording
                ? handleStopRecording
                : handleStartRecording
            }
            className="bg-purple-500 text-white p-5 rounded-full hover:bg-purple-700 cursor-pointer"
          >
            {input.trim() !== "" ? (
              <FaPaperPlane className="size-5" />
            ) : isRecording ? (
              <FaStop className="size-5" />
            ) : (
              <FaMicrophone className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Settings Popup Modal */}
      {settingsOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-purple-100 p-8 rounded-2xl shadow-xl w-150 h-75 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setSettingsOpen(false)}
            >
              <FaTimes size={20} />
            </button>

            <div className="flex">
              <h2 className="text-3xl font-bold mb-4">Settings</h2>
            </div>

            {/* Tabs */}
            <div className="flex space-x-4 mb-4">
              {["General", "Speech"].map((tab) => (
                <button
                  key={tab}
                  className={`px-3 py-1 rounded-full ${
                    activeTab === tab
                      ? "bg-purple-400 text-white"
                      : "bg-white text-purple-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <div>
              {activeTab === "General" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>My Profile Name</span>
                    <input
                      type="text"
                      value={profileSettings.name}
                      onChange={(e) => handleSettingsChange("name", e.target.value)}
                      className="bg-white border rounded px-2 py-1 text-sm"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Model Accuracy</span>
                    <select
                      value={profileSettings.accuracy}
                      onChange={(e) => handleSettingsChange("accuracy", e.target.value)}
                      className="bg-white border rounded px-2 py-1 text-sm"
                    >
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Model Behaviour</span>
                    <select
                      value={profileSettings.behavior}
                      onChange={(e) => handleSettingsChange("behavior", e.target.value)}
                      className="bg-white border rounded px-2 py-1 text-sm"
                    >
                      <option>Accurate</option>
                      <option>Creative</option>
                    </select>
                  </div>
                </div>
              )}

              {activeTab === "Speech" && (
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Male</span>
                    <input
                      type="radio"
                      name="gender"
                      checked={selectedVoice === "male"}
                      onChange={() => setSelectedVoice("male")}
                    />
                  </div>
                  <div className="flex justify-between">
                    <span>Female</span>
                    <input
                      type="radio"
                      name="gender"
                      checked={selectedVoice === "female"}
                      onChange={() => setSelectedVoice("female")}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
