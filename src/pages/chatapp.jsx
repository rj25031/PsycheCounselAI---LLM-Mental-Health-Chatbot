import { useState, useRef } from "react";
import { FaPaperPlane, FaMicrophone, FaTrash, FaPause, FaPlay } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function ChatApp() {
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you? What’s happening?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  const handleNewChat = () => {
    if (messages.length > 1) {
      const timestamp = new Date().toLocaleString();
      setChats([...chats, { messages, timestamp }]);
    }
    setMessages([{ text: "Hi there! How can I help you?", sender: "bot" }]);
  };

  const handleStartRecording = async () => {
    setIsRecording(true);
    setRecordedAudio(null);
    audioChunks.current = [];
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunks.current.push(event.data);
      };
      
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudio(audioUrl);
        setMessages([...messages, { text: audioUrl, sender: "user", type: "audio" }]);
      };
      
      mediaRecorderRef.current.start();
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const handlePauseResume = () => {
    if (!mediaRecorderRef.current) return;
    if (isPaused) {
      mediaRecorderRef.current.resume();
    } else {
      mediaRecorderRef.current.pause();
    }
    setIsPaused(!isPaused);
  };

  const handleDeleteRecording = () => {
    setRecordedAudio(null);
    setIsRecording(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r-2 border-gray-300 p-4 flex flex-col">
        <div className="flex items-center justify-center gap-2">
            <NavLink to='/'><img src="/src/assets/B Logo.svg" alt="Logo" className="w-70"/></NavLink>
        </div>
        <button onClick={handleNewChat} className="bg-purple-400 text-white font-semibold p-3 mt-10 rounded-lg cursor-pointer">
          New Chat
        </button>
        <div className="mt-4 bg-white p-4 rounded-lg">
          {chats.length === 0 ? (
            <p className="text-dark">No chats yet :)</p>
          ) : (
            chats.map((chat, index) => (
              <div key={index} className="text-dark text-sm mt-2 border-b border-gray-400 pb-2 mb-2">
                <p>Chat {index + 1}</p>
                <p className="text-gray-500">{chat.timestamp}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-3/4 flex flex-col bg-white">
        <div className=" p-4 flex items-center bg-purple">
          <div className="flex items-center justify-center gap-2">
            <img src="/src/assets/AI Logo.png" alt="Logo" className="w-20" />
          </div>
          <div className="ml-2">
            <h3 className="text-lg font-semibold">Simba</h3>
            <p className="text-sm font-semibold text-green-600">Online</p>
          </div>
        </div>
        <div className="flex-1 p-25 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-4 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
              {msg.type === "audio" ? (
                <audio controls className="inline-block">
                  <source src={msg.text} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              ) : (
                <span className={`inline-block px-4 py-2 rounded-lg ${msg.sender === "user" ? "bg-purple-200 text-dark" : ""}`}>
                  {msg.text}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* <div className="p-4 bg-purple-100 flex items-center m-auto rounded-full gap-2 w-300 mb-20">
          {!isRecording ? (
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write your message..."
              className="flex-1 p-2 border-none text-lg outline-none"
              onKeyDown={(e) => e.key === "Enter" && input.trim() !== "" && sendMessage()}
            />
          ) : (
            <div className="flex items-center justify-between p-2 w-full">
              <FaTrash className="text-red-500 cursor-pointer size-8 ml-20" onClick={handleDeleteRecording} />
              <span className="text-xl font-semibold">Recording...</span>
              {isPaused ? (
                <FaPlay className="text-gray-700 cursor-pointer mr-20 size-6" onClick={handlePauseResume} />
              ) : (
                <FaPause className="text-gray-700 cursor-pointer mr-20 size-6" onClick={handlePauseResume} />
              )}
            </div>
          )}

          <button
            onClick={isRecording ? handleStopRecording : input.trim() !== "" ? sendMessage : handleStartRecording}
            className="bg-purple-500 text-white p-5 rounded-full hover:bg-purple-700 cursor-pointer"
          >
            {isRecording || input.trim() !== "" ? <FaPaperPlane className="size-5" /> : <FaMicrophone className="size-5" />}
          </button>
        </div> */}


          <div className="p-4 bg-purple-100 flex items-center m-auto rounded-full gap-2 w-300 mb-20">
    
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write your message..."
              className="flex-1 p-2 border-none text-lg outline-none"
              onKeyDown={(e) => e.key === "Enter" && input.trim() !== "" && sendMessage()}
            />
          

          <button
            onClick={ sendMessage}
            className="bg-purple-500 text-white p-5 rounded-full hover:bg-purple-700 cursor-pointer"
          >
            {isRecording || input.trim() !== "" ? <FaPaperPlane className="size-5" /> : <FaMicrophone className="size-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}