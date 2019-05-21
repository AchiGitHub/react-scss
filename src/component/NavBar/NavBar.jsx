import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react';

export class NavBar extends Component {
  render() {
    this.state = {
      items: [
        { key: 'editorials', active: true, name: 'Navigation', sub: null },
        {
          key: 'review', name: 'Guest', sub: [
            { key: 'gain', name: 'Browse', sub: null },
            { key: 'hallo', name: 'Redirect', sub: null }
          ]
        },
        { key: 'events', name: 'Captive', sub: null }
      ]
    }

    return (
      // <Menu pointing secondary>
      //   {
      //     this.state.items.map((name, index) => {
      //       // return <Menu.Item name={name.name}>{name.name}</Menu.Item>
      //       if(name.sub !== null){
      //         name.sub.map((subMenu,index)=>{
      //         //  console.log(subMenu.name)
      //         return <Menu.Item name={subMenu.name}>{subMenu.name}</Menu.Item>
      //         //    <Dropdown item text={name.name}>
      //         //   <Dropdown.Menu>
      //         //     <Dropdown.Header>{name.name}</Dropdown.Header>
      //         //     <Dropdown.item>{name.sub.name}</Dropdown.item>
      //         //   </Dropdown.Menu>
      //         // </Dropdown>
      //         })
      //       }
      //     }
      //     )
      //   }
      // </Menu>
      <Menu items={this.state.items}/>
    )
  }
}

export default NavBar