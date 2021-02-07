import React from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";
import "../index.css";

const MessagesBox = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, index) => {
        return (
          <div key={index}>
            <Message message={message} name={name} />
          </div>
        );
      })}
    </ScrollToBottom>
  );
};

export default MessagesBox;
