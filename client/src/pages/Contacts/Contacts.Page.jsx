import ContactsComponent from "../../components/Contacts/Contacts.Component"
import ContactMapComponent from "../../components/ContactMap/ContactMap.Component"
import React from 'react';

const ContactsPage = () => {
    return (
        <div className="overflow-x-hidden">
            <ContactMapComponent />
            <ContactsComponent />
        </div>
    )
}

export default ContactsPage