import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { NavLink } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
      color: "#880e4f",
    }}
  >
    to
  </Box>
);

const RouteItem = (props) => {
  const topHandler = () => {
    console.log("Top Handler Called...");
  };

  return (
    <Card sx={{ minWidth: 275, margin: "10px" }}>
      <CardContent
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "6px",
        }}
      >
        <NavLink to="/path" style={{ textDecoration: "none" }}>
          <div>
            {/* Main Route */}
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              {props.from}
              {bull}
              {props.to}
            </Typography>

            {/* Route Information */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: 11 }} color="text.secondary">
                {props.info}
              </Typography>
              <CurrencyRupeeOutlinedIcon
                style={{
                  fontSize: 11,
                  borderRadius: "50%",
                  color: "white",
                  backgroundColor: "#2196f3",
                  padding: "1.5px",
                  marginLeft: "5px",
                }}
              />
            </div>
          </div>
        </NavLink>

        {/* Favourite Icon */}
        <CardActions onClick={topHandler}>
          <IconButton aria-label="add to favorites">
            <i className="fa-regular fa-heart" style={{ color: "#546e7a" }} />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default RouteItem;
