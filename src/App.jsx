import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("https://contact-form-backend-xk3b.onrender.com/api/contacts");
      setContacts(res.data); 
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-7">
      <ContactForm refresh={fetchContacts} />
      <ContactList contacts={contacts} refresh={fetchContacts} />
    </div>
  );
};

export default App;
