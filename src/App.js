import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';

import { useState } from 'react';

function App() {

  const [coworkers, setCoworker] = useState([])

  const newCoWorker = (coworker) =>{
    setCoworker([...coworkers, coworker])
  }
  return (
    <div className="App">
        <Banner />
        <Form onSaveCoworker={coworker => newCoWorker(coworkers)}/>
        <Time nome="Programação"/>
        <Time nome="Front-End"/>
    </div>
  );
}

export default App;
