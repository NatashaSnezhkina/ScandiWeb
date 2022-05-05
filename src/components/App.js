import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import { useQuery } from '@apollo/client';
import { GET_ALL_CARDS } from '../query/cards';

function App() {
  const [cards, setCards] = useState([]);
  const [categoryName, setCategoryName] = useState('ALL');
  const { data, loading, error } = useQuery(GET_ALL_CARDS);

  useEffect(() => {
    if (!loading) {
      const arr = data.category.products;
      setCards(arr)
    }
  })

  return (
    <div className="App">
      <div className="root">
        <Header />
        <Main
          cards={cards}
          categoryName={categoryName}
        >
        </Main>

      </div>
    </div>
  );
}

export default App
