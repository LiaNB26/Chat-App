import React from "react";

/** Material-UI */
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";

const TextInput = ({ placeholderValue, name, room }) => {
  const [input, setInput] = React.useState("");

  const icon = name ? <PersonIcon /> : room && <ChatIcon />;

  return (
    <FormControl
      fullWidth
      variant="outlined"
      style={{ backgroundColor: "white" }}
    >
      <OutlinedInput
        id="input-text"
        value={input}
        placeholder={placeholderValue}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        endAdornment={<InputAdornment position="end">{icon}</InputAdornment>}
      />
    </FormControl>
  );
};

export default TextInput;
