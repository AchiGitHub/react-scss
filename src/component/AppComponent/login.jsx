import React, { Component } from 'react'
import { Dimmer, Grid, Loader, Label, Form, Card, Button, Message, Image, Segment, Icon, Divider } from "semantic-ui-react";
import ConfirmationModal from '../confirmationModal/confirmationModal';

export class login extends Component {
    // componentWillMount(){
    //     require('.././../stylesheets/main.scss')
    //   }
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.toggle = this.toggle.bind(this)
    }

    // show = () => () => this.setState({ open: true })

    toggle = () => {
        this.setState({
            open: true
        })
    }


    render() {
        return (
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' >
                <Grid.Row >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Image style={{ marginTop: '40px' }} />
                        <Segment basic>
                            <Card fluid raised={true} >
                                <Card.Header className='login-form'>
                                    <h3>Guest Wi-Fi Login</h3>
                                </Card.Header>
                                <Card.Content className='login-form'>
                                    <Card.Description style={{ marginTop: '20px' }}>
                                        <Form size={'large'}>
                                            <Form.Group>
                                                <Form.Input icon='user' width={'16'} label='Username' control='input' placeholder='Username' />
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Input icon='lock' width={'16'} label='Password' control='input' placeholder='Password' type='Password' />
                                            </Form.Group>
                                            <Form.Field >
                                                <Button type='submit' color='blue' size='mini' floated='right' onClick={this.toggle}  > <Icon name='sign in' /> Login</Button>
                                            </Form.Field>
                                            <Divider hidden />
                                            <Form.Field style={{ marginTop: '10%' }}>
                                                <Message
                                                    error
                                                    header='This is a header'
                                                    content='This is the content'
                                                />
                                            </Form.Field>
                                        </Form>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <ConfirmationModal open={this.state.open} onClick={this.toggle} />
            </Grid>
        )
    }
}

export default login
