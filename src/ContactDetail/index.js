import React, {useState, useEffect }from 'react';
import { ContactModal } from '../common/Contactmodal';


function ContactDetail({ match }){

    console.log("match: ", match);

    useEffect(() => {
        fetchContact();
    }, []);

    const [contact, setContact] = useState({});

    const fetchContact = async () => {
        const fetchContact = await fetch(`https://reqres.in/api/users/${ match.params.id }`);
        const contact = await fetchContact.json();
        setContact(contact.data);
    }

    const divStyle = {
        left: 450,
        top: 200
    }

    return (
        <div className="border col-md-6 rounded p-3" key={ contact.id } style={divStyle}>
            <div className="row">
                <div className="col-md-9">
                    <div className="float-left mr-4">
                        <img src={ contact.avatar } alt="" className="d-block rounded" height="90" />
                    </div>
                    <div className="candidates-list-desc overflow-hidden job-single-meta  pt-2">
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
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ContactDetail;