import Header from "../components/header/Header";
import Contacts from "../components/contacts/Contacts";
import {useState} from "react";
import Listas from "../components/listas/Listas";

const App = ()=>  {
  const [contact, setContact] = useState([]);

  const handleFormData = (data)=>{
      setContact((prevData)=>{
          return [data,...prevData] //Grazink masyva pridedamas data, kaip nauja elementa
      })
      //console.log('Duomenys is formos: ',data); //Ispausdinamas objektas
  }
  console.log(contact)
  return (
      <div className="container">
          <Header/>
          <Contacts onSave={handleFormData}/>
          <div className="row">
              {contact.length ? contact.map((c)=><Listas fName={c.fName} lName={c.lName} email={c.email} phone={c.phone} />):null}
          </div>
      </div>
  )
}

export default App;
//header ir contacts