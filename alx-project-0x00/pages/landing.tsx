import Card from "@/components/Card";
import React from 'react';

const Landing: React.FC =  () => {
  return (
    <div className="flex flex-col items-center p-4"> {/* Added some layout for better display */}
      <h1 className=" text-xl font-extralight mb-4">Landing Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Flex container for multiple cards */}
        <Card />
        <Card />
        <Card />
        {/* Add more <Card /> as desired */}
      </div>
    </div>
  )
}
export default Landing;