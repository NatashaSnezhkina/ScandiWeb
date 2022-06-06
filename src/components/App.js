import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import { useQuery } from '@apollo/client';
import { GET_CARDS } from '../query/cards';

function App() {
  const [cards, setCards] = useState([]);
  const [categoryName, setCategoryName] = useState('all');
  const { data, loading } = useQuery(GET_CARDS(categoryName));

  useEffect(() => {
    if (!loading) {
      console.log(categoryName);
      console.log(data);
      const arr = data.category.products;
      setCards(arr);
    }
  });

  function handleCategoryClick(category) {
    console.log(category);
    setCategoryName(category);
  }

  return (
    <div className="App">
      <div className="root">
        <Header 
        onClick = {handleCategoryClick}/>
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
