import { useState, useRef } from "react";
import {
  FaPaperPlane,
  FaMicrophone,
  FaTrash,
  FaStop,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

// Check if browser supports SpeechRecognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

export default function ChatApp() {
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you? What’s happening?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);
  const [isListening, setIsListening] = useState(false);

  const sendMessage = async (messageToSend = input) => {
    if (messageToSend.trim() === "") return;

    setMessages((prev) => [...prev, { text: messageToSend, sender: "user" }]);
    setInput("");

    const thinkingMessage = { text: "Thinking...", sender: "bot", temp: true };
    setMessages((prev) => [...prev, thinkingMessage]);

    try {
      const response = await fetch(
        "https://40a1-34-105-39-197.ngrok-free.app/chat",
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
      }
    } catch (error) {
      console.error("Error sending message:", error);

      setMessages((prev) => prev.filter((msg) => !msg.temp));

      setMessages((prev) => [
        ...prev,
        { text: "Oops, something went wrong.", sender: "bot" },
      ]);
    }
  };

  const handleNewChat = () => {
    if (messages.length > 1) {
      const timestamp = new Date().toLocaleString();
      setChats((prev) => [...prev, { messages, timestamp }]);
    }
    setMessages([{ text: "Hi there! How can I help you?", sender: "bot" }]);
  };
  const handleStartRecording = () => {
    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = "en-US";
    recognitionRef.current.interimResults = false;
    recognitionRef.current.maxAlternatives = 1;

    recognitionRef.current.onstart = () => {
      setIsRecording(true);
      setIsListening(true); // 🔥 Start showing animation
    };

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognitionRef.current.onend = () => {
      setIsRecording(false);
      setIsListening(false); // 🔥 Stop animation
    };

    recognitionRef.current.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsRecording(false);
      setIsListening(false); // 🔥 Stop animation
    };

    recognitionRef.current.start();
  };

  const handleStopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
      setIsListening(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      sendMessage();
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r-2 border-gray-300 p-4 flex flex-col">
        <div className="flex items-center justify-center gap-2">
          <NavLink to="/">
            <img src="/src/assets/B Logo.svg" alt="Logo" className="w-70" />
          </NavLink>
        </div>

        <button
          onClick={handleNewChat}
          className="bg-purple-400 text-white font-semibold p-3 mt-10 rounded-lg cursor-pointer"
        >
          New Chat
        </button>

        <div className="mt-4 bg-white p-4 rounded-lg overflow-y-auto">
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

      {/* Chat Section */}
      <div className="w-3/4 flex flex-col bg-white">
        <div className="p-4 flex items-center bg-purple">
          <div className="flex items-center justify-center gap-2">
            <img src="/src/assets/AI Logo.png" alt="Logo" className="w-20" />
          </div>
          <div className="ml-2">
            <h3 className="text-lg font-semibold">Simba</h3>
            <p className="text-sm font-semibold text-green-600">Online</p>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 ${
                msg.sender === "user" ? "text-right" : "text-left w-7xl"
              }`}
            >
              <span
                className={`inline-block px-4 py-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-purple-200 text-dark"
                    : msg.temp
                    ? "bg-gray-200 italic text-gray-500"
                    : ""
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        {/* Input and Controls */}
        <div className="p-4 bg-purple-100 flex items-center m-auto rounded-full gap-2 w-300 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write your message..."
            className="flex-1 p-2 border-none text-lg outline-none"
            onKeyDown={handleKeyDown}
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
    </div>
  );
}
