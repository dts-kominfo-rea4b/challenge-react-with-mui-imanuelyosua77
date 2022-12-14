import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
// import TestingData from './components/TestingData';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import { useState } from 'react';

const App = () => {

  const [kontak, setKontak] = useState(contactsJSON)
  function spreadData(newContact) {
    setKontak([...kontak, newContact])

  }

  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm


  return (
    <div className="App">
      <Header />
      <ContactForm spreadData={spreadData} />
      {kontak.map((contacts, index)=>{
        return (
          <Contact key={index} data={contacts} />
        )
      })}   
    </div>
  );
};

export default App;
