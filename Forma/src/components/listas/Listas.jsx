import { Table } from 'react-bootstrap'
import Contact from '../contact/Contact'

const Listas = (props) => {
    return(
        <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email Address</th>
                    <th>Phone number</th>
                </tr>
            </thead>
            <tbody>
                {props.Contacts.map((contact, i) => {
                    return(
                  <Contact 
                  key={i}
                  fName={contact.fName}
                  lName={contact.lName}
                  email={contact.email}
                  phone={contact.phone}
                  />  
                )})}
            </tbody>
        </Table>
        </>
    )
}

export default Listas