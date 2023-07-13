import "./App.css";
import { Route, Routes } from "react-router-dom";
import Meetup from "./Pages/Meetup_Events/meetup";
import MeetupDetails from "./Pages/Meetup_Details/meetupDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Meetup />} path="/" />
        <Route element={<MeetupDetails />} path="/eventdetails" />
      </Routes>
    </div>
  );
}

export default App;
