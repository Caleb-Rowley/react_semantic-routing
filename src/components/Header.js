import React from 'react';
import {
  Menu,
  Container,
  Dropdown,
  Image,
} from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';

const Header = () => (

  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' header>
        <Image size='mini' src='https://react.semantic-ui.com/logo.png' style={{ marginRight: '1.5em' }} />
        <Link to = '/'>Caleb Rowley</Link>
      </Menu.Item>
      <Menu.Item as='a'>
        <Link to = '/about'>About</Link>
      </Menu.Item>

      <Dropdown item simple text='Dropdown'>
        <Dropdown.Menu>
          <Dropdown.Item>List Item 1</Dropdown.Item>
          <Dropdown.Item>List Item 2</Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item>
            <i className='dropdown icon' />
            <span className='text'>Submenu</span>
            <Dropdown.Menu>
              <Dropdown.Item>List Item 1</Dropdown.Item>
              <Dropdown.Item>List Item 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>List Item 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>

);

export default Header;