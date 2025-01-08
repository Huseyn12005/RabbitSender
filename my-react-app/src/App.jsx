import { useState } from "react";
import axios from "axios";

const Sender = () => {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message) {
      alert("Please enter a message");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5176/send", { message });
      console.log("Backend Response:", response.data);
      alert("Message sent successfully!");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error.response?.data || error.message);
      alert("Failed to send message.");
    }
  };
  

  return (
    <div>
      <h2>Message Sender</h2>
      <input
        type="text"
        placeholder="Enter a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default Sender;
