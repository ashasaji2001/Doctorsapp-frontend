import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
function RestDays({days}) {
    console.log(days);
  
  return (
    <div>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown">
        Available Days
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >Available Days:|{days}|</Dropdown.Item>
       
      
      </Dropdown.Menu>
    </Dropdown>
     {/* <div>
        {
            days?.map(item=>(
                <h6>{item.days}</h6>
            ))
        }
       </div> */}
    </div>
  )
}

export default RestDays