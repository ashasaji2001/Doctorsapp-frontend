import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
        
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href=''>
            <img
              src='https://cdn-icons-png.flaticon.com/512/2869/2869816.png'
              height='50'
              alt=''
            //   loading='lazy'
            />
            {/* <i class="fa-solid fa-user-doctor"></i> */}
                 <h1 className='text-center text-dark'>Doctor's Appointment App</h1>

          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header