import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import { useQuery } from '@apollo/client';
import { GET_ALL_CARDS } from '../query/cards';

function App() {
  const [cards, setCards] = useState([]);
  const { data, loading, error } = useQuery(GET_ALL_CARDS);

  console.log(data);
  console.log(data.category.products);

  // useEffect(() => {
  //   setCards(data.category.products);
  // }, [data.category.products])

  return (
    <div className="App">
      <div className="root">
        <Header />
        <Main
          cards={cards}
        >
        </Main>

      </div>
    </div>
  );
}

export default App
