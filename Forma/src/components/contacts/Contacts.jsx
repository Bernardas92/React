import { Button} from 'react-bootstrap'
import React, { useState, useEffect } from "react";
import AddContact from '../addcontact/AddContact';
import Listas from "../listas/Listas";
import { Card } from 'react-bootstrap';

const Contacts = () => {
    const [addContact, setAddContact] = useState(false);
    const [contacts, setContacts] = useState([]);

    const saveContactHandler = (data) => {
        setContacts(...contacts, data)
        setAddContact(false);
      };

      console.log(contacts)
    return(
        <>
        {(addContact) && <AddContact onSave={saveContactHandler} />}
        <h1 style={{textAlign:'center', marginTop:'5rem'}}>Pridėkite naują kontaktą</h1>
        <div style={{textAlign:'center'}}>
            <Button className="btn btn-primary m-2" onClick={() => setAddContact(true)}> Add </Button>
            <Button className="btn btn-danger" onClick={() => { setAddContact(false); }}> Cancel </Button>
          </div>
          <Card>
          <Card.Header>
          <h3>Contacts</h3>
        </Card.Header>
        <Card.Body>
          <Listas Contacts={contacts}/>
        </Card.Body>
        </Card>

        </>
    )
}

export default Contacts