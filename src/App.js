import React from 'react';
import './App.css';
import CarForm from './components/CarForm';

function App() {
  return (
    <div>
    <div className="cms-wrap">
      <CarForm />
    </div>
      <div className='car-form-made-with'>
        <h4 style={{ color: 'white' }}>Made with 💘 by Isa</h4>
      </div>
    </div>
  );
}

export default App;
