import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    height: "30vh",
  },
  gridFrom: {
    height: "40vh",
  },
}));

const Join = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <React.Fragment>
      <Container maxWidth="xs">
        <Grid container>
          <Grid item xs={12} className={classes.gridItem}></Grid>
          <Grid item xs={12} className={classes.gridFrom}>
            <Typography variant="h2" align="center" style={{ color: "white" }}>
              Join
            </Typography>
            <hr
              style={{
                backgroundColor: "white",
                border: "1.5px solid white",
              }}
            />
            <Box component="div" mt={2}>
              <TextInput placeholderValue="Name" name />
            </Box>
            <Box component="div" mt={2}>
              <TextInput placeholderValue="Room" room />
            </Box>

            <Box component="div" mt={2}>
              <Link
                onClick={(e) => (!name || !room ? e.preventDefault() : null)}
                to={`/chat?name=${name}&room=${room}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Sign In
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}></Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Join;
