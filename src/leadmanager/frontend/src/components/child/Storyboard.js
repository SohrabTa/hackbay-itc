import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from "../assets/images/test_2.png"
import {Helmet} from 'react-helmet';
import { Gi3DHammer } from "react-icons/gi";


function Storyimage() {
    return <img src={Image} alt="Logo" />;
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
          <img style={{position: "absolute", zIndex: "-9999", objectFit: "cover", width: "100%", height: "100%"}} src={Image} alt="Logo"/>

          <Container>

            <Helmet>
                  <style>{"body { background-color: #003b59; font-family: 'Roboto', sans-serif;}"}</style>
            </Helmet>
          

              <div class="row">

                <div class="col" style={{marginLeft: "12%", marginTop: "5%", marginBottom: "3%"}}> 

                  <img style={{borderRadius: "10px", width: "850px", height: "auto" }} src="https://assets.cdn.moviepilot.de/files/9f75ec8daaf5a9c39979c73496e7a8ac5f320d487a37db6f0ef8d5f0373e/fill/1200/576/Disney.jpg" ></img>

                </div>

              </div>

              <div class="row">

                <div class="col" style={{border: "solid 2px black", padding: "3%", height: "120px", borderRadius: "10px", backgroundColor: "white"}}> 

                  <p style={{color: "white"}}>Lorrem</p>

                </div>

              </div>

              <div class="row" style={{marginTop: "3%"}}>

                <div class="col" style={{marginLeft: "20%"}}> 

                  <button className='btn btn-primaty' style={{width: "110px", height: "50px", color: "white", backgroundColor: "lightblue", borderRadius: "10px"}}><Gi3DHammer></Gi3DHammer></button>

                </div>

                <div class="col" style={{marginLeft: "10%"}}> 

                  <button className='btn btn-primaty' style={{width: "110px", height: "50px", color: "white", backgroundColor: "lightblue", borderRadius: "10px"}}><Gi3DHammer></Gi3DHammer></button>

                </div>

              </div>


          </Container>

          </div>

        )
    }
}

