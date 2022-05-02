import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const ConfirmBookingItem = (props) => {
  return (
    <Card sx={{ minWidth: 275, margin: "12px" }}>
      <CardContent style={{ paddingTop: "7px", paddingBottom: "7px" }}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* Pickup Location */}
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <i
                  className="fa-solid fa-map-pin"
                  style={{ fontSize: 15, color: "#546e7a", marginRight: "7px" }}
                />
                <Typography color="text.secondary" style={{ fontSize: "20px" }}>
                  Narendrapur
                </Typography>
              </div>

              {/* Breakline */}
              <hr style={{ color: "floralwhite" }}></hr>

              {/* Drop Location */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <i
                  className="fa-solid fa-map"
                  style={{ fontSize: 11, color: "#546e7a", marginRight: "7px" }}
                />
                <Typography color="text.secondary" style={{ fontSize: "20px" }}>
                  Eco Space
                </Typography>
              </div>

              {/* Booking & Available */}
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "25px" }}>
                  <Typography
                    color="text.secondary"
                    style={{ fontSize: "14px" }}
                  >
                    Booking
                  </Typography>
                  <Typography
                    color="text.secondary"
                    style={{ fontSize: "14px" }}
                  >
                    01
                  </Typography>
                </div>
                <div>
                  <Typography
                    color="text.secondary"
                    style={{ fontSize: "14px" }}
                  >
                    Available
                  </Typography>
                  <Typography
                    color="text.secondary"
                    style={{ fontSize: "14px" }}
                  >
                    13
                  </Typography>
                </div>
              </div>
            </div>

            {/* Verticle Line */}
            <div style={{ borderLeft: "1px solid #566573" }}></div>

            {/* Side Info */}
            <div>
              <Typography color="text.secondary">
                <span style={{ fontSize: "30px" }}>29.7 </span>
                <span style={{ fontSize: "18px" }}> KM</span>
              </Typography>
              <Typography color="text.secondary">Thu</Typography>
              <Typography color="text.secondary">08:49 AM</Typography>
            </div>
          </div>

          {/* Bottom Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "14px",
            }}
          >
            {/* Vehicle */}
            <div>
              <Typography color="text.secondary" style={{ fontSize: "14px" }}>
                Vehicle
              </Typography>
              <Typography color="text.secondary" style={{ fontSize: "12px" }}>
                Weginer
              </Typography>
            </div>
            {/* Hexa Partner */}
            <div>
              <Typography color="text.secondary" style={{ fontSize: "14px" }}>
                Hexa Partner
              </Typography>
              <Typography color="text.secondary" style={{ fontSize: "12px" }}>
                Abhijeet Shaw
              </Typography>
            </div>
            {/* Helpline */}
            <div>
              <Typography color="text.secondary" style={{ fontSize: "14px" }}>
                Helpline
              </Typography>
              <Typography color="text.secondary" style={{ fontSize: "12px" }}>
                990362224
              </Typography>
            </div>
          </div>

          {/* AC | Non AC */}
          <Typography
            color="text.secondary"
            style={{
              fontSize: 14,
            }}
          >
            <span>(AC)</span>
          </Typography>

          {/* Base Fair & Convenience Fee */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {/* Base Fair */}
              <Typography
                color="text.secondary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 12,
                  marginTop: "8px",
                }}
              >
                <span style={{ marginRight: "6px" }}>Base Fair</span>
                <CurrencyRupeeIcon
                  style={{
                    fontSize: 12,
                  }}
                />
                <span>76</span>
              </Typography>

              {/* Convenience Fee */}
              <Typography
                color="text.secondary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 12,
                }}
              >
                <span style={{ marginRight: "6px" }}>Convenience fee</span>
                <CurrencyRupeeIcon
                  style={{
                    fontSize: 12,
                  }}
                />
                <span>2</span>
              </Typography>
            </div>

            {/* Side Total Price */}
            <Typography color="text.secondary">
              <CurrencyRupeeIcon
                style={{
                  fontSize: 16,
                }}
              />
              <span
                style={{
                  fontSize: 30,
                }}
              >
                78
              </span>
            </Typography>
          </div>
        </NavLink>
      </CardContent>
    </Card>
  );
};

export default ConfirmBookingItem;
