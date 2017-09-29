import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import FaPlay from 'react-icons/lib/fa/play';
import FaPause from 'react-icons/lib/fa/pause';
import FaStop from 'react-icons/lib/fa/stop';
import 'whatwg-fetch'

class PiPlayer extends Component {
  render() {
    return (
      <div className="test">
        <Library />
        <Controls />
      </div>
    );
  }
}

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {radios : []};  
    this._playStream = this._playStream.bind(this);
  }

  componentDidMount() {
  //TODO - should fetch somewhere else? 
  //Get the list
    fetch('/library', {
      method: 'GET',
    })
    .then(response => {return response.sjon();})
    .then(data => {this.setState({radios : data});});
  }
  render() {
    return (
        <div>
          <ListGroup>
            {this._radioList()}
          </ListGroup>
        </div>);
  }

  _radioList() {
    return this.state.radios.map(radio => 
      <ListGroupItem onClick={() => this._playStream(radio.id)} tag="button" key={radio.id.toString()}>{radio.name.toString()}</ListGroupItem>);
  }

  _playStream(radioId) {
    return fetch('/player/play', {
      headers: new Headers({'content-type': 'application/json'}),
      method: 'POST',
      mode : 'cors',
      body : JSON.stringify({
        stream : radioId
      })
    }).catch(function(error) {
      console.log("error playing vlc stream");
    });
  }
}

class Controls extends Component {
  constructor(props) {
    super(props);

    this.playStream = this.playStream.bind(this);
    this.stopStream = this.stopStream.bind(this);
  }

  render() {
    return (
      <div>
        <Navbar inverse color="success">
          <Nav>
            <NavItem className="mx-auto">

              <ButtonGroup size="lg"> 
                <Button onClick={() => this.stopStream()}> <FaStop /> </Button>
                <Button> <FaPause /> </Button>
                <Button onClick={() => this.playStream()}> <FaPlay /> </Button>
              </ButtonGroup>
            </NavItem>
          </Nav>
        </Navbar> 
      </div>
    );
  }

  playStream() {
    return fetch('/player/play', {
      method: 'POST',
      mode : 'cors'
    }).catch(function(error) {
      console.log("error playing vlc stream");
    });
  }

  stopStream() {
    return fetch('/player/stop', {
      method: 'POST',
      mode : 'cors'
    }).catch(function(error) {
      console.log("error stopping vlc stream");
    });
  }
}

export default PiPlayer;
