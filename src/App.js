import logo from './logo.svg';
import './App.css';
import { Contact } from './models/Contact.class';
import ContactComponent from './components/pure/forms/ContactComponent';

function App() {
  const defaultContact = new Contact('Miguel Angel', 'Jurado', 'majg1987@gmail.com', true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Contacto:</h1>
        <ContactComponent contact = { defaultContact }/>
      </header>

    </div>
  );
}

export default App;
