import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Image from "../assets/images/background.png"

export default class StorySetting extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      name: '',
      sidekickName: '',
      age: '',
      gender: ''
      // Add more fields as required
    };
  
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
  
    this.setState({
      [name]: value
    });
  }
  
  handleSubmit(event) {
    alert('Age: ' + this.state.age + ' Gender: ' + this.state.gender + ' Name: ' + this.state.name + ' Sidekick Name: ' + this.state.sidekickName)
    event.preventDefault();
  }


render() {

  const styles = {

  
  }


    return (
      <div>
      <img style={{position: "absolute", zIndex: "-9999", objectFit: "cover", width: "100%", height: "100%"}} src={Image} alt="Logo"/>

      <Container>
        <div class="row">
          <div class="col" style={{marginTop: "10%", marginLeft: "40%"}}>
            <form onSubmit={this.handleSubmit}>
              <label>
                Age:
                <input
                  name="age"
                  type="text"
                  value={this.state.age}
                  onChange={this.handleInputChange} />
              </label>
              <br />
              <label>
                Gender:
                <select
                  name="gender"
                  value={this.state.gender}
                  onChange={this.handleInputChange}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>

      </Container>

      </div>

    )
}
}

