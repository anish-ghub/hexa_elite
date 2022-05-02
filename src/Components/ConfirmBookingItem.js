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
            <div>
              <Typography color="text.secondary" style={{ fontSize: "18px" }}>
                Narendrapur
              </Typography>
              <hr style={{ color: "floralwhite" }}></hr>
              <Typography color="text.secondary" style={{ fontSize: "18px" }}>
                Eco Space
              </Typography>

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

            <div style={{ borderLeft: "1px solid #566573" }}></div>
            <div>
              <Typography color="text.secondary">
                <span style={{ fontSize: "30px" }}>29.7 </span>
                <span style={{ fontSize: "18px" }}> KM</span>
              </Typography>
              <Typography color="text.secondary">Thu</Typography>
              <Typography color="text.secondary">08:49 AM</Typography>
            </div>
          </div>

          <Typography
            color="text.secondary"
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 14,
              marginTop: "15px",
            }}
          >
            <span>Vehicle</span>
            <span>Hexa Partner</span>
            <span>Helpline</span>
          </Typography>
          <Typography
            color="text.secondary"
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 12,
            }}
          >
            <span>Weginer</span>
            <span>Abhijeet Shaw</span>
            <span>99036222224</span>
          </Typography>
          <Typography
            color="text.secondary"
            style={{
              fontSize: 14,
            }}
          >
            <span>(AC)</span>
          </Typography>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography
                color="text.secondary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 12,
                  marginTop: "10px",
                }}
              >
                <span style={{ marginRight: "8px" }}>Base Fair</span>
                <CurrencyRupeeIcon
                  style={{
                    fontSize: 12,
                  }}
                />
                <span>76</span>
              </Typography>

              <Typography
                color="text.secondary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 12,
                }}
              >
                <span style={{ marginRight: "8px" }}>Convenience fee</span>
                <CurrencyRupeeIcon
                  style={{
                    fontSize: 12,
                  }}
                />
                <span>2</span>
              </Typography>
            </div>

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
