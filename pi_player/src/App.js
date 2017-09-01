import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button, ButtonGroup } from 'reactstrap';
import FaPlay from 'react-icons/lib/fa/play';
import FaPause from 'react-icons/lib/fa/pause';
import FaStop from 'react-icons/lib/fa/stop';
import 'whatwg-fetch'

class PiPlayer extends Component {
  render() {
    return (
      <div className="test">
        <Controls />
      </div>
    );
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
    return fetch('player/play', {
      method: 'PUT',
    }).catch(function(error) {
      console.log("error playing vlc stream");
    });
  }

  stopStream() {
    return fetch('player/stop', {
      method: 'PUT',
    }).catch(function(error) {
      console.log("error stopping vlc stream");
    });
  }
}

export default PiPlayer;
