import BlurText from './BlurText';

export default function BlurTextTest() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4">BlurText Component Tests</h2>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Word Animation (Default)</h3>
        <BlurText 
          text="This text animates by words with blur effect" 
          className="text-xl"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Character Animation</h3>
        <BlurText 
          text="Character by character" 
          animateBy="letters"
          className="text-xl"
          delay={100}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">From Bottom Direction</h3>
        <BlurText 
          text="This comes from bottom" 
          direction="bottom"
          className="text-xl"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Custom Animation</h3>
        <BlurText 
          text="Custom styled animation" 
          className="text-2xl font-bold text-blue-600"
          stepDuration={0.5}
          delay={150}
        />
      </div>
    </div>
  );
}
