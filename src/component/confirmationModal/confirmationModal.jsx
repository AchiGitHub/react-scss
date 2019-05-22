import React, { Component } from 'react'
import { Modal, Button, Form, Icon, Divider, Message } from 'semantic-ui-react';

class confirmationModal extends Component {
    state = { open: '' }

    show = () => this.setState({ open: true })
    close = () => {
        this.setState({ open: false })
    }

    static getDerivedStateFromProps(nextProps) {
        if (nextProps) {
            return ({
                open: nextProps.open
            })
        }
        else {
            return null;
        }
    }

    render() {
        const { open } = this.state

        return (
            <Modal open={open} onClose={this.close.bind(this)}>
                <Modal.Header>Delete Your Account</Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete your account</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.close.bind(this)} negative>No</Button>
                    <Button primary onClick={this.close.bind(this)} className='button-confirm' positive icon='checkmark' labelPosition='right' content='Yes' />
                </Modal.Actions>
            </Modal>
        )
    }
}

export default confirmationModal