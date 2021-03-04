import React, { useState } from 'react';
import Cards from 'react-credit-cards';

import { Container } from './style';

const MyCards = () => {
  const [data, setData] = useState({
    cvc: '',
    expiry: '',
    name: '',
    number: '',
  });
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <div id='PaymentForm'>
        <Cards
          cvc={data.cvc}
          expiry={data.expiry}
          focus={data.focus}
          name={data.name}
          number={data.number}
        />
        <form action=''>
          <input
            type='number'
            name='cvc'
            placeholder='CVC'
            onChange={handleInputChange}
          />
          <input
            type='date'
            name='expiry'
            placeholder='Expire Date'
            onChange={handleInputChange}
          />
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            autocomplete='false'
            onChange={handleInputChange}
          />
          <input
            type='number'
            name='number'
            placeholder='Card Number'
            onChange={handleInputChange}
          />
        </form>
      </div>
    </Container>
  );
};

export default MyCards;
