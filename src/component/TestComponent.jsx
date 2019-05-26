import React, { Component } from 'react'
import { Button, Card, Form  } from 'semantic-ui-react';
import '../stylesheets/main.scss';

class TestComponent extends Component {
    render() {
        return (
            <div className='theme-dark'>
                <Card>
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
                </Card>
            </div>
        )
    }
}

export default TestComponent
