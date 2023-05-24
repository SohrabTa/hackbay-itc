import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse';
import { FaConnectdevelop, FaPuzzlePiece, FaHandHoldingUsd, FaHandHoldingHeart } from 'react-icons/fa';
import Image from "../assets/images/test_2.png"

function Storyimage() {
    return <img src={Image} alt="Logo" />;
  }
export default class HomePage extends Component {

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

        main_container : {
        
          fontFamily: "GFS Didot, serif",
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
          backgroundColor: "white",
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
          backgroundColor: "#fff",
          border: "solid 3px #FFE600",
          color: "#FFE600",
          fontWeight: "400",
          fontSize: "1.3em",

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
          backgroundColor: "#fff",
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
        backgroundImage: "url(https://www.muenchenticket.de/tools/imager/imager.php?file=%2Fmedia%2Fimage%2Foriginal%2F16129_SammlungSchack_Ausstellung.jpg&height=750)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

      const product_section_card_monuments = {
        padding: "5%",
        opacity: "0.9",
        backgroundImage: "url(https://schloesserblog.bayern.de/wp-content/uploads/2018/05/Residenz-M%C3%BCnchen_Max-Joseph-Denkmal.jpg)",
      };

      const product_section_card_header = {
        color: '#fff',
        fontSize: "4em",
        fontWeight: "700",
      };

      const product_card = {
        boxShadow: "rgb(0 0 0 / 4%) 0px 6px 8px",
        padding: "1%",
      };

      const desc_product = {
        backgroundColor: "#fff",
        
      };

      const cta_button = {
        backgroundColor: "#FFE600",
        border: "1px solid #FFE600",
        fontSize: "1.3em"
      };

      const charts_sidebar = {
        margin: "0",
        padding: "0",
        width: "150px",
        backgroundColor: "#f1f1f1",
        position: "fixed",
        height: "100%",
        overflow: "auto",
        right: "0",
        borderRadius: "15px 0px 0px 15px"
      };
     
      const product_img = {
        objectFit: "cover",
        height: "200px",
        width: "350px"
        
      };
      const carousel_item = {
        height:"40rem",
        //backgroundColor: "#f1f1f1",
        color:"white",
        position: "relative"

      };

      const carousel={
        width:"100%",
        padding:"0",
        backgroundColor: "#f1f1f1"
        
      }
      // const container ={
      //   position:"absolute",
      //   bottom:"0",
      //   left:"0",
      //   right:"0",
      //   paddingBottom:"50px",
      //   paddingLeft:"70px"
      // }
      

      

        return (
          
          
          <Container className='container-fluid main_container' style={styles.main_container}>
         
          
          
{/*
            <nav>
              <div className='charts_sidebar' style={charts_sidebar}>
                <h1 className='text-center'>Charts</h1>
                    <ol>
                      <li>LIST ELEMENT 1</li>
                      <li>LIST ELEMENT 2</li>
                    </ol>
              </div>
            </nav>

        */}
{/*

          <div className="container mt-4 mb-3" style={main_card}>

                    <div>
                      <img className='background_picture' style={styles.background_picture} src='https://www.schirn.de/fileadmin/SCHIRN/Magazin/Abbildungen_2019/Lee_Krasner/Abstrakter_Expressionismus/header_3._Lee_Krasner_Abstract_No._2___1947__IVAM_Centre__Spain.__c__The_Pollock_Krasner_Foundation.jpg'/>
                    </div>

                    <div className='row justify-content-center mb-5'>
                        <div className='col text-center mt-4'>
                            <h1 className='main_headline' style={styles.main_headline}>Ein Stück München auf deinem Smartphone</h1>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <h3 className='text-center pb-5 main_text' style={styles.main_text}>Unterstütze Institutionen und Orte...</h3>
                            <div className='text-center'>
                                <h3 className='pb-3 main_text' style={styles.main_text}>Erwerbe Kunstwerke, Monumente oder Orte in München, die du liebst!</h3>      
                            </div>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col text-center'>
                            <button className='btn btn-primary' style={cta_button}>Werde ein Teil Münchens</button>
                        </div>
                    </div>

          </div>
  */}                
          <div className="container mt-4" style={main_card}>
                                   
                    <div className='row'>
                    <img className='main_image' style={{position: "absolute", zIndex: "-9999", objectFit: "cover", width: "100%", height: "100%"}} src={Image} alt="Logo"/>                         

                     
                      <div className='col-md-6'>
                     
                        
                        <div className='row pb-3'>
                        
                          <div className='col-md-10'>
                            
                            <h1 className='main_headline' style={styles.main_headline_second_variant}>Munich Pieces</h1>
                          </div>
                        </div>

                       
                         
                            <h3 className='main_headline' style={styles.main_text}>Non-Fungible Tokens, kurz NFTs, revolutionieren gerade den Kunstmarkt. Sie ermöglichen einzigartige, virtuelle Sammlerstücke, die nicht ersetz- oder kopierbar sind.
                            Um Geld für öffentliche Einrichtungen in der Stadt München zu sammeln, gibt es von verschiedenen kulturellen Gütern ein Munich Piece. Der Erlös beim Kauf eines solchen Munich Pieces
                            kommt der jeweiligen Einrichtungen zu gute, welche das Kunstwerk beheimatet.</h3>
                          
                        

                        <div className='row pt-3'>
                          <div className='col text-center'>
                            <Link to="/user_marketplace"><button className='btn btn-primary second_button' style={styles.second_button}>Erfahre Mehr</button></Link>
                          </div>
                        </div>

                      </div>

                      
                    </div>
                    </div>

          


          
              
          </Container>
        )
    }
}

