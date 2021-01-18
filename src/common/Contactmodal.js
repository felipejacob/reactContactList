import React, {Component} from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class ContactModal extends Component {
    constructor (props){
        super(props);
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({job: event.target.value})
      }

      handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Contact
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Job</label>
                                <input type="job" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={ this.props.onHide }>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}