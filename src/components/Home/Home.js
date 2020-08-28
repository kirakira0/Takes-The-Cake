import React from "react";

import "./Home.css";

import img1 from '../../images/Yelp_1.jpg';
import img2 from '../../images/Yelp_2.jpg';
import img3 from '../../images/Yelp_3.jpg';
import img4 from '../../images/Yelp_4.jpg';

const Home = () => {
  return (
    <div>
      <div className='coverImages'>
        <img src={img2} alt='' />
        <img src={img1} alt='' />
        <img src={img3} alt='' />
      </div>
      <div className='welcomeText'>
        <h3>Welcome to Takes the Cake</h3>
        <p>
          Established in 1983, Takes the Cake is a creative bakery at the 
          service of your imagination. Based in Pasadena, California, Takes 
          the Cake offers brides more than 100 wedding cake designs, from 
          the traditional, to the unusual — all to suit your individual style, 
          taste and budget. With these artisans on your side, your special day 
          will be truly exceptional and your wedding cake beautiful. Let our 
          artists create something unique for your special day.
        </p>
      </div>
      <div id='covidUpdate'>
        <img id='img4' src={img4} alt='' />
          <div id='covidText'>
            <h3>COVID-19 Update</h3>
            <p>
              We are open for take out, curbside and local delivery. We 
              continue to offer cakes for all occasions (sizes starting at 4 
              to 6 servings). You can reach us with questions at 
              info@takesthecake.com or at (626) 792-1109.
            </p>  
            <p>Updated hours: </p>            
            <p>Monday: Closed </p>
            <p>Tuesday: 10 am - 4 pm</p>
            <p>Wednesday: 10 am - 5 pm</p>
            <p>Thursday: 10 am - 5 pm</p>
            <p>Friday: 9 am - 5 pm</p>
            <p>Saturday: 9 am - 3 pm</p>
            <p>Sunday: 10 am - 1 pm</p>
        </div>
      </div>
    </div>
  );
};

export default Home;