import React from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";
import Box from "@material-ui/core/Box";

import "../index.css";

const MessagesBox = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, index) => {
        return <Message message={message} name={name} key={index} />;
      })}
    </ScrollToBottom>
  );
};

export default MessagesBox;
