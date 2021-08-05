import React, { useEffect, useState } from 'react';
import './covid.scoped.css';
import { Link } from 'react-router-dom';


const Covid=()=>{
    const[data,setData]=useState([]);
    const getCovidData= async ()=>{
        try{
        const res = await fetch('https://api.covid19india.org/data.json'); //fetching data
        const actData=await res.json(); //parsing data
        console.log(actData.statewise[0]);
        setData(actData.statewise[0]);
        }
        catch(err){
            console.log("Some error occured while fetching data: ",err);
        }
    }
    useEffect(()=>{
        getCovidData();
    },[] ); //useEffect is used to preform opns after the render() is executed

  return(
  <>
  <div className="majorDivCovid">
  <h1 className='h1'>🔴 LIVE</h1>
  <h2 className='h2'>Covid-19 Live Tracker</h2>
  <div className="card">
      <div className="card-specific-1">
          <div className="cardData-1">
              <p>INDIA</p>
          </div>
      </div>

      <div className="card-specific-2">
          <div className="cardData-2">
              <p>Total <span>RECOVERED:</span></p>
              <p className="lower">{data.recovered}</p>
          </div>
      </div>

      <div className="card-specific-3">
          <div className="cardData-3">
              <p>Total <span>CONFIRMED:</span></p>
              <p className ="lower">{data.confirmed}</p>
          </div>
      </div>
    </div>


    <div className="card">
      <div className="card-specific-4">
          <div className="cardData-4">
          <p>Total <span>DEATHS:</span></p>
            <p className="lower">{data.deaths}</p>
          </div>
      </div>

      <div className="card-specific-5">
          <div className="cardData-5">
          <p>Total <span>ACTIVE CASES:</span></p>
        <p className="lower">{data.deaths}</p>
          </div>
      </div>

      <div className="card-specific-6">
          <div className="cardData-6">
          <p>Last <span>UPDATED</span></p>
          <p className="lower">{data.lastupdatedtime}</p>
          </div>
      </div>
  </div>
  <div className="btn">
  <Link to="/statewise">
  <button><p>👉CLICK HERE👈 </p>To get StateWise Distribution</button>
  </Link>
  </div>
</div>
  </>)
}

export default Covid;