import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image2 from "../assets/images/background.png"
import Image from "../assets/images/whatadventure.png"
import {Helmet} from 'react-helmet';
import { Gi3DHammer } from "react-icons/gi";
import newImage from "../assets/images/background_sb.png"
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import spaceAdv from "../assets/images/space_adv.jpg.png"
import pirotAdv from "../assets/images/pirot.png"

function Storyimage() {
    return <img src={Image} alt="Logo" />;
  }
function button_listener(){
  var button1 = document.getElementById("pirotButton");
  var button2 = document.getElementById("spaceButton");

  // Attach click event listeners to the buttons
  button1.addEventListener("click", function() {
    buttonClicked("Button 1");
  });

  button2.addEventListener("click", function() {
    buttonClicked("Button 2");
  });

  // Function to handle button click
  function buttonClicked(buttonText) {
    console.log(buttonText + " was clicked!");
  }
}

export default class StoryBoard extends Component {

      constructor(props) {
        super(props);
        
      
      }


    render() {

      const styles = {
       

      
      }

    
        return (
          <div>
          <img style={{position: "absolute", zIndex: "-9999", objectFit: "cover", width: "100%", height: "100%"}} src={newImage} alt="Logo"/>

          <Container>

            <Helmet>
                  <style>{"body { background-color: #003b59; font-family: 'Roboto', sans-serif;}"}</style>
            </Helmet>
          

              <div class="row">

                <div class="col" style={{marginLeft: "25%", marginTop: "5%", marginBottom: "3%", marginRight: "auto"}}> 

                  <img style={{borderRadius: "10px", width: "550px", height: "auto" }} src={Image}></img>

                </div>

              </div>

              

              <div class="row" style={{marginTop: "3%"}}>

                <div class="col" style={{marginLeft: "15%"}}> 
                <Link to="/storypage">
                <img style={{borderRadius: "10px", width: "250px", height: "200px" }} src={spaceAdv}></img></Link>
                <h1 style={{color: "white"}}> space adventure</h1>
                </div>


                <div class="col" style={{marginLeft: "20%"}}> 
                <Link to="/storypage">
                <img style={{borderRadius: "10px", width: "250px", height: "200px" }} src={pirotAdv}></img></Link>
                <h1 style={{color: "white"}}> Pirat Adventure</h1>
                </div>

              </div>

              <div class="row text-center" style={{marginTop: "1%"}}>

                <div class="col"> 
        
                <h1 class="text-center" style={{color: "white", marginTop: "5%", marginBottom: "5%"}}> I want to go on adventure about..</h1>

                <Form.Control type="text" placeholder="..." class="text-center" style={{borderRadius: "10px", marginBottom: "3%", width: "60%", marginLeft: "auto", marginRight: "auto"}}/>

                <Link to="/storypage"><Button style={{marginBottom: "5%", borderRadius: "10px", width: "180px", height: "60px", fontSize: "1.3em"}} >Start Adventure</Button>
                </Link>
                </div>

              </div>
                
          
          
          </Container>
        
          </div>

          

        )
    }
}

