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
            document.body.style.backgroundImage =  'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%)';
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        }else if(this.state.selectedTheme === 'default'){
            document.body.style.background =  '#fff';
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