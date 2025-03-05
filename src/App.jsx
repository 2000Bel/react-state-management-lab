import { useState } from "react";
import ZombieFighter from "./components/ZombieFighter";
import TeamMember from "./components/TeamMember";

const initialFighters = [
  { id: 1, name: "Survivor", price: 12, strength: 6, agility: 4, img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png" },
  { id: 2, name: "Scavenger", price: 10, strength: 5, agility: 5, img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png" },
  { id: 3, name: "Shadow", price: 18, strength: 7, agility: 8, img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png" },
];

const App = () => {
  const [zombieFighters, setZombieFighters] = useState(initialFighters);
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setZombieFighters(zombieFighters.filter((f) => f.id !== fighter.id));
      setMoney(money - fighter.price);
    } else {
      console.log("Not enough money");
    }
  };

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((f) => f.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
  };
  const totalStrength = team.reduce((acc, fighter) => acc + fighter.strength, 0);
  const totalAgility = team.reduce((acc, fighter) => acc + fighter.agility, 0);

  return (
    <div>
      <h1>Zombie Apocalypse Team</h1>
      <h2>Money: ${money}</h2>
      <h2>Available Fighters</h2>
      <ul>
        {zombieFighters.map((fighter) => (
          <ZombieFighter key={fighter.id} fighter={fighter} onAdd={handleAddFighter} />
        ))}
      </ul>
      <h2>Your Team</h2>
      {team.length === 0 ? <p>Pick some team members!</p> : (
        <ul>
          {team.map((fighter) => (
            <TeamMember key={fighter.id} fighter={fighter} onRemove={handleRemoveFighter} />
          ))}
        </ul>
      )}

      <h3>Total Strength: {totalStrength}</h3>
      <h3>Total Agility: {totalAgility}</h3>
    </div>
  );
};

export default App;

