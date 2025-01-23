import { useState } from "react";

function Country() {
  const [name] = useState("United States");
  const [gold, setGold] = useState(0); 

  const handleClick = () => {
    setGold((prevGold) => prevGold + 1);
  };

  return (
    <div className="country">
      <h2>{name}</h2>
      <div>
        <p>Gold Medals: {gold}</p>
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}

export default Country;
