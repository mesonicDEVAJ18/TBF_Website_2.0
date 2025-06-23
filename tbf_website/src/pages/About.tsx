export function About() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-serif mb-8">About TBF</h1>
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-serif mb-6">Our Mission</h2>
          <p className="text-lg mb-6">
            At The Brijwasi Foundation, we believe that kindness can feed the world—literally. Founded in November 2023 by Prisha Singh, our youth-led NGO is dedicated to ending hunger in our communities, in line with SDG 2: Zero Hunger.
          </p>
          <p className="text-lg">
            From food distribution drives to providing essential resources like grains, clean water, and clothes, we’re here to ensure no one sleeps hungry.
            To date, we’ve helped over 1,500 people, spreading not just food—but hope.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-serif mb-6">About Our Founder</h2>
          <p className="text-lg mb-6">
            Our Founder and President, Prisha Singh, the founder of The Brijwasi Foundation, began her journey in social service at the age of five, distributing blankets to those in need during the harsh Delhi winters. In November 2023, while in 11th grade, she officially launched The Brijwasi Foundation with a clear mission in mind: Zero Hunger.
          </p>
          <p className="text-lg mb-6">
            What began as a small team of just four members has since grown into a dedicated community. Yet, Prisha’s passion for helping people continues to drive her commitment in ensuring that no one goes to bed hungry.
          </p>
        </div>
      </div>
      {/* Centered and wider white box */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h3 className="text-xl font-serif mb-4 w-full">Our Impact</h3>
        <ul className="space-y-3">
          <li>• 1,500+ people helped</li>
          <li>• 20+ distribution drives</li>
          <li>• 100+ volunteers engaged</li>
          <li>• 5 communities served</li>
        </ul>
      </div>
    </div>
  );
}
