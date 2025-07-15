import Card from "@/components/Card";
import Button from "@/components/Button"; // Import the Button component
import React from 'react';


const Landing: React.FC = () => {
  return (
    
    <div className="min-h-screen w-full flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-x-hidden">

     
      <h1 className="text-5xl font-extrabold text-gray-900 mb-12 text-center "rounded-sm", "rounded-lg", "rounded-full"">
        Welcome to Our Airbnb Clone
      </h1>

     
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Properties</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 place-items-center">
        <Card />
       
      </div>
      <div className="flex md:flex-row justify-center items-center mb-8 flex-wrap">
          <Button title="Small Button" styles="py-1 px-3 text-sm rounded" />
        </div>
      

    </div>
  );
};

export default Landing;
