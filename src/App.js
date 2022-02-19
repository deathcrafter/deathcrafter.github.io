import './App.css';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

function App() {
  return (
    <div className="container">
      <Typed
        className='typed-text'
        strings={['Hello World!', 'I am deathcrafter.', 'Thank you for visiting my profile!', 'death.crafter']}
        cursorChar={'_'}
        typeSpeed={70}
        backSpeed={80}
        startDelay={700}
      />
    </div>
  );
}

export default App;
