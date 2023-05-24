import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { VscDebugStart } from "react-icons/vsc";
import Image_1 from '../assets/images/image_1.png';
import Image_2 from '../assets/images/image_2.png';
import Image_3 from '../assets/images/image_3.png';
import Image_4 from '../assets/images/image_4.png';


import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';

  

function TableFunc() {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lilly</td>
          <td>5</td>
          <td>Female</td>
        </tr>
      </tbody>
    </Table>
  );
}


  function Summary() {

    return (

        <div>
  
        <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>

          <MDBCardBody>
            <MDBRow>
              <MDBCol md='7' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                <h2 style={{marginTop: "3%", marginBottom: "4%", fontWeight: "500"}}>Patient Details</h2>

                <TableFunc ></TableFunc>

                <h2 style={{marginTop: "7%", textAlign: "left", fontWeight: "500"}}>Patient Prompt</h2>

                <span style={{padding: "4%"}}>"Hello, Lily! I'm here to guide you through this sterile domain, keeping you safe along the way. Trust in your courage, and together we'll overcome any challenge that comes our way!"</span>

                <h2 style={{marginTop: "7%", fontWeight: "500"}}>Story Description</h2>

                <span style={{padding: "4%"}}>The Space Adventure of Little Lily and Hanz" takes readers on a cosmic journey through different universes as Lily and her panda companion, Hanz, seek help for his injured paw. Their choices lead them to Universe A or Universe B, where they encounter healing havens and galactic gardens. In Universe A, they face perils in the white sterile universe, guided by a helpful local, while in Universe B, they traverse the calm sound region guided by the Whistling Willow. Both paths require courage and cleverness to confront the formidable Boss Harrold. Depending on their actions, Lily and Hanz either outmaneuver or outsmart the boss, leading them to bond inside his belly or emerge victorious. Ultimately, they reunite with a healing doctor and bid farewell, cherishing their unbreakable bond and embarking on new adventures in the vast expanse of the universe.</span>
  
              </MDBCol>

              <MDBCol md='5' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center' style={{paddingLeft: "10%"}}>

                <h2 class="text-center" style={{marginLeft: "-13%", marginBottom: "5%", marginTop: "3%", fontWeight: "500"}}>Projector Images</h2>

                <div class="row">

                    <div class="col">

                    <img src={Image_1} style={{width: "450px", height: "auto", marginBottom: "2%", borderRadius: "10px"}}/>
                    <img src={Image_2} style={{width: "450px", height: "auto", marginBottom: "2%", borderRadius: "10px"}}/>

                    </div>

                </div>

                <div class="row">

                    <div class="col">

                    <img src={Image_3} style={{width: "450px", height: "auto", marginBottom: "2%", borderRadius: "10px"}}/>
                    <img src={Image_4} style={{width: "450px", height: "auto", marginBottom: "2%", borderRadius: "10px"}}/>

                    </div>

                </div>

              </MDBCol>
  
            </MDBRow>

          </MDBCardBody>
        </MDBCard>

        <MDBRow>

              <MDBCol  className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <h5 style={{textAlign: "center", marginBottom: "1%"}}>Start Projection</h5>
                <MDBBtn className='mb-4 text-center' size='lg' style={{width: "20%", borderRadius: "15px", height: "60px"}}><VscDebugStart style={{fontSize: "2em"}}></VscDebugStart></MDBBtn>
                

            </MDBCol>

        </MDBRow>
  
        </div>
    );
  }



export default class ClinicSummary extends Component {

    constructor(props) {
      super(props);
    
    }


  render() {

    const styles = {

    
    }

    return (

        <div>

            <h1 class="text-center" style={{marginTop: "3%"}}>Patient and Adventure Summary</h1>

            <Summary></Summary>

        </div>

    )

    }

}