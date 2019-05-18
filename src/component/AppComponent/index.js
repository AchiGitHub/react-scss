import React, { Component } from 'react'
import {Message , Label} from 'semantic-ui-react';
// import '.././../stylesheets/main.scss';

export class index extends Component {

  componentWillMount(){
    // require('.././../stylesheets/main.scss')
  }

  render() {
    return (
      <div>
          <button className='button-primary' style={{margin:'10px'}}>Primary</button>
          <button className='button-secondary' style={{margin:'10px'}}>Secondary</button>
          <button className='button-info' style={{margin:'10px'}}>Info</button>
          <button className='button-warning' style={{margin:'10px'}}>Warning</button>
          <Message>
            <Message.Header>New Site Features</Message.Header>
            <Message.List />
          </Message>
      </div>
    )
  }
}

export default index
