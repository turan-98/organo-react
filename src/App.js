import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';
import React from 'react';

import { useState } from 'react';

function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria:'#57c2f8',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria:'#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corPrimaria:'#57c2f8',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'DevOps',
      corPrimaria:'#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Mobile',
      corPrimaria:'#57c2f8',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Gestão',
      corPrimaria:'#82cffa',
      corSecundaria: '#e8f8ff'
    }

  ]

  const [coworkers, setCoworker] = useState([])

  const newCoWorker = (coworker) =>{
    setCoworker([...coworkers, coworker])
  }
  return (
    <div className="App">
        <Banner />
        <Form onSaveCoworker={coworker => newCoWorker(coworker)}/>
        {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
    
    </div>
  );
}

export default App;
