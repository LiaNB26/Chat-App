import React from "react";

/** Material-UI */
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";

const TextInput = ({ placeholderValue, name, room, saveInputHandler }) => {
  const [input, setInput] = React.useState("");

  const icon = name ? <PersonIcon /> : room && <ChatIcon />;

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
    saveInputHandler(value);
  };

  return (
    <FormControl fullWidth variant="outlined">
      <OutlinedInput
        style={{ backgroundColor: "white" }}
        id={input}
        value={input}
        placeholder={placeholderValue}
        onChange={onChangeHandler}
        endAdornment={<InputAdornment position="end">{icon}</InputAdornment>}
      />
    </FormControl>
  );
};

export default TextInput;
