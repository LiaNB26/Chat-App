import React from "react";

/** Material-UI */
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const MessageInput = ({ message, setMessage, sendMessage }) => {
  return (
    <Grid container style={{ height: "100%" }}>
      <Grid item xs={10} xs={9}>
        <FormControl fullWidth variant="outlined" style={{ height: "100%" }}>
          <OutlinedInput
            color="secondary"
            style={{ borderRadius: 0, height: "100%" }}
            value={message}
            placeholder="Type a message..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
            endAdornment={
              <InputAdornment position="end">
                <KeyboardIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={2} xs={3}>
        <Button
          style={{ borderRadius: 0, height: "100%" }}
          disableElevation
          variant="contained"
          color="secondary"
          size="large"
          fullWidth
          onClick={(e) => {
            sendMessage(e);
          }}
        >
          Send
        </Button>
      </Grid>
    </Grid>
  );
};

export default MessageInput;
