import React, {useState} from "react";
import Counter from "./components/Counter";
import Item from "./components/Item";
import styles from './styles/App.css'

function App() {
  return (
    <div className="App">
      <Item title='1 JavaScript' descriptions='JavaScript - Язык программирования' button_name='Удалить' key='1'/>
      <Item title='2 JavaScript' descriptions='JavaScript - Язык программирования' button_name='Удалить' key='2'/>
      <Item title='3 JavaScript' descriptions='JavaScript - Язык программирования' button_name='Удалить' key='3'/>
      <Item title='4 JavaScript' descriptions='JavaScript - Язык программирования' button_name='Удалить' key='4'/>
    </div>
    );
}

export default App;
