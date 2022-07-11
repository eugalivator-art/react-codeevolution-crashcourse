import React from 'react';
import { useState } from 'react';

export const Message = (props) => {
  const [message, setMessage] = useState('Welcome visitor');

  return (
    <>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage('Thankyou for Subscribing');
        }}
      >
        {message}
      </button>
    </>
  );
};
