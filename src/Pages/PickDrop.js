import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import CarItem from "../Components/CarItem";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TopNav from "../Components/TopNav";

export default function PickDrop() {
  const DUMMY_CAR_LIST = [
    {
      car_name: "Winger",
      week_day: "Mon",
      arrival_time: "8.42",
      arrival_m: "AM",
      seat_available: "11",
      reach_time: "9.42",
      reach_m: "AM",
    },
    {
      car_name: "Winger",
      week_day: "Mon",
      arrival_time: "8.42",
      arrival_m: "AM",
      seat_available: "11",
      reach_time: "9.42",
      reach_m: "AM",
    },
    {
      car_name: "Winger",
      week_day: "Mon",
      arrival_time: "8.42",
      arrival_m: "AM",
      seat_available: "11",
      reach_time: "9.42",
      reach_m: "AM",
    },
    {
      car_name: "Winger",
      week_day: "Mon",
      arrival_time: "8.42",
      arrival_m: "AM",
      seat_available: "11",
      reach_time: "9.42",
      reach_m: "AM",
    },
    {
      car_name: "Winger",
      week_day: "Mon",
      arrival_time: "8.42",
      arrival_m: "AM",
      seat_available: "11",
      reach_time: "9.42",
      reach_m: "AM",
    },
  ];

  const [pickup, setPickup] = useState("");
  const pickupHandler = (event) => {
    setPickup(event.target.value);
  };

  const [selectedTime, setSelectedTime] = useState(
    new Date("2018-01-01T00:00:00.000Z")
  );

  return (
    <div>
      <TopNav title="Choose Stop" />
      <Stack spacing={2} sx={{ margin: "15px" }}>
        {/* Pickup  */}
        <Autocomplete
          id="pickup_location"
          freeSolo
          options={DUMMY_Pick_Drop.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Pickup Location"
              value={pickup}
              onChange={pickupHandler}
            />
          )}
        />
        {/* Drop */}
        <Autocomplete
          freeSolo
          id="drop_location"
          // disableClearable
          options={DUMMY_Pick_Drop.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Drop Location"
              // Inputpara={{
              //   ...params.Inputpara,
              //   type: "search",
              // }}
            />
          )}
        />

        {DUMMY_CAR_LIST.map((para, index) => (
          <CarItem
            key={index}
            car_name={para.car_name}
            week_day={para.week_day}
            arrival_time={para.arrival_time}
            arrival_m={para.arrival_m}
            seat_available={para.seat_available}
            reach_time={para.reach_time}
            reach_m={para.reach_m}
          />
        ))}

        {/* Time Selector */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileTimePicker
            label="Suggest Time"
            value={selectedTime}
            onChange={(newValue) => {
              setSelectedTime(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Stack>
    </div>
  );
}

//
const DUMMY_Pick_Drop = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
