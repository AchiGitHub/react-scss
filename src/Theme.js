import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react';
import App from './App';

class ThemeManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTheme: 'light'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        document.body.style.backgroundImage =  'linear-gradient(129deg, rgba(90,22,136,0.9260209677875906) 10%, rgba(37,188,218,0.8970354605412137) 70%)';
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
    
    componentDidUpdate(){
        if(this.state.selectedTheme === 'light'){
            document.body.style.backgroundImage =  'linear-gradient(129deg, rgba(90,22,136,0.9260209677875906) 10%, rgba(37,188,218,0.8970354605412137) 70%)';
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
        else if(this.state.selectedTheme === 'dark'){
            document.body.style.backgroundImage =  'linear-gradient(39deg, rgba(128,101,67,0.812977489526721) 21%, rgba(51,38,110,0.8) 68%)';
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        }else if(this.state.selectedTheme === 'default'){
            document.body.style.backgroundImage =  '#fff';
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