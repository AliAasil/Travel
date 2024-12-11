import React from "react";
import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover uniqque destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in indonesia"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem totam excepturi reiciendis quidem repudiandae corporis. Accusantium, velit esse praesentium temporibus ea quod, beatae nulla, placeat fuga in quo excepturi magnam."
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem totam excepturi reiciendis quidem repudiandae corporis. Accusantium, velit esse praesentium temporibus ea quod, beatae nulla, placeat fuga in quo excepturi magnam."
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem totam excepturi reiciendis quidem repudiandae corporis. Accusantium, velit esse praesentium temporibus ea quod, beatae nulla, placeat fuga in quo excepturi magnam."
        />
      </div>
    </div>
  );
}
export default Trip;
