import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse';
import { FaConnectdevelop, FaPuzzlePiece, FaHandHoldingUsd, FaHandHoldingHeart } from 'react-icons/fa';

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
        width: "350px",
        
      };

      

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

              <div className='col-md-6'>

                <div className='row pb-3'>

                  <div className='col-md-10'>
                    <h1 className='main_headline' style={styles.main_headline_second_variant}>Ein Stück München in deiner Tasche</h1>
                  </div>

                </div>

                <div className='row pt-3'>

                  <div className='col'>
                    <h3 className='main_headline' style={styles.main_text}>Erwerbe Kunstwerke und Orte <br></br> in München, die du liebst!</h3>
                  </div>

                </div>

                <div className='row pt-5'>
                        <div className='col'>
                            <Link to="/user_marketplace"><button className='btn btn-primary' style={cta_button}>Werde ein Teil Münchens</button></Link>
                        </div>
                </div>

              </div>

              <div className='col-4 main_picture_col' style={styles.main_picture_col}>


                <div className='row'>

                  <div className='col'>

                    <h1 className='main_picture_text text-left' style={styles.main_picture_text}>Kandinsky 1912</h1>

                  </div>

                </div>


                <div className='row'>

                  <div className='col'>

                    <img className='main_image' style={styles.main_image} src="https://www.kentpaulette.com/wp-content/uploads/horse-painting-art-wild-mustang-colorful-abstract-artist-kent-paulette.jpg"/>

                  </div>
                
                </div>


                <div className='row'>

                  <div className='col'>

                    <h5 className='main_picture_text text-left' style={styles.main_picture_small_text}>Deutsches Museum</h5>

                  </div>

                  <div className='col'>

                    <h5 className='text-left main_picture_small_text_second' style={styles.main_picture_small_text_second}>Preis 1837€</h5>

                  </div>

                </div>

              </div>


            </div>

          </div>

          <div className='container under_main_card pb-5 pt-5' style={styles.under_main_card}>

            <div className="row">
              <div className='col'>
                <h1 className='text-center pb-3 second_headline' style={styles.second_headline}>Munich Pieces</h1>
              </div>
            </div>

            <div className="row">
              <div className='col'>
                <p className='text-center'>Non-Fungible Tokens, kurz NFTs, revolutionieren gerade den Kunstmarkt. Sie ermöglichen einzigartige, virtuelle Sammlerstücke, die nicht ersetz- oder kopierbar sind.
                    Um Geld für öffentliche Einrichtungen in der Stadt München zu sammeln, gibt es von verschiedenen kulturellen Gütern ein Munich Piece. Der Erlös beim Kauf eines solchen Munich Pieces
                    kommt der jeweiligen Einrichtungen zu gute, welche das Kunstwerk beheimatet.</p>
              </div>
            </div>

            <div className='row pt-3'>
              <div className='col text-center'>
                <Link to="/user_marketplace"><button className='btn btn-primary second_button' style={styles.second_button}>Erfahre Mehr</button></Link>
              </div>
            </div>

          </div>


          <section className='container mb-5' style={styles.strip}>


            <div className='row mb-5'>
              <div className='col-12'>
                <iframe width="800" height="450" style={styles.video} src="https://www.youtube.com/embed/o050t6ntL8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>

            <div className='row text-center ml-5'>
              
              <div className='col strip_section_one pt-3 pb-3 ml-2' style={styles.strip_section_one}>
                <h3>Schritt Eins</h3>
                  Anmelden und Zahlungsmittel oder Wallet verbinden
              </div>

               <div className='col strip_section_two pt-3 pb-3' style={styles.strip_section_two}>
                  <h3>Schritt Zwei</h3>
                  Dein Lieblingsteilstück Münchens suchen und auswählen
              </div>

               <div className='col strip_section_three pt-3 pb-3' style={styles.strip_section_three}>
                  <h3>Schritt Drei</h3>
                  NFT deiner Wallet hinzufügen
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
                    <h1 style={product_section_card_header}>Kunstwerke</h1>
                </div>

                <div className="row d-flex justify-content-between mt-5 section_art" style={styles.section_art}>

                <div className="col m-2" style={product_card}>
                    <Link to="/product_01">

                    <img style={product_img} src="https://image.wmsm.co/1dfbe43fcd65c77b784779d3ec1035ba/pinakothek-der-moderne-munich.jpg?quality=80&width=800&height=600&aspect_ratio=800%3A600" className="img-fluid" />

                    <div style={desc_product}>
                      <h2 className='text-center desc_text' style={styles.desc_text}><b>Franc Marc</b></h2>
                    </div>
                    
                    </Link>
                  </div>

                  <div className="col m-2" style={product_card}>
                    <div>
                      <Link to="/product_01">
                      <img style={product_img} src="https://d2hi6w5g1vcm9d.cloudfront.net/exhibitions/_640x320_crop_top-center_none/HdK_Emre-Huener.jpg" className="img-fluid " />
                      <h2 className='text-center desc_text' style={styles.desc_text}><b>Surrealismus</b></h2>
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

                <section className='pt-3 pb-5'>

                <div className="row justify-content-center mt-5" style={product_section_card_places}>
                    <h1 style={product_section_card_header}>Orte</h1>
                </div>

              
                <div className="row d-flex justify-content-between mt-5">
                  
                  <div className="col m-2" style={product_card}>
                    <Link to="/product_01">

                    <img style={product_img} src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTOcsdYX3AovZIw2kTeBNCHY_41m9KuexkzkRUZhUKIIxZyDiqH_i-TkscINgCydN6O273MHjQR663_eO0l5RS9vQ" className="img-fluid" />

                    <div style={desc_product}>
                      <h2 className='text-center desc_text' style={styles.desc_text}><b>Schlösser & Burgen</b></h2>
                    </div>
                    
                    </Link>
                  </div>

                  <div className="col m-2" style={product_card}>
                    <div>
                      <Link to="/product_01">
                      <img style={product_img} src="https://goodmorningworld.de/wp-content/uploads/2020/07/Muenchen-Sehenswuerdigkeiten-Westpark-Pagode.jpg" className="img-fluid " />
                      <h2 className='text-center desc_text' style={styles.desc_text}><b>Gartenanlagen</b></h2>
                      </Link>
                    </div>
                  </div>

                  <div className="col m-2" style={product_card}>
                    <Link to="/product_01">
                    <img style={product_img} src="https://www.traveltelling.net/wp-content/uploads/2016/06/m%C3%BCnchen-muenchen-sommer-lieblingsorte-117.jpg" className="img-fluid " />
                    <h2 className='text-center desc_text' style={styles.desc_text}><b>Urban</b></h2>
                    </Link>
                    </div>

                </div>

                <Collapse in={!this.state.collapseMenuTwo}>

                  <div className='second_collapse'>

                  <div className="row d-flex justify-content-between mt-5">

                  <div className="col m-2" style={product_card}>
                    <Link to="/product_01">
                      <img style={product_img} src="https://www.wochenanzeiger-muenchen.de/images/2017/03/93262_wide__xl.jpg" className="img-fluid " />
                    <h2 className='text-center desc_text' style={styles.desc_text}><b>Landschaft</b></h2>
                    </Link>
                  </div>

                  <div className="col m-2" style={product_card}>
                    <div>
                      <Link to="/product_01">
                      <img style={product_img} src="https://cdn.urlaubsguru.at/wp-content/uploads/2017/03/olympiapark-muenchen-shutterstock_242486194.jpg" className="img-fluid " />
                      <h2 className='text-center desc_text' style={styles.desc_text}><b>Olympiapark</b></h2>
                      </Link>
                    </div>
                  </div>

                  <div className="col m-2" style={product_card}>
                    <Link to="/product_01">
                    <img style={product_img} src="https://phototravellers.de/wp-content/uploads/2019/08/muenchen-antiquarium-der-residenz.jpg?ezimgfmt=ngcb2/notWebP" className="img-fluid " />
                    <h2 className='text-center desc_text' style={styles.desc_text}><b>Antiquarium</b></h2>
                    </Link>
                  </div>
                    
                </div>

                </div>

                </Collapse>

                <div className='row text-center mt-2'>
                  
                  <div className='col'>

                    <button
                      onClick={this.showHideTwo}
                      className="btn btn-primary show_more_button"
                      style={styles.show_more_button}
                      type="button"
                      data-target="second_collapse"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      >
                      ...
                  </button>
                  
                  </div>
                </div>

                </section>

                <section className='row mb-5 mt-5'>

                  <div className='col'>

                    <div className='row'>

                      <div className='col'>

                        <h1 className='text-center pb-4' style={styles.heading_progress}>Aktueller Stand von Munich Pieces</h1>

                      </div>

                    </div>

                    <div className='row'>

                      <div className='col'>

                        <h2 className='text-center pb-3'>Gesammelte Einnahmen</h2>

                        <hr style={styles.progress_strip}></hr>

                        <h1 className='text-center'>24.700€</h1>

                        <hr style={styles.progress_strip}></hr>

                      </div>

                    </div>

                  </div>

                </section>

              {/*
                <section className='row pt-5 pb-5 text-center'>

                  <div className='row'>
                    <div className='col'>
                      <h1 className='pb-5 text-center'>Umweltfreundlich und sozial</h1>
                    </div>
                  </div>

                  <div className='row'>

                    <div className='col-7'>
                      <img src="https://miro.medium.com/max/1400/1*c74Am2G5x7aJ8YhXK-Hk0g.png" width="600px" height="350px"></img>
                    </div>

                    <div className='col-5 mt-5 text-justify'>
                          <p>
                          Viele Kunstwerke, Gemälde zum Beispiel, sind einzigartige Unikate. Man kann zwar ein Foto des Gemäldes machen oder eine Kopie kaufen, aber es wird immer nur das eine Original geben. In der digitalen Welt nennen sich diese einmaligen Vermögenswerte NFTs. Sie können wie jedes andere Objekt gekauft und verkauft werden, sind aber nicht anfassbar.
                          </p>
                    </div>

                  </div>

                  </section>*/}


                  <div className='row text-center mt-5'>
                    <div className='col'>

                      <div className='row'>
                        <div className='col'>
                          <FaConnectdevelop style={styles.icon}/>
                          <h1 className=''>Was sind NFTs?</h1>
                        </div>
                      </div>
                      <div className="row">
                        <div className='col'>
                          <p className='text-center' style={styles.nft_intro_text}>NFT steht für "Non-Fungible Token" und bezieht sich auf eine Art von digitalen Vermögenswerten, die auf einer Blockchain-Plattform wie Ethereum gespeichert sind. Im Gegensatz zu Kryptowährungen wie Bitcoin oder Ethereum, die untereinander austauschbar sind, sind NFTs einzigartig und können nicht durch andere Token ersetzt werden.
                          NFTs können verschiedene Arten von digitalen Inhalten darstellen, einschließlich Kunstwerken, Musik, Videospielen, virtuellen Grundstücken und Sammlerstücken. Die Einzigartigkeit von NFTs ermöglicht es den Besitzern, eindeutige digitale Objekte zu besitzen, die nicht dupliziert oder manipuliert werden können.</p>
                        </div>
                      </div>

                    </div>
                  </div>


                  <div className='row text-center mt-5'>
                    <div className='col'>

                      <div className='row'>
                        <div className='col pb-4'>
                          <FaPuzzlePiece style={styles.icon}/>
                          <h1>Was ist ein Munich Piece?</h1>
                        </div>
                      </div>
                      <div className="row">
                        <div className='col'>
                          <p className='text-center' style={styles.nft_intro_text}>Ein Munich Pieces ist ein kleiner digitaler Teil Münchens in Form eines NFTs. Diese digitalen Teile Münchens können ganz verschieden sein von digitalen Teilen von Gebäuden bis hin zu Orten und ganzen digitalen Kunstwerken. Munich Pieces sind, wie normale NFTs, einzigartig und können immer nur einmal verkauft bzw. gekauft werden, was jedes Stück exklusiv macht.</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className='row text-center mt-5'>
                    <div className='col'>

                      <div className='row'>
                        <div className='col pb-4'>
                          <FaHandHoldingUsd style={styles.icon}/>
                          <h1>Wie kaufe ich ein Munich Piece?</h1>
                        </div>
                      </div>
                      <div className="row">
                        <div className='col'>
                          <p className='text-center' style={styles.nft_intro_text}>Für den Kauf eines NFAs gelten die gleichen Regeln wie für den Kauf eines NFTs: Es wird ein Crypto Wallet benötigt, in dem das NFT sicher gespeichert wird. So ein Wallet lässt sich kostenlos und unkompliziert anlegen, ähnlich wie eine E-Mail-Adresse.
                                Um ein NFT zu erwerben, muss Kryptowährung in dem Wallet sein. Wenn das Wallet mit mindestens der Summe aufgeladen ist, die das NFT kostet, verbindet man sein Wallet mit einem NFT Store und bekommt gegen Kryptowährung sein NFT in das Wallet transferiert.
                                Weitere Informationen zu unseren NFAs und ihrem Kauf finden Sie unter „WWF & NFA" sowie unter „Hilfe & FAQ“. Alle für den Kauf rechtlich maßgeblichen Bedingungen und Informationen einschließlich Erlösbeteiligung des WWF bei Weiterverkäufen und Hinweisen zum gesetzlichen Widerrufsrecht und seinen Ausnahmen finden Sie unter „AGB“ in unseren Allgemeinen Geschäftsbedingungen. Mit dem Klick auf „Jetzt kaufen“ stimmen Sie der Ausführung des Vertrages vor Ablauf der Widerrufsfrist ausdrücklich zu und bestätigen Ihre Kenntnis davon, dass Sie dadurch Ihr Widerrufsrecht mit Beginn der Ausführung verlieren.</p>
                        </div>
                      </div>

                    </div>
                  </div>


                  <div className='row text-center mt-5'>
                    <div className='col'>

                      <div className='row'>
                        <div className='col pb-4'>
                          <FaHandHoldingHeart style={styles.icon}/>
                          <h1>Was bekomme ich für ein Munich Piece?</h1>
                        </div>
                      </div>
                      <div className="row">
                        <div className='col'>
                          <p className='text-center' style={styles.nft_intro_text}>Je nachdem was für ein Munich Piece gekauft wird gibt es diverse Benefits für dieses. Z.B. ein Realmodel, Einladungen zu eklusiven Events und jedes Mal 
                          ein offizielles Zertifikat der Stadt über den Erwerb des Munich Pieces.</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className='row '>
                    <div className='col text-center'>
                      <Link to="/user_marketplace"><button className='btn btn-primary second_button' style={styles.second_button}>Bekomme jetzt dein Munich Piece</button></Link>
                    </div>
                  </div>
                    
              </div> 

          </Container>
        )
    }
}

