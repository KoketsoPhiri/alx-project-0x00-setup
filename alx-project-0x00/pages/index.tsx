import React from 'react';
import Landing from './landing'; // Import the Landing component

const Home: React.FC = () => {
  return (
    
    <main className='flex flex-col items-center justify-center min-h-screen p-4'> 
      
      <h1 className="text-4xl font-semibold mb-4">Airbnb Application Clone system</h1>
      <button className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full mb-8">Get Started</button>
      <Landing />

    </main>
  )
}

export default Home;