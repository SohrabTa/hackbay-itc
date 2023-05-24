import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image2 from "../assets/images/background.png"
import Image from "../assets/images/whatadventure.png"
import {Helmet} from 'react-helmet';
import { Gi3DHammer } from "react-icons/gi";
import newImage from "../assets/images/background_sb.png"

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

                <div class="col" style={{marginLeft: "12%", marginTop: "5%", marginBottom: "3%"}}> 

                  <img style={{borderRadius: "10px", width: "850px", height: "auto" }} src={Image}></img>

                </div>

              </div>

              

              <div class="row" style={{marginTop: "3%"}}>

                <div class="col" style={{marginLeft: "20%"}}> 
          
                <img style={{borderRadius: "10px", width: "250px", height: "auto" }} src={spaceAdv}></img>
                <h1> space adventure</h1>
                <button id="spaceButton">Select</button>
                </div>
                <div class="col" style={{marginLeft: "20%"}}> 
          
                <img style={{borderRadius: "10px", width: "250px", height: "auto" }} src={pirotAdv}></img>
                <h1> pirot adventure</h1>
                <button id="pirotButton">Select</button>
                </div>

                <div class="col" style={{marginLeft: "20%"}}> 
          
                <img style={{borderRadius: "10px", width: "250px", height: "auto" }} src={pirotAdv}></img>
                <h1> I want to go on adventure about..</h1>
                
                <input type="text" id="userInputField"></input>
                <button id="submitButton">Submit</button>
                </div>
                
                

              </div>

          

            

          </Container>
        
          </div>

          

        )
    }
}

