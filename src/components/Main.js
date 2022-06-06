import Card from './Card';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
  categoryName
}) {

  return (
    <main>
      <h1 className='title' align="left">{categoryName.toUpperCase()}</h1>
      <section className="elements">
        {cards.map((card) =>
        (<Card
          key={card.id}
          card={card}
          onCardClick={onCardClick}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}
        />))}
      </section>
    </main>
  )
}

export default Main;
