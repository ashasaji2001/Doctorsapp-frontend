import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import RestDays from './RestDays';
import RestReview from "./RestReview"
function ViewRest() {
const [restDetails,setrestDetails]=useState({})
  // const paraId = useParams()
  //  //value ne access chym = useparams
  // console.log(paraId.id);

  // destructuring
  const {id} = useParams()
  //value ne access chym = useparams
 console.log(id);


  const base_url ='https://doctors-appointment-app-x8jv.onrender.com/doctors'
const fetchRest = async()=>{
  const result = await axios.get(`${base_url}/${id}`)
  console.log(result.data);
  setrestDetails(result.data)
}
console.log(restDetails);


useEffect(()=>{
  fetchRest()
},[])


  return (
    <div>
      <Row>
        <Col>
        <MDBCard className='container my-5'  alignment='center'>
      <MDBCardHeader><h1><b>{restDetails.hospital}</b></h1></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Location:{restDetails.address}</MDBCardTitle>
<h4>Doctor : {restDetails.name}</h4> 
<h4> Specialize in :{restDetails.specialty}</h4>
<h4>Contact info : {restDetails.phone}</h4>
<h5>email: {restDetails.email}</h5>     
<h5><RestDays days={restDetails.available_days}/></h5>
<MDBBtn ><RestReview review={restDetails.reviews}/></MDBBtn>

      </MDBCardBody>
     <h6>Available Time : {restDetails.available_hours}</h6>
    </MDBCard>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest