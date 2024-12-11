import React from "react";
import "./Destination.css";
import DestinationData from "./DestinationData";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours gives you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores necessitatibus id eum reiciendis quam delectus assumenda, tempore ad natus architecto quibusdam eos, culpa voluptatem facere quasi! Sint, cupiditate perspiciatis. Ratione illo expedita quasi temporibus eligendi corporis dolores exercitationem odit eaque repudiandae non nostrum, provident aspernatur, obcaecati at nihil iste reiciendis!"
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt.Dodugal, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores necessitatibus id eum reiciendis quam delectus assumenda, tempore ad natus architecto quibusdam eos, culpa voluptatem facere quasi! Sint, cupiditate perspiciatis. Ratione illo expedita quasi temporibus eligendi corporis dolores exercitationem odit eaque repudiandae non nostrum, provident aspernatur, obcaecati at nihil iste reiciendis!"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
