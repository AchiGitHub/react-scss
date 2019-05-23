import React, { Component } from 'react'
import { Dimmer, Grid, Modal, Loader, Label, Form, Card, Button, Message, Image, Segment, Icon, Divider } from "semantic-ui-react";

export class login extends Component {
    // componentWillMount(){
    //     require('.././../stylesheets/main.scss')
    //   }
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.toggle = this.toggle.bind(this);
    }

    show = () => this.setState({ open: true })
    close = () => {
        this.setState({ open: false })
    }

    toggle = () => {
        this.setState({
            open: true
        })
    }


    render() {
        // console.log(this.props)
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
                                                <Button type='submit' color='blue' size='mini' floated='right' onClick={this.toggle} className='button-confirm' > <Icon name='sign in' /> Login</Button>
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
                <Modal open={this.state.open} onClose={this.close.bind(this)}>
                    <Modal.Header>Delete Your Account</Modal.Header>
                    <Modal.Content>
                        <p>Are you sure you want to delete your account</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.close.bind(this)} negative>No</Button>
                        <Button primary onClick={this.close.bind(this)} className='button-confirm' positive icon='checkmark' labelPosition='right' content='Yes' />
                    </Modal.Actions>
                </Modal>
            </Grid>

        )
    }
}

export default login
