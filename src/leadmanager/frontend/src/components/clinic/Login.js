import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

  function LoginForm() {
    return (
      <MDBContainer fluid style={{marginTop: "10%"}}>
  
        <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>

          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
  
                <h2 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{marginBottom: "15%", marginTop: "5%"}}>Put in patient code</h2>
  

                <div className="d-flex flex-row align-items-center mb-4" style={{marginTop: "5%"}}>
                    <MDBInput label='' id='form4' type='code' style={{borderRadius: "5px"}}/>
                </div>
  
                <Link to="/clinic_summary"><button class="btn btn-primary" style={{borderRadius: "15px", width: "150%", height: "45px", marginLeft: "-25%"}}>Send Code</button></Link>
  
              </MDBCol>
  
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://img.freepik.com/fotos-kostenlos/schwarze-krankenschwester-an-ihrem-arbeitsplatz_52683-100580.jpg?w=2000' fluid/>
              </MDBCol>
  
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
  
      </MDBContainer>
    );
  }



export default class Login extends Component {

    constructor(props) {
      super(props);
    
    }


  render() {

    const styles = {

    
    }

    return (

        <Container>

            <h1 class="text-center" style={{marginTop: "8%"}}>Clinical Login</h1>

            <LoginForm></LoginForm>

        </Container>

    )

    }

}