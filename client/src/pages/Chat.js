import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import ChatHeader from "../components/ChatHeader";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MessageInput from "../components/MessageInput";
import MessagesBox from "../components/MessagesBox";

const useStyles = makeStyles({
  gridItem: {
    height: "15vh",
  },
  gridForm: {
    height: "70vh",
    backgroundColor: "white",
  },
  box: {
    height: "12%",
  },
  chat: {
    height: "76%",
    paddingBottom: 20,
  },
});

let socket;

const Chat = ({ location }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [singleMessage, setSingleMessage] = useState("");

  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    // console.log(name, room);

    socket = io(ENDPOINT, {
      withCredentials: true,
    });

    setName(name);
    setRoom(room);

    // socket.emit("join", { name, room }, ({ error }) => {
    //   if (error) {
    //     alert(error);
    //   }
    // });

    socket.emit("join", { name, room }, () => {});

    return () => {
      // cleanup - unmount;
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    console.log(messages);
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (singleMessage) {
      socket.emit("sendMessage", singleMessage, () => setSingleMessage(""));
    }
  };

  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={12} className={classes.gridItem}></Grid>
        <Grid item xs={12} className={classes.gridForm}>
          <Grid container style={{ height: "100%" }}>
            <Grid item xs={12} className={classes.box}>
              <ChatHeader room={room} />
            </Grid>
            <Grid item xs={12} className={classes.chat}>
              <MessagesBox messages={messages} name={name} />
            </Grid>
            <Grid item xs={12} className={classes.box}>
              <MessageInput
                message={singleMessage}
                setMessage={setSingleMessage}
                sendMessage={sendMessage}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}></Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
