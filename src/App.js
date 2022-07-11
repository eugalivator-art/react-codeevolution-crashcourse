import React from 'react';
import './style.css';
import { Greet } from './components/Greet';
import { Message } from './components/Message';
// import {Greet} from "./components/Greet" for named exports

import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';
import { NamingList } from './components/NamingList';

import { Form } from './components/Form';

export default function App() {
  var name = 'Mohan';

  return (
    <div>
      <h1>React code-evolution</h1>
      <br />
      <Greet name={name}>
        <p>this is children props</p>
      </Greet>
      <Message />

      <ClickHandler />

      <ParentComponent />

      <NamingList />

      <Form />
    </div>
  );
}
