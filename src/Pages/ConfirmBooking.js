import React from "react";
import Button from "@mui/material/Button";
import ConfirmBookingItem from "../Components/ConfirmBookingItem";

const ConfirmBooking = () => {
  return (
    <div>
      <ConfirmBookingItem />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          style={{
            color: "white",
            backgroundColor: "#263238",
            textTransform: "capitalize",
          }}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default ConfirmBooking;
