import React from 'react';

export function About() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-serif mb-8">About TBF</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-serif mb-6">Our Mission</h2>
          <p className="text-lg mb-6">
            With a mission to help everyone around us and a focus on SDG 2: Zero Hunger, 
            The Brijwasi Foundation was founded by Prisha Singh in November 2023. We are 
            committed to making the world better through acts of kindness and holding 
            distribution drives.
          </p>
          <p className="text-lg">
            To date, we have positively impacted over 1,500 people and families by providing 
            essential resources such as whole grains, cooked food, water, clothes etc.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-serif mb-6">About Our Founder</h2>
          <p className="text-lg mb-6">
            Our Founder and President, Prisha Singh, aspires to bring a positive change in 
            society. She is currently in 12th Grade and is dedicated to the commitment of 
            the NGO.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-serif mb-4">Our Impact</h3>
            <ul className="space-y-3">
              <li>• 1,500+ people helped</li>
              <li>• 20+ distribution drives</li>
              <li>• 100+ volunteers engaged</li>
              <li>• 5 communities served</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}