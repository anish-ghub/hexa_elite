import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { NavLink } from "react-router-dom";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function TopNav(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{ backgroundColor: "#37474f" }}>
          <Toolbar>
            {props.title === "Choose Stop" && (
              <NavLink to="/">
                <i
                  className="fa-solid fa-arrow-left"
                  style={{ marginRight: "15px", color: "white" }}
                />
              </NavLink>
            )}
            {props.title === "Confirm Booking" && (
              <NavLink to="/path">
                <i
                  className="fa-solid fa-arrow-left"
                  style={{ marginRight: "15px", color: "white" }}
                />
              </NavLink>
            )}
            <Typography variant="h6" component="div">
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
