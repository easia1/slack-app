import './App.css';
import axios from 'axios';
import Login from './login/Login';

function App() {
    axios.defaults.baseURL = 'https://slackapi.avionschool.com/';

    return (
        <div className="App">
            <Login />
        </div>
    );
}

export default App;
