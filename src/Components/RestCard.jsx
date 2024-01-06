import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,

  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function RestCard({ doctor }) {
  console.log(doctor);
  return (
    <div>

      <MDBCard className='my-4 ' alignment='center' >
        <MDBCardBody>
          <h4 className='text-dark'>{doctor.hospital}</h4>
          <MDBCardTitle className='text-info'>{doctor.name}</MDBCardTitle>
          <MDBCardText>{doctor.specialty}</MDBCardText>
          <h5 className='text-dark'>{doctor.rating}⭐</h5>
<Link to={`view/${doctor.id}`}>
<MDBBtn className='bg-primary text-light'>More Details</MDBBtn>
</Link>
        
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}

export default RestCard