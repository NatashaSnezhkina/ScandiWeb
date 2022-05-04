import React from 'react';

function Card({
  card,
  onCardClick,
  currentUser,
  onCardLike,
  onCardDelete
}) {

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  return (
    <div className="element">
      <img className="element__photo" src={card.gallery[0]} alt={card.name}
        onClick={handleClick} />
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <h3 className='element__price'>$50.00</h3>
      </div>
    </div>
  )
}

export default Card;