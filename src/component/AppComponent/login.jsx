import React, { Component } from 'react'
import { Dimmer, Grid, Modal, Loader, Label, Form, Card, Button, Message, Image, Segment, Icon, Divider, Input } from "semantic-ui-react";

export class login extends Component {
    render() {
        return (
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column style={{ maxWidth: 400, height: "100%", marginTop: "2%" }}>
                        <Segment basic>
                            <Card fluid raised={true} >
                                <Card.Header className='login-form' style={{ padding: "25px" }}>
                                    <h3>Guest Wi-Fi</h3>
                                </Card.Header>
                                <Card.Content className='login-form'>
                                    <h3 style={{ color: "#000" }}>Log-in</h3>
                                    <Card.Description>
                                        <Form size={'large'} >
                                            <Form.Group>
                                                <Input icon='user' control='input' placeholder='Username' />
                                            </Form.Group>
                                            <Form.Group >
                                                <Input icon='lock' style={{ marginTop: "10px" }} control='input' placeholder='Password' type='Password' />
                                            </Form.Group>
                                            <Form.Field >
                                                <Button type='submit' color='blue' style={{ width: "70%", marginTop: "25px", marginLeft: "1%" }} onClick={this.toggle} className='button-confirm' > <Icon name='sign in' /> Login</Button>
                                            </Form.Field>
                                            <Divider hidden />
                                        </Form>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default login
