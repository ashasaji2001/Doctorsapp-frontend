import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RestCard from './RestCard'
import {Row,Col} from 'react-bootstrap'


function AllRest() {
    //API fetching
    const base_url ="https://doctors-appointment-app-x8jv.onrender.com/doctors"

    //to hold array of data
    const [AllRestData,setAllRestData]=useState([])
    const fetchData=async()=>{
             const result = await axios.get(base_url)
             console.log(result.data);
             setAllRestData(result.data)
    }
    console.log(AllRestData);
  
  
    useEffect(()=>{
      fetchData()
    },[])
    
    
  return (
    <div>
  <div>
        <Row>
            {
              AllRestData.map(item=>(
                <Col sm={12} md={6} lg={5} xl={3}>
                <RestCard doctor ={item}/>
                {/* <h1>{item.name}</h1> */}
          
                </Col>
              ))
            }
        </Row>
       </div>
    </div>
  )
}

export default AllRest