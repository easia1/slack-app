import './App.css';
import axios from 'axios';
import Login from './login/Login';
import Register from './login/Register'

function App() {
    axios.defaults.baseURL = 'https://slackapi.avionschool.com/';

    return (
        <div className="App">
            <Login />
            <br />
            <Register />       
        </div>
    );
}

export default App;
