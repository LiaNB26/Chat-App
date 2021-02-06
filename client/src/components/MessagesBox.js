import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

const MessagesBox = ({ messages, name }) => {
  return (
    <ScrollToBottom>
      {messages.map((message, index) => {
        return (
          <div key={index}>
            {/* <Message message={message} name={name} /> */}
            Hello
          </div>
        );
      })}
    </ScrollToBottom>
  );
};

export default MessagesBox;
