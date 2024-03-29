import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard'
import { useState } from 'react';


function Home() {
  const loadcoffees = useLoaderData();
  const [ coffees,setCoffees] = useState(loadcoffees)

  return (
    <div className='m-20'>
      <h1 className='text-6xl text-center text-stone-900'>Coffee : {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        
        ></CoffeeCard>)
      }
      </div>
    </div>
  )
}

export default Home;
