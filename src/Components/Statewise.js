import React, { useEffect, useState } from 'react';
import './statwse.css';
const Statewise=()=>{

    const [data,setData]=useState([]);

    const getStatewiseData=async ()=>{
       const res=await fetch('https://api.covid19india.org/data.json');
       const sData=await res.json();
       console.log(sData.statewise);
       setData(sData.statewise);
    }
    useEffect(()=>{
        getStatewiseData();
    },[])
    return(
        <>
        <div className="majorDivStatewise">
        <h2 className='h1s'>Statewise Distribution of <span className='span'>COVID-19</span> in <span className='span'>INDIA</span></h2>
        <div className='table-responsive'>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th className='recovered'>Recovered</th>
                        <th className='death'>Deaths</th>
                        <th>Active</th>
                        <th>Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((currElem,index)=>{
                            return(
                                <tr className='tr2'>
                                    <td>{currElem.state}</td>
                                    <td>{currElem.confirmed}</td>
                                    <td className='recovered'>{currElem.recovered}</td>
                                    <td className='death'>{currElem.deaths}</td>
                                    <td>{currElem.active}</td>
                                    <td>{currElem.lastupdatedtime}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>
        </>
    );
};

export default Statewise;