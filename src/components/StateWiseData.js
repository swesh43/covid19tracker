import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const StateWiseData = () => {
   
  const[data, setData]=useState([]);

  const getCovidData= async()=>{
    
    const res=await fetch('https://data.covid19india.org/data.json');
    const actualData= await res.json();
    //console.log(actualData.statewise);
    setData(actualData.statewise);
     
}
   

useEffect(()=>{
  getCovidData();
},[]); 

 
  return (
    <div className="datatable">
      <Table className="table" striped bordered hover variant="dark">
        <thead className="table-head">
        <tr>
      <th scope="col">States</th>
      <th scope="col">Active</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Recovered</th>
      <th scope="col">Deaths</th>
      <th scope="col">LastUpdated</th>
    </tr>
        </thead>

        <tbody>
       
      
        { 
         data.map((newdata, index)=>{
            return(
                <tr>
           <td>{newdata.state}</td>
           <td>{newdata.active}</td>
           <td>{newdata.confirmed}</td>
           <td>{newdata.recovered}</td>
           <td>{newdata.deaths}</td> 
           <td>{newdata.lastupdatedtime}</td>

            </tr>
            )
         }) 
      }
               
        </tbody>
      </Table>
    </div>
  );
};

export default StateWiseData;
