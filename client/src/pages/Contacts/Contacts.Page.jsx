import ContactsComponent from "../../components/Contacts/Contacts.Component"
import ContactMapComponent from "../../components/ContactMap/ContactMap.Component"
import React from 'react';

const ContactsPage = () => {
    return (
        <>
            <ContactMapComponent />
            <ContactsComponent />
        </>
    )
}

export default ContactsPage