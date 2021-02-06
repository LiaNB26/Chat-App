import React from "react";

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
  },
  title: {
    flexGrow: 1,
  },
});

const ChatHeader = ({ room }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div>
            <IconButton color="inherit" onClick={() => {}}>
              <AccountCircle />
            </IconButton>
          </div>
          <Typography variant="h6" className={classes.title}>
            {room}
          </Typography>
          <div>
            <IconButton color="inherit" onClick={() => {}}>
              <CloseIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ChatHeader;
