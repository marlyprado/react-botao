import React from 'react';
import { FiUser } from 'react-icons/fi';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  return (
    <>
      <h1>Botãozinho</h1>
      <Input label="Nome" />
      <Button
        background="pink"
        color="#234"
        iconStart={<FiUser size={16} />}
        iconEnd={<FiUser size={16} />}
      >
        Oi!
      </Button>
    </>
  );
}

export default App;
