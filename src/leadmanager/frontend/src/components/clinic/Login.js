import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

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
  
                <h2 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{marginBottom: "15%"}}>Put in adventure code</h2>
  

                <div className="d-flex flex-row align-items-center mb-4">
                    <MDBInput label='Patient Code' id='form4' type='code' style={{borderRadius: "5px"}}/>
                  <MDBIcon fas icon="key me-3" size='lg'/>
                </div>
  
                <MDBBtn className='mb-4' size='lg' style={{width: "50%", borderRadius: "15px"}}>Send Code</MDBBtn>
  
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