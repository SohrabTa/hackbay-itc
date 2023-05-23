import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from "../assets/images/test.png"


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
          
          <Container>

<Storyimage></Storyimage>

            <div class="row">

              <div class="row">

                <div class="col"> 

                </div>

              </div>

              <div class="row">

                <div class="col"> 

                  <p>Lorrem</p>

                </div>

              </div>

              

            </div>

          </Container>

        )
    }
}

