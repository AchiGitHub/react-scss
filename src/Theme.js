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
        document.body.style.backgroundColor =  '#7f7f7f';
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
    
    componentDidUpdate(){
        if(this.state.selectedTheme === 'light'){
            document.body.style.backgroundColor =  '#7f7f7f';
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
        else if(this.state.selectedTheme === 'dark'){
            document.body.style.backgroundColor =  '#21232F';
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        }else if(this.state.selectedTheme === 'default'){
            document.body.style.backgroundColor =  '#fff';
            document.body.classList.add('default');
            document.body.classList.remove('light');            
            document.body.classList.remove('dark');
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
                <App />
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
    },
    {
        key: 'DefaultTheme',
        text: 'Default Theme',
        value: 'default',
    }
]


export default ThemeManager;