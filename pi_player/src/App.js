import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button, ButtonGroup } from 'reactstrap';
import FaPlay from 'react-icons/lib/fa/play';
import FaPause from 'react-icons/lib/fa/pause';
import FaStop from 'react-icons/lib/fa/stop';

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
  render() {
    return (
      <div>
        <Navbar inverse color="success">
          <Nav>
            <NavItem className="mx-auto">

              <ButtonGroup size="lg"> 
                <Button> <FaStop /> </Button>
                <Button> <FaPause /> </Button>
                <Button> <FaPlay /> </Button>
              </ButtonGroup>
            </NavItem>
          </Nav>
        </Navbar> 
      </div>
    );
  }
}


export default PiPlayer;
