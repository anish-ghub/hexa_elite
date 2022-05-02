import "./App.css";
import { Routes, Route } from "react-router-dom";
import RoutesList from "./Pages/RoutesList";
import PickDrop from "./Pages/PickDrop";
import { createTheme, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ConfirmBooking from "./Pages/ConfirmBooking";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Bahnschrift"].join(","),
    },
  });
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<RoutesList />} />
          <Route path="/path" element={<PickDrop />} />
          <Route path="/booking" element={<ConfirmBooking />} />
        </Routes>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
