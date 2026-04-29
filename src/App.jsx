// useState lets you store a value that updates the screen when it changes.
// useEffect lets you run code at certain times (like when the page loads
import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// Importing our CSS file so the styles apply to this component.
import './App.css'

// This imports the "format" function from the date-fns package you installed.
// format() takes a Date object and turns it into a readable string.
import { format } from "date-fns";


function App() {
// new Date() gives us the current date and time right now.
  const [now, setNow] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setNow(new Date()); 
      // 1000 milliseconds = 1 second. So this updates `now` every second
    }, 1000);

    return () => clearInterval(timer);
     // The empty array [] means "only run this once, when the component first loads".
  }, []);

    // "EEEE" = full weekday name (
// "MMMM do, yyyy" = month day, year 
  const dateString = format(now, "EEEE, MMMM do, yyyy");

  
  // "HH:mm:ss" = hours:minutes:seconds in 24hr format (e.g. "14:35:07")
  // Use "hh:mm:ss a" instead if you want 12hr format with AM/PM
  const timeString = format(now, "HH:mm:ss");

  return (
    <div className="clock-wrapper">

      <div className="glow" />

      <div className="clock-card">

      <p className="label">CURRENT TIME</p>

      <h1 className="time">{timeString}</h1>

      <div className="divider" />

      <p className="date">{dateString}</p>

      </div>
    </div>
  );
}

export default App;