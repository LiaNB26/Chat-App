import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  currentUser: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10,
  },
  otherUser: {
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10,
  },
});

const Message = ({ message: { user, text }, name }) => {
  const classes = useStyles();

  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    <Box
      component="div"
      className={isSentByCurrentUser ? classes.currentUser : classes.otherUser}
    >
      <Typography variant="subtitle1" align="left">
        {isSentByCurrentUser ? trimmedName : user}
      </Typography>
      <Typography variant="subtitle2" align="left">
        {text}
      </Typography>
    </Box>
  );
};

export default Message;
