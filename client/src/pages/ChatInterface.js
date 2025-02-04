import React, { useState } from "react";
import { FiChevronLeft, FiUser, FiStar, FiSend } from "react-icons/fi";
import "remixicon/fonts/remixicon.css";

const ChatInterface = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
  const [message, setMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);

  const handleNewChat = () => {
    if (currentChat.length) {
      const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
      // Only save the first message of the conversation
      setChatHistory([
        ...chatHistory,
        {
          date: today,
          messages: currentChat.slice(0, 1), // Save only the first user message
        },
      ]);
      setCurrentChat([]);
      setConversationStarted(false);
    }
  };

  const handleQuickQuestion = (question) => {
    setConversationStarted(true);
    setCurrentChat([...currentChat, { user: true, message: question }]);
  };

  const handleSendMessage = (message) => {
    if (message.trim()) {
      setConversationStarted(true);
      setCurrentChat([...currentChat, { user: true, message }]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-blue-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:static md:translate-x-0 md:w-1/4 z-50`}
      >
        <div className="p-4 space-y-4">
          <div className="flex items-center space-x-4 ml-6">
            <FiUser size={28} className="text-gray-500" />
            <div>
              <div className="text-lg font-bold">User</div>
              <button className="text-blue-500 text-sm mt-1">Profile</button>
            </div>
          </div>
          <hr className="my-4" />
          <h2 className="text-xl font-bold">Chat History</h2>
          {chatHistory.length === 0 ? (
            <p className="text-gray-500">No previous chats</p>
          ) : (
            chatHistory.map((chat, index) => (
              <div key={index} className="mb-4">
                <div className="text-sm font-bold">{chat.date}</div>
                <div className="space-y-1">
                  {chat.messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-2 rounded shadow text-sm ${
                        msg.user ? "bg-blue-200 text-right" : "bg-gray-100"
                      }`}
                    >
                      {msg.message}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
        {/* Close Button for Chat History */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800"
        >
          <i class="ri-close-line"></i>
        </button>
      </aside>

      {/* Main Chat Section */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white p-4 shadow flex justify-between items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-blue-500 hover:text-blue-700"
          >
            Chat History
          </button>
          <button
            onClick={handleNewChat}
            className="bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 flex items-center ml-auto"
          >
            <i class="ri-bard-line"></i> New Chat
          </button>
        </header>

        {/* Chat Section */}
        <section className="flex-1 p-4 md:p-8 bg-blue-50 flex flex-col">
          {!conversationStarted && (
            <div className="mb-8  mt-36 text-center">
              <h2 className="text-2xl mb-2">Hi, there 👋</h2>
              <p className="text-lg text-gray-700 mb-4">How can I help you?</p>
              <div className="flex flex-wrap gap-4 items-center ml-32">
                {[
                  "Hi, I've been feeling off lately. Can we talk?",
                  "I'm struggling with stress. How can I manage it better?",
                  "I don't feel like myself these days. Where should I start?",
                ].map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="bg-yellow-300 text-black py-2 px-4 rounded-lg shadow hover:bg-yellow-400"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex-1 space-y-4 overflow-y-auto">
            {currentChat.map((chat, index) => (
              <div
                key={index}
                className={`${
                  chat.user ? "bg-blue-100 self-end" : "bg-white"
                } p-4 rounded-lg shadow`}
              >
                {chat.message}
              </div>
            ))}
          </div>
        </section>

        {/* Chat Bar with Send button */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(message);
          }}
          className="bg-white p-4 flex items-center shadow"
        >
          <input
            type="text"
            placeholder="Ask me anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border p-2 rounded focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded ml-2 flex items-center hover:bg-blue-600"
          >
            <FiSend size={20} className="mr-2 hidden md:block" />{" "}
            {/* Only show on larger screens */}
            <span className="block md:hidden">
              <FiSend size={24} />
            </span>{" "}
            {/* Only show on smaller screens */}
          </button>
        </form>
      </main>
    </div>
  );
};

export default ChatInterface;
