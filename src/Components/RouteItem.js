import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
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
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            >
              {props.from}
              {bull}
              {props.to}
            </Typography>

            {/* Route Information */}
            <Typography sx={{ fontSize: 10, mb: 1.5 }} color="text.secondary">
              {props.info}{" "}
              <CurrencyRupeeOutlinedIcon
                style={{
                  fontSize: "9px",
                  borderRadius: "50%",
                  color: "white",
                  backgroundColor: "#2196f3",
                  padding: "1.5px",
                  marginLeft: "5px",
                }}
              />
            </Typography>
          </div>
        </NavLink>

        {/* Favourite Icon */}
        <CardActions style={{}}>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderOutlinedIcon style={{ color: "#880e4f" }} />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default RouteItem;
