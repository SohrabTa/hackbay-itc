import React, { Component } from 'react';
import backgroundImage from "../assets/images/background.png"
import chapter1Image from "../assets/images/chapters/1.png"
import chapter2Image from "../assets/images/chapters/2.png"
import chapter2aImage from "../assets/images/chapters/2a.png"
import chapter2bImage from "../assets/images/chapters/2b.png"
import chapter3aImage from "../assets/images/chapters/3a.png"
import chapter3bImage from "../assets/images/chapters/3b.png"
import chapter4aImage from "../assets/images/chapters/4a.png"
import chapter4bImage from "../assets/images/chapters/4b.png"
import chapter5aImage from "../assets/images/chapters/5a.png"
import chapter5bImage from "../assets/images/chapters/5b.png"
import chapter6Image from "../assets/images/chapters/6.png"
import chapter7aImage from "../assets/images/chapters/7a.png"
import chapter7bImage from "../assets/images/chapters/7b.png"
import chapter8aImage from "../assets/images/chapters/8a.png"
import chapter8bImage from "../assets/images/chapters/8b.png"
import { Tabs, Tab } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const story = {
  chapter1: {
    text: "In a universe beyond our sight, Where stars twinkle with gentle light, Lived a brave young girl named Lily fair, With her sidekick panda, Hanz, a furry pair.",
    image: chapter1Image,
    option1: 'chapter2',
    option1Text: "Start your adventure!",
  },
  chapter2: {
    text: "One day, on their cosmic stroll, Hanz tripped and injured his paw, oh no! Lily knew they needed help, and how, From a distant universe, they'd seek aid now.",
    image: chapter2Image,
    option1: 'chapter2a',
    option1Text: "Lily chooses to visit Universe A",
    option2: 'chapter2b',
    option2Text: "Lily chooses to visit Universe B",
  },
  chapter2a: {
    text: "Lily and Hanz embarked on their cosmic flight, To Universe A, where healing shines so bright. Through shimmering stardust, they'd find their way, To a kind doctor, who'd mend Hanz's paw that day.",
    image: chapter2aImage,
    option1: 'chapter3a',
    option1Text: "Lily follows the path of sparkling stars",
    option2: 'chapter3b',
    option2Text: "Lily seeks guidance from the singing moon",
  },
  chapter2b: {
    text: "Lily and Hanz soared through the Milky Way, To Universe B, where gardens bloomed at play. Among celestial flora and fauna so grand, They'd find a doctor with a gentle healing hand.",
    image: chapter2bImage,
    option1: 'chapter3a',
    option1Text: "Lily ventures into the Enchanted Rose Garden",
    option2: 'chapter3b',
    option2Text: "Lily seeks wisdom from the Whistling Willow",
  },
  chapter3a: {
    text: "In the vast expanse of the sterile domain, Lily and Hanz faced perils, but didn't complain. A friendly local guided them with care, Warning of the boss, urging them to beware.",
    image: chapter3aImage,
    option1: 'chapter4a',
    option1Text: "Lily and Hanz drink the magic potion for courage",
    option2: 'chapter4b',
    option2Text: "Lily and Hanz drink the magic potion for strength",
  },
  chapter3b: {
    text: "Guided by the Whistling Willow's serene tune, Lily and Hanz traversed a sound-filled dune. With deep breaths and a calm heart to embrace, They conquered the region, finding solace and grace.",
    image: chapter3bImage,
    option1: 'chapter4a',
    option1Text: "Lily and Hanz use their bravery to face the roaring winds",
    option2: 'chapter4b',
    option2Text: "Lily and Hanz use their wits to find a peaceful path",
  },
  chapter4a: {
    text: "Armed with their potion's extraordinary might, Lily and Hanz faced Boss Harrold with delight. A loud and enormous creature he was, But their courage helped them navigate his buzz.",
    image: chapter4aImage,
    option1: 'chapter5a',
    option1Text: "Lily and Hanz outmaneuver Boss Harrold with their speed",
    option2: 'chapter5b',
    option2Text: "Lily and Hanz outsmart Boss Harrold with their cleverness",
  },
  chapter4b: {
    text: "Empowered by their potion's strength so true, Lily and Hanz approached Boss Harrold anew. By staying still as stones, they found their way, In the boss's belly, where they decided to stay.",
    image: chapter4bImage,
    option1: 'chapter5a',
    option1Text: "Lily and Hanz explore the boss's belly to find treasures",
    option2: 'chapter5b',
    option2Text: "Lily and Hanz lie still, bonding in the boss's belly",
  },
  chapter5a: {
    text: "Inside Boss Harrold's belly, they dwell, Exploring together, a tale to tell. They found treasures , wonders galore, Bonding deeply as friends, forevermore.",
    image: chapter5aImage,
    option1: 'chapter6',
    option1Text: "We are staying still!",
  },
  chapter5b: {
    text: "Lying still in the boss's cavernous space, Lily and Hanz embraced the quiet embrace. In the belly's darkness, their friendship grew, A bond so strong, nothing could undo.",
    image: chapter5bImage,
    option1: 'chapter6',
    option1Text: "We are best friends!",
  },
  chapter6: {
    text: "After an eternity of stillness, their moment arrived, Boss Harrold's defeat, they finally contrived. With a final roar and a triumphant cheer, They emerged victorious, their mission clear.",
    image: chapter6Image,
    option1: 'chapter7a',
    option1Text: "Lily and Hanz find the doctor waiting outside",
    option2: 'chapter7b',
    option2Text: "Lily and Hanz venture to find the doctor's secret hideout",
  },
  chapter7a: {
    text: "Outside Boss Harrold's realm, the doctor awaited, With gentle hands, Hanz's paw was dedicated. Lily and Hanz bid the doctor farewell, With memories to cherish, a tale they'd forever tell.",
    image: chapter7aImage,
    option1: 'chapter8a',
    option1Text: "Thank you, Doc!",
  },
  chapter7b: {
    text: "Through secret tunnels and hidden doors, Lily and Hanz sought the doctor's shores. Healing energies flowed in this sacred place, As the doctor mended Hanz's paw with grace.",
    image: chapter7bImage,
    option1: 'chapter8b',
    option1Text: "Thank you, Doc!",
  },
  chapter8a: {
    image: chapter8aImage,
    text: "Back in their home of Ingolstadt's embrace, Lily and Hanz cherished memories, a happy space. Their adventure bonded them strong and true, With unbreakable friendship, forever they grew.",
    option1: 'FinalPage',
    option1Text: "Finish your story",
  },
  chapter8b: {
    image: chapter8bImage,
    text: "With adventures in their hearts, new horizons to seek, Lily and Hanz set sail, their journey far from weak. In the vast expanse of the universe untold, They embarked on a new story, courageous and bold.",
    option1: 'FinalPage',
    option1Text: "Finish your story",
  },
}

export default class StoryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: 'tab1',
      storyNodeDay1: story.chapter1,
      storyNodeDay2: story.chapter3a,  // default starting chapter for day 2
      storyNodeExamDay: story.chapter5a,  // default starting chapter for day 3
    };
  }
  
  setStoryNodeDay1 = (nodeKey) => {
    if (['chapter1', 'chapter2', 'chapter2a', 'chapter2b'].includes(nodeKey)) {
      this.setState({ storyNodeDay1: story[nodeKey] });
    } else {
      console.warn(`Invalid nodeKey '${nodeKey}' for Day2`);
    }
  }
  
  setStoryNodeDay2 = (nodeKey) => {
    if (['chapter3a', 'chapter3b', 'chapter4a', 'chapter4b'].includes(nodeKey)) {
      this.setState({ storyNodeDay2: story[nodeKey] });
    } else {
      console.warn(`Invalid nodeKey '${nodeKey}' for Day2`);
    }
  }

  setStoryNodeExamDay = (nodeKey) => {
    if (['chapter5a', 'chapter5b', 'chapter6', 'chapter7a', 'chapter7b', 'chapter8a', 'chapter8b'].includes(nodeKey)) {
      this.setState({ storyNodeExamDay: story[nodeKey] });
    } else {
      console.warn(`Invalid nodeKey '${nodeKey}' for Day3`);
    }
  }

    render() {

      const styles = {
        tabs: {
          backgroundColor: 'rgba(63, 81, 181, 0.5)', // semi-transparent dark blue
          color: 'white',
          borderRadius: '5px',
          padding: '10px',
          width: 'fit-content',
          margin: '20px'
        }
      }

        return (
          <div>
            <img style={{position: "absolute", zIndex: "-9999", objectFit: "cover", width: "100%", height: "100%", top: "0", bottom: "0"}} src={backgroundImage} alt="BackgroundImage"/>
            <Tabs
              id="controlled-tab-example"
              activeKey={this.state.key}
              onSelect={(k) => this.setKey(k)}
              style={styles.tabs}
            >
              <Tab eventKey="tab1" title="Day 1">
                <Container>

                  <div class="row">

                    <div class="col" style={{marginLeft: "12%"}}> 

                      <img style={{borderRadius: "10px", padding: "1%", width: "800px", height: "auto" }} src={this.state.storyNodeDay1.image} ></img>

                    </div>

                  </div>

                  <div class="row">

                    <div class="col" style={{border: "solid 2px black", textAlign: "center", padding: "1%", borderRadius: "10px", backgroundColor: "white"}}> 

                      {this.state.storyNodeDay1.text}

                    </div>

                  </div>

                  <div class="row" style={{marginTop: "3%"}}>

                    <div class="col" style={{marginLeft: this.state.storyNodeDay1.option2 ? "13%" : "40%"}}> 

                      <Button style={{backgroundColor: "white", color: "blue"}} onClick={() => this.setStoryNodeDay1(this.state.storyNodeDay1.option1)}>{this.state.storyNodeDay1.option1Text}</Button>

                    </div>
                    <div class="col" style={{marginLeft: "10%"}}> 

                      {this.state.storyNodeDay1.option2 && 
                        <Button style={{backgroundColor: "white", color: "blue"}} onClick={() => this.setStoryNodeDay1(this.state.storyNodeDay1.option2)}>{this.state.storyNodeDay1.option2Text}</Button>
                      }

                    </div>

                  </div>


                </Container>
              </Tab>
              <Tab eventKey="tab2" title="Day 2">
                <Container>

                  <div class="row">

                    <div class="col" style={{marginLeft: "12%"}}> 

                      <img style={{borderRadius: "10px", padding: "1%", width: "800px", height: "auto" }} src={this.state.storyNodeDay2.image} ></img>

                    </div>

                  </div>

                  <div class="row">

                    <div class="col" style={{border: "solid 2px black", textAlign: "center", padding: "1%", borderRadius: "10px", backgroundColor: "white"}}> 

                      {this.state.storyNodeDay2.text}

                    </div>

                  </div>

                  <div class="row" style={{marginTop: "3%"}}>

                    <div class="col" style={{marginLeft: this.state.storyNodeDay2.option2 ? "13%" : "40%"}}> 

                      <Button style={{backgroundColor: "white", color: "blue"}} onClick={() => this.setStoryNodeDay2(this.state.storyNodeDay2.option1)}>{this.state.storyNodeDay2.option1Text}</Button>

                    </div>
                    <div class="col" style={{marginLeft: "10%"}}> 

                      {this.state.storyNodeDay2.option2 && 
                        <Button style={{backgroundColor: "white", color: "blue"}} onClick={() => this.setStoryNodeDay2(this.state.storyNodeDay2.option2)}>{this.state.storyNodeDay2.option2Text}</Button>
                      }

                    </div>

                  </div>


                </Container>
              </Tab>
              <Tab eventKey="tab3" title="Examination Day">
                <Container>

                  <div class="row">

                    <div class="col" style={{marginLeft: "12%"}}> 

                      <img style={{borderRadius: "10px", padding: "1%", width: "800px", height: "auto" }} src={this.state.storyNodeExamDay.image} ></img>

                    </div>

                  </div>

                  <div class="row">

                    <div class="col" style={{border: "solid 2px black", textAlign: "center", padding: "1%", borderRadius: "10px", backgroundColor: "white"}}> 

                      {this.state.storyNodeExamDay.text}

                    </div>

                  </div>

                  <div class="row" style={{marginTop: "3%"}}>

                    <div class="col" style={{marginLeft: this.state.storyNodeExamDay.option2 ? "13%" : "40%"}}> 

                      <Button style={{backgroundColor: "white", color: "blue"}} onClick={() => this.setStoryNodeExamDay(this.state.storyNodeExamDay.option1)}>{this.state.storyNodeExamDay.option1Text}</Button>

                    </div>
                    <div class="col" style={{marginLeft: "10%"}}> 

                      {this.state.storyNodeExamDay.option2 && 
                        <Button style={{backgroundColor: "white", color: "blue"}} onClick={() => this.setStoryNodeExamDay(this.state.storyNodeExamDay.option2)}>{this.state.storyNodeExamDay.option2Text}</Button>
                      }

                    </div>

                  </div>
                </Container>
              </Tab>
            </Tabs>
          </div>
        )
    }
}


