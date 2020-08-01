import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import './style.css';

const contacts = ["Mario Pernia", "Javier Quijada", "Javier Cervilla"];

function AddPersonForm(props) {
  const[person, setPerson] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    if (person !== '') {
      props.handleSubmit(person);
      setPerson("");
    }
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      placeholder="Add new contact"
      onChange={handleChange}
      value={person} />
      <button className="add" type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <>
      <AddPersonForm handleSubmit={addPerson}/>
      <PeopleList data={contacts} />
    </>
  );
}

ReactDOM.render(
  <ContactManager data={contacts} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();