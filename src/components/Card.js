import React from 'react';

function Card({
  card,
  onCardClick,
  currentUser,
  onCardLike,
  onCardDelete
}) {

  return (
    <div className="element">
      <img className="element__photo" src={card.gallery[0]} alt={card.name} />
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <h3 className='element__price'>$50.00</h3>
      </div>
    </div>
  )
}

export default Card;