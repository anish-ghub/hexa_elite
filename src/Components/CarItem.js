import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const CarItem = (props) => {
  return (
    <Card sx={{ minWidth: 275, margin: "10px" }}>
      <CardContent style={{ paddingTop: "7px", paddingBottom: "7px" }}>
        <NavLink to="/booking" style={{ textDecoration: "none" }}>
          <Typography
            color="text.secondary"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 14 }}>{props.car_name}</span>
            <span style={{ fontSize: 23 }}>
              {props.week_day} {props.arrival_time}
            </span>
          </Typography>

          <Typography
            color="text.secondary"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 14 }}>
              Seat. Avail {props.seat_available}
            </span>
            <span style={{ fontSize: 16 }}>{props.arrival_m}</span>
          </Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Reach by {props.reach_time} {props.reach_m}
          </Typography>
        </NavLink>
      </CardContent>
    </Card>
  );
};

export default CarItem;
