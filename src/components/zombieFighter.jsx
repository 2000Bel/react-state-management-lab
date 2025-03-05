const ZombieFighter = ({ fighter, onAdd }) => {

    return (
      <li>
        <img src={fighter.img} alt={fighter.name} width="100" />
        <h3>{fighter.name}</h3>
        <p>Price: ${fighter.price}</p>
        <p>Strength: {fighter.strength}</p>
        <p>Agility: {fighter.agility}</p>
        <button onClick={() => onAdd(fighter)}>Add</button>
      </li>
    );
  };
  
  export default ZombieFighter;