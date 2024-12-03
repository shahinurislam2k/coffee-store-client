import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="w-11/12 m-auto p-5">
      <h1 className="text-6xl text-red-500">
        Hot Hot cold Coffee : {loadedCoffees.length}
      </h1>
      <div className="grid grid-cols-2 p-6 gap-6">
        {loadedCoffees.map((coffee) => (
          <CoffeeCard key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
