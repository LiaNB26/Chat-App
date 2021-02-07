import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "100%",
  },
  title: {
    flexGrow: 1,
  },
});

const ChatHeader = ({ room }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ height: "100%" }}>
        <Toolbar>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {room}
          </Typography>
          <a href="/" style={{ textDecoration: "none" }}>
            <CloseIcon style={{ color: "white" }} />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ChatHeader;
