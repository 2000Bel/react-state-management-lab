const TeamMember = ({ fighter, onRemove }) => {

    return (
      <li>
        <img src={fighter.img} alt={fighter.name} width="100" />
        <h3>{fighter.name}</h3>
        <p>Strength: {fighter.strength}</p>
        <p>Agility: {fighter.agility}</p>
        <button onClick={() => onRemove(fighter)}>Remove</button>
      </li>
      );
  };
   
  export default TeamMember;