import React from 'react';
import './App.css';
import CarForm from './components/CarForm';
import LoginForm from './components/login/LoginForm';
import InputField from './components/login/InputField';
import SubmitButton from './components/login/SubmitButton';
import UserStores from './stores/UserStores';

function App() {

  async function componentDidMount() {
    try {

      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      });
      let result = await res.json();

      if(result && result.success) {
        UserStores.loading = false;
        UserStores.isLoggedIn = true;
        UserStores.username = result.username;
      } else {
        UserStores.loading = false;
        UserStores.isLoggedIn = false;
      }
    } catch(e) {
      UserStores.loading = false;
      UserStores.isLoggedIn = false;
    }
  }

  async function doLogout() {
    try {

      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      });
      let result = await res.json();

      if(result && result.success) {
        UserStores.isLoggedIn = false;
        UserStores.username = '';
      } 
    } catch(e) {
      console.log(e)
    }
  }


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
