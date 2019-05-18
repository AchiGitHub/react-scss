import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';

export class NavBar extends Component {
  render() {
    const items = [
        { key: 'editorials', active: true, name: 'Home' },
        { key: 'review', name: 'Guest' },
        { key: 'events', name: 'Captive' },
      ]

    return (
        <div>
            <Menu items={items} pointing secondary/>
        </div>
    )
  }
}

export default NavBar
