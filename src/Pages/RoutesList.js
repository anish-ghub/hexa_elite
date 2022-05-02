import * as React from "react";
// import Button from "@mui/material/Button";
import AllRoutes from "../Components/AllRoutes";

const RoutesList = () => {
  return (
    <div>
      {/* Complete Routes Lists */}
      <AllRoutes />

      {/* Suggest Route Buuton */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          style={{
            backgroundColor: "#263238",
            color: "white",
            borderColor: "black",
            textTransform: "capitalize",
          }}
        >
          Suggest Route
        </Button>
      </div> */}
    </div>
  );
};

export default RoutesList;
