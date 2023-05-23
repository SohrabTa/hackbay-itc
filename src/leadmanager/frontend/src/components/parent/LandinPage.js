import React, { Component, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse';
import ReactModal from 'react-modal';
import {Helmet} from 'react-helmet';

function Example() {

    const [isOpen, setIsOpen] = useState(false);
   
    return (
      <div>

      <div style={{position: "relative",}}>

        <button onClick={() => setIsOpen(true)} style={{ border: "none", backgroundColor: "white", position:"fixed", bottom:"0", right: "0", zIndex: "9999"}}>
          Open Chatbot

        <img style={{width: "auto", height: "150px"}} src="https://static.vecteezy.com/ti/gratis-vektor/p3/4996790-roboter-chatbot-symbol-zeichen-kostenlos-vektor.jpg"></img>
        </button>
      </div>

        <ReactModal
          isOpen={isOpen}
          contentLabel="Example Modal"
          onRequestClose={() => setIsOpen(false)}
        >
          <button className='btn btn-primary' onClick={() => setIsOpen(false)} style={{top:"0", right: "0", zIndex: "9999"}}>Close</button>
        </ReactModal>
      </div>
    );
  }
   


export default class LandingPage extends Component {

      constructor(props) {
        super(props);
      
        this.state = {
          collapseMenu: true,
          collapseMenuTwo: true,
        };
      
        this.showHide = this.showHide.bind(this);
        this.showHideTwo = this.showHideTwo.bind(this);
      }

      showHide(e) {

        e.preventDefault();
      
        this.setState({
          collapseMenu: !this.state.collapseMenu,
        });
      }

      showHideTwo(e) {

        e.preventDefault();
      
        this.setState({
          collapseMenuTwo: !this.state.collapseMenuTwo
        });
      }

    render() {

      const styles = {

        desc_text: {
          color: "#000",
          textDecoration: "none",
          paddingTop: "2%",
          paddingBottom: "2%"
        },
        
        background_picture: {
          opacity: "1",
          position: "absolute",
          left: "0",
          top: "14%",
          width: "100%",
          height: "75%",
          zIndex: "-99999",
          objectFit: "cover"
        },

        video: {
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "5%",
          marginTop: "5%",
          display: "block"
        },

        icon : {
          width: "55px",
          height: "55px",
          marginBottom: "2%"
        },

        main_text: {
          //color: "#fff",
          color: "#000",
          opacity: "1",
          fontWeight: "400",
        },

        main_headline : {
          color: "#fff",
          fontWeight: "400",
          fontSize: "3.2em",
          backgroundColor: "#000",
          paddingTop: "1%",
          paddingBottom: "1%",
        },

        show_more_button: {
          border: "none",
          color: "black",
          fontSize: "2em"
        },

        nft_intro_text: {
          width: "60%",
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: "1.1em",
          marginBottom: "7%"
        },

        progress_strip: {
          width: "40%",
          marginBottom: "3%",
          marginTop: "3%"
        },

        main_headline_second_variant:{
          color: "#000",
          fontWeight: "600",
          fontSize: "3.2em",
          paddingTop: "1%",
          paddingBottom: "1%",
        },

        second_headline : {
          fontSize: "2.7em",
        },

        under_main_card : {
          color: "#000",
          marginTop: "-10%"
        },

        second_button : {
          backgroundColor: "#3e8ede",
          fontWeight: "400",
          fontSize: "1.3em",
          marginBottom: "5%",
          borderRadius: "10px"

        },

        section_art : {
          padding: "0"
        },

        main_image:{
          width: "100%",
          height: "90%",
          objectFit: "cover",
          padding: "2%"
        },

        main_picture_text:{
          color: "#000",
          fontSize: "1.7em",
          paddingTop: "0%",
          paddingLeft: "2%"
        },

        heading_progress: {
          fontWeight: "700"
        },


        main_picture_col:{
          marginTop: "-8%",
          marginLeft: "6%",
          boxShadow: "rgb(0 0 0 / 6%) 0px 10px 18px",
          padding: "1%",
        },

        main_picture_small_text:{
          fontSize: "1em",
          color: "#000",
          marginTop: "-25%",
          paddingLeft: "4%"
        },

        main_picture_small_text_second:{
          fontSize: "1em",
          color: "#000",
          marginTop: "-25%",
          marginLeft: "-15%"
        },

        strip :{
          padding: "5%",
          marginTop: "-5%",
          position: "absolut",
          border: "solid 1px #fff"
        },

        strip_section_one:{
          color: "#000",
          borderLeft: "solid #000 5px",
        },

        strip_section_two:{
          color: "#000",
          borderLeft: "solid #000 5px"
        },

        strip_section_three:{
          color: "#000",
          borderLeft: "solid #000 5px"
        }
      }

      const main_card = {
        paddingBottom: "17%",
        paddingTop: "10%",
        color: "#fff",
        
      };

      const product_section_card_places = {
        padding: "5%",
        opacity: "0.9",
        backgroundImage: "url(https://www.garten-landschaft.de/wp-content/uploads/2022/06/alisa-anton-fK6Oqo0neHU-unsplash-scaled-1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

      const product_section_card_arts = {
        padding: "5%",
        opacity: "0.9",
        backgroundImage: "url(https://www.gz-supplies.com/product_images/uploaded_images/imgonline-com-ua-compresstosize-znumlwh11sfnqzs.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px"
      };

      const product_section_card_header = {
        color: '#fff',
        fontSize: "4em",
        fontWeight: "700",
      };

      const product_card = {
        boxShadow: "rgb(0 0 0 / 4%) 0px 6px 8px",
        padding: "1%",
        borderRadius: "10px"
      };

      const desc_product = {
        backgroundColor: "#fff",
        
      };

      const cta_button = {
        backgroundColor: "#3e8ede",
        fontSize: "1.3em",
        borderRadius: "10px",
        height: "50px",
        width: "200px"
      };


      const product_img = {
        objectFit: "cover",
        height: "200px",
        width: "350px",
        borderRadius: "10px"
      };


    
        return (
          
          <div className='container-fluid main_container' style={styles.main_container}>

            <Example></Example>

              <Helmet>
                <style>{"body { background-color: #fdfff5; font-family: 'Roboto', sans-serif; }"}</style>
            </Helmet>
  
          <div className="container mt-4" style={main_card}>

            <div className='row'>

              <div className='col-md-6'>

                <div className='row pb-3'>

                  <div className='col-md-10'>
                    <h1 className='main_headline' style={styles.main_headline_second_variant}>Welcome to the immersive MRI</h1>
                  </div>

                </div>

                <div className='row pt-3'>

                  <div className='col'>
                    <h3 className='main_headline' style={styles.main_text}>Best experience for your Child</h3>
                  </div>

                </div>

                <div className='row pt-5'>
                        <div className='col'>
                            <Link to="/user_marketplace"><button className='btn btn-primary' style={cta_button}>Start addventure</button></Link>
                        </div>
                </div>

              </div>

              <div className='col-4 main_picture_col' style={styles.main_picture_col}>


              </div>


            </div>

          </div>

          <div className='container under_main_card pb-5 pt-5' style={styles.under_main_card}>

            <div className="row">
              <div className='col'>
                <h1 className='text-center pb-3 second_headline' style={styles.second_headline}>Whats all about</h1>
              </div>
            </div>

            <div className="row">
              <div className='col'>
                <p className='text-justify' style={{marginTop: "2%", width: "60%", marginRight: "auto", marginLeft: "auto", marginBottom: "5%"}}>Non-Fungible Tokens, kurz NFTs, revolutionieren gerade den Kunstmarkt. Sie ermöglichen einzigartige, virtuelle Sammlerstücke, die nicht ersetz- oder kopierbar sind.
                    Um Geld für öffentliche Einrichtungen in der Stadt München zu sammeln, gibt es von verschiedenen kulturellen Gütern ein Munich Piece. Der Erlös beim Kauf eines solchen Munich Pieces
                    kommt der jeweiligen Einrichtungen zu gute, welche das Kunstwerk beheimatet.</p>
              </div>
            </div>

            <div className='row pt-3'>
              <div className='col text-center'>
                <Link to="/user_marketplace"><button className='btn btn-primary second_button' style={styles.second_button}>Questions?</button></Link>
              </div>
            </div>

          </div>


          <section className='container mb-5' style={styles.strip}>

            <div class="row" >

              <div class="col"  >

                  <h1 style={{paddingLeft: "30%", marginBottom: "5%"}}>Start your Journey now</h1>

              </div>

            </div>

            <div className='row text-center ml-5'>
              
              <div className='col strip_section_one pt-3 pb-3 ml-2' style={styles.strip_section_one}>
                <h3>Schritt Eins</h3>
                 
              </div>

               <div className='col strip_section_two pt-3 pb-3' style={styles.strip_section_two}>
                  <h3>Schritt Zwei</h3>
                  
              </div>

               <div className='col strip_section_three pt-3 pb-3' style={styles.strip_section_three}>
                  <h3>Schritt Drei</h3>
                  
              </div>

            </div>

            <div className='row'>

              <div className='col'>

                <p className='text-right'>erfahre mehr...</p>

              </div>

            </div>

          </section>


          <div className="container mt-5">

            <section className='section_one pb-5'>

                  <div className="row justify-content-center mt-5" style={product_section_card_arts}>
                    <h1 style={product_section_card_header}>FAQ</h1>
                </div>

                <div className="row d-flex justify-content-between mt-5 section_art" style={styles.section_art}>

                <div className="col m-2" style={product_card}>
                    <Link to="/product_01">

                    <img style={product_img} src="https://www.momjunction.com/wp-content/uploads/2022/10/Help-the-child-exhibit-optimistic-and-confident-social-behaviors.jpg" className="img-fluid" />

                    <div >
                      <h2 className='text-center desc_text' style={styles.desc_text}><b>Child</b></h2>
                    </div>
                    
                    </Link>
                  </div>

                  <div className="col m-2" style={product_card}>
                    <div>
                      <Link to="/product_01">
                      <img style={product_img} src="https://www.primenostics.com/wp-content/uploads/2021/07/0390_Walter_Header-Medneo_35.jpg" className="img-fluid " />
                      <h2 className='text-center desc_text' style={styles.desc_text}><b>How an MRI works</b></h2>
                      </Link>
                    </div>
                  </div>

                  <div className="col m-2" style={product_card}>
                    <Link to="/product_01">
                    <img style={product_img} src="https://www.mucbook.de/wp-content/uploads/2019/11/Gabriele-Anne-Welker_-Kuppeln_-2019-.jpg" className="img-fluid " />
                    <h2 className='text-center desc_text' style={styles.desc_text}><b>Monuments</b></h2>
                    </Link>
                  </div>

                </div>

                <Collapse in={!this.state.collapseMenu}>

                  <div className="first_collapse">
                
                  <div className="row d-flex justify-content-between mt-5">

                  <div className="col m-2" style={product_card}>
                    <Link to="/product_01">
                      <img style={product_img} src="https://thumbs.dreamstime.com/z/graffiti-art-munich-germany-169975305.jpg" className="img-fluid " />
                    <h2 className='text-center desc_text' style={styles.desc_text}><b>Graffiti</b></h2>
                    </Link>
                  </div>

                  <div className="col m-2" style={product_card}>
                    <div>
                      <Link to="/product_01">
                      <img style={product_img} src="https://images.saatchiart.com/saatchi/311983/art/1964101/1085587-HSC00001-7.jpg" className="img-fluid " />
                      <h2 className='text-center desc_text' style={styles.desc_text}><b>Fauvismus</b></h2>
                      </Link>
                    </div>
                  </div>

                  <div className="col m-2" style={product_card}>
                    <Link to="/product_01">
                    <img style={product_img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hitler_Watercolor_-_Munich_Royal_Hofbr%C3%A4uhaus.jpg/800px-Hitler_Watercolor_-_Munich_Royal_Hofbr%C3%A4uhaus.jpg" className="img-fluid " />
                    <h2 className='text-center desc_text' style={styles.desc_text}><b>Realismus</b></h2>
                    </Link>
                  </div>
                    
                </div>

                </div>

                </Collapse>


                <div className='row text-center mt-2'>
                  
                  <div className='col'>

                    <button
                      onClick={this.showHide}
                      className="btn btn-primary show_more_button"
                      style={styles.show_more_button}
                      type="button"
                      data-target="first_collapse"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      >
                      ...
                  </button>

                  </div>
                </div>

                
                </section>

                <div class="row" style={{marginBottom: "15%", marginTop: "5%"}}>

                  <div class="col">

                    <h1 class="text-center">Chatbot</h1>

                    <div class="row">

                      <div class="col" style={{border: "solid black 1px", width: "200px", }}>

                      </div>

                    </div>

                  </div>

                </div>

                    
              </div> 

          </div>

        )
    }
}

