import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/Contact.class';
const ContactComponent = ({ contact }) => {
    console.log(contact.conectado);
    return (
        <div>
            <p>Nombre: { contact.nombre }</p>
            <p>Apellido: { contact.apellido }</p>
            <p>Email: { contact.email }</p>
            <p>{contact.conectado ? "Contacto en Línea" : "Contacto No Disponible"}</p>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
