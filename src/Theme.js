import React, { Component } from 'react'
import App from './App';
import { Dropdown } from 'semantic-ui-react';


class ThemeManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTheme: 'light'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        document.body.style.backgroundColor =  'red';
    }
    
    componentDidUpdate(){
        if(this.state.selectedTheme === 'light'){
            document.body.style.backgroundColor =  'red';
        }
        else if(this.state.selectedTheme === 'dark'){
            document.body.style.backgroundColor =  '#000';
        }
    }

    componentWillUnmount(){
        document.body.style.backgroundColor =  null;
    }

    handleChange = (e, { value }) => {
        this.setState({
            selectedTheme: value
        }
        )
    }

    render() {
        return (
            <>
                <div className={this.state.selectedTheme}>
                    <App />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Dropdown
                        placeholder='Select a theme'
                        selection
                        options={themeOptions}
                        onChange={this.handleChange}
                        value={this.state.selectedTheme}
                    />
                </div>
            </>
        )
    }
}

const themeOptions = [
    {
        key: 'primaryTheme',
        text: 'Light Theme',
        value: 'light',
    },
    {
        key: 'secondaryTheme',
        text: 'Dark Theme',
        value: 'dark',
    }
]


export default ThemeManager;