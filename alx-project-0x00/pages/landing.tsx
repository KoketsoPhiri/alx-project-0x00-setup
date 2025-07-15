import Card from "@/components/Card";
import Button from "@/components/Button"; // Import the Button component
import React from 'react';

const Landing: React.FC =  () => {
  return (
    <div className="flex flex-col items-center p-8"> {/* Increased padding for more space */}
      <h1 className=" text-xl font-extralight mb-8">Landing Page</h1> {/* Increased margin-bottom */}

      {/* Displaying Card(s) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card />
        <Card />
        {/* You can add more cards if you duplicated them in the previous task */}
      </div>

      <h2 className="text-2xl font-semibold mb-6">Button Examples:</h2>

      {/* Button Sizes */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Button title="Small Button" styles="py-1 px-2 text-sm" />
        <Button title="Medium Button" styles="py-2 px-4 text-base" />
        <Button title="Large Button" styles="py-3 px-6 text-lg" />
      </div>

      {/* Button Shapes */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Button title="Square Button" styles="rounded-sm" />
        <Button title="Rounded Button" styles="rounded-md" />
        <Button title="Full Rounded Button" styles="rounded-full" />
      </div>

      {/* Combined Styles */}
      <div className="flex flex-col md:flex-row gap-4">
        <Button title="Large Full" styles="py-3 px-6 text-lg rounded-full" />
        <Button title="Small Round" styles="py-1 px-2 text-sm rounded-md" />
      </div>

    </div>
  )
}
export default Landing;