import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button, ButtonToolbar } from 'react-bootstrap';
import { ContactModal } from '../common/Contactmodal';


export default class contactList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          show: false,
          contacts: [],
          id: '',
          addModalShow: false,
          name: '',
          email: '',
        };
       
    }

    componentDidMount(){
        this.refreshContacts();
    }

    refreshContacts(){
        axios.get('https://reqres.in/api/users?page=2')
            .then( res => {
                console.log(res.data.data);
                this.setState({ contacts: res.data.data})
        })
    }

    render(){

        let addModalClose = () => this.setState({addModalShow: false})

        const divStyle = {
            left: 450,
            top: 200
        }

        return(
            <div>
                <div style={divStyle}>
              <ButtonToolbar>
                        <Button
                        variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}
                        >
                            Add Contact
                        </Button>

                        <ContactModal
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                        />

                    </ButtonToolbar>
              </div>
            
            <div>
                { this.state.contacts.map( contact => 
               
               <div className="border mt-4 rounded p-3" key={ contact.id }>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="float-left mr-4">
                                <img src={ contact.avatar } alt="" className="d-block rounded" height="90" />
                            </div>
                            <div className="overflow-hidden pt-2">
                                <h5 className="mb-2">{ contact.first_name } { contact.last_name }</h5>
                                <ul className="list-unstyled">
                                    <li className="text-muted"><i className="mdi mdi-account mr-1"></i>Web Developer</li>
                                    <li className="text-muted"><i className="mdi mdi-map-marker mr-1"></i>{ contact.email }</li>
                                </ul>
                            </div>
                        </div>
                            <div className="col-md-3">
                                <div className="candidates-list-fav-btn text-right">
                                    <div className="fav-icon">
                                        <i className="mdi mdi-heart"></i>
                                    </div>
                                    <div className="candidates-listing-btn mt-4">
                                        <Link to={`/details/${contact.id}`}>View Profile</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               ) }

              
            </div>
            </div>
        )
    }


}