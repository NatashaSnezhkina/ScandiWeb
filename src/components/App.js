import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import CurrencyPopup from './CurrencyPopup';
import { useQuery } from '@apollo/client';
import { GET_CARDS } from '../query/cards';

function App() {
  const [cards, setCards] = useState([]);
  const [categoryName, setCategoryName] = useState('all');
  const [isCurrencyPopupOpen, setIsCurrencyPopupOpen] = useState(false);
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

  function handleCurrencyClick() {
    setIsCurrencyPopupOpen(!isCurrencyPopupOpen);
  }

  function closeAllPopups() {
    setIsCurrencyPopupOpen(false);
  }

  return (
    <div className="App">
      <div className="root">
        <Header
          onCategoryClick={handleCategoryClick}
          onCurrencyClick={handleCurrencyClick}
        />
        <Main
          cards={cards}
          categoryName={categoryName}
        >
        </Main>
        <CurrencyPopup
          isOpen={isCurrencyPopupOpen}
          closePopup={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App
