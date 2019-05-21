import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react';

class confirmationModal extends Component {
    state = { open: false }

    show = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

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
                <Modal open={open} onClose={this.close.bind(this)} className='dark'>
                    <Modal.Header>Delete Your Account</Modal.Header>
                    <Modal.Content>
                        <p>Are you sure you want to delete your account</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.close.bind(this)} negative>No</Button>
                        <Button onClick={this.close.bind(this)} positive icon='checkmark' labelPosition='right' content='Yes' />
                    </Modal.Actions>
                </Modal>
        )
    }
}

export default confirmationModal
