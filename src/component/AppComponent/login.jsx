import React, { Component } from 'react'
import { Dimmer, Grid, Loader, Label, Form, Card, Button, Message, Image, Segment, Icon, Divider } from "semantic-ui-react";
import '.././../stylesheets/main.scss';

export class login extends Component {
    render() {
        return (
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' >
                <Grid.Row >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Image style={{ marginTop: '40px' }} />
                        <Segment basic>
                            <Card fluid raised={true} >
                                <Card.Content className='login-form'>
                                    <Card.Header className='login-form'>
                                        <h3>Guest Wi-Fi Login</h3>
                                    </Card.Header>
                                    <Card.Description style={{ marginTop: '20px' }}>
                                        <Form size={'large'}>
                                            <Form.Group>
                                                <Form.Input icon='user' width={'16'} label='Username' control='input' placeholder='Username' />
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Input icon='lock' width={'16'} label='Password' control='input' placeholder='Password' type='Password' />
                                            </Form.Group>
                                            <Form.Field >
                                                <Button type='submit' color='blue' size='mini' floated='right'  > <Icon name='sign in' /> Login</Button>
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
                            <Label>Hello</Label>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default login
