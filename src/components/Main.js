import React, { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete
}) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <h1 className='title' align="left">Categoty name</h1>
      <section className="elements">
        {cards.map((card) =>
        (<Card
          key={card._id}
          card={card}
          onCardClick={onCardClick}
          currentUser={currentUser}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}
        />))}
      </section>
    </main>
  )
}

export default Main;
