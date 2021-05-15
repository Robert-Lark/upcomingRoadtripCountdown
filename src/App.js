import "./App.css";
import trip from "./trip.png";
import {useEffect, useState} from "react";

const initialState = ["-", "-", "-", "-"];

function App() {
  const [time, setTime] = useState(initialState);

  useEffect(() => {
    //setInterval will run repeatedly in timed increments that you can set below

    const interval = setInterval(() => {
      //The date we want to count down to
      const countDate = new Date("June 3, 2021, 08:00:00").getTime();
      //the time we want to count down from
      const now = new Date().getTime();
      //the time between those two dates
      const gap = countDate - now;
      //establish our times
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      //round them down to integers and store them in variables
      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);
      //set them to state
      setTime([textDay, textHour, textMinute, textSecond]);
      //here we specify that we want this function to run 
      //once ever 1000 miliseconds or once ever second
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("https://scontent.fsac1-2.fna.fbcdn.net/v/t1.18169-9/10947200_10153517189052388_2813775992916111421_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=JJAji7aSLzYAX_XddgS&_nc_ht=scontent.fsac1-2.fna&oh=30f3c701950c9f3da9bc6ae5223703ee&oe=60C5A7C9")`,
        backgroundSize: "cover",
      }}
    >
      <section className="coming-soon">
        <div>
          <h2>Rob & Nixons amazing adventure</h2>
          <div className="countdown">
            <div className="container-day">
              <h3 className="day">Day</h3>
              {/* here we just pull the value from state */}
              <h4>{time[0]}</h4>
            </div>
            <div className="container-hour">
              <h3 className="hour">Hour</h3>
              {/* here we just pull the value from state */}
              <h4>{time[1]}</h4>
            </div>
            <div className="container-Minute">
              <h3 className="minute">Minute</h3>
              {/* here we just pull the value from state */}
              <h4>{time[2]}</h4>
            </div>
            <div className="container-second">
              <h3 className="second">Second</h3>
              {/* here we just pull the value from state */}
              <h4>{time[3]}</h4>
            </div>
          </div>
        </div>
        <img className="waiting" src={trip} alt="roadtrip" />
      </section>
    </div>
  );
}

export default App;
