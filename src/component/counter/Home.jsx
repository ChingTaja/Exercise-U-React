import { useState } from 'react';

import Counter from './Counter/Counter.jsx';
import Header from './Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './ConfigureCounter.jsx';

function CounterHome() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);
  
  function handleSetCount(newCount) {
    setChosenCount(newCount);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default CounterHome;
