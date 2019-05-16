import React, { Component } from 'react'
import ThemeLight from './theme-light';
import ThemeDark from './theme-dark';

class ThemeManager extends Component {
  render() {
    switch(this.props.theme){
        case 'light':
            return <ThemeLight/>
        case 'dark':
            return <ThemeDark/>
        default:
            return null;
    }
  }
}

export default ThemeManager;