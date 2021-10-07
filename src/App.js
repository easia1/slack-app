import './App.css';
import './login/login.css';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import PrivateRoute from './PrivateRoute';
import LoginPage from './login/LoginPage';

function App() {
    // // Logged In
    // useEffect(() => {
    //     const localStorageLoginUser = JSON.parse(localStorage.getItem('User'));

    //     if (localStorageLoginUser) {
    //         setLoginMessage('Logging you in...');

    //         userSessionAPI(localStorageLoginUser)
    //             .then((res) => {
    //                 setHeaders(res.headers);
    //                 setUser(res.data.data);
    //                 setLoginMessage('Logged in!');
    //                 setIsLoggedIn(true);
    //             })
    //             .catch((err) => {
    //                 if (err.response) {
    //                     // Request made and server responded
    //                     console.log(err.response.data);
    //                     console.log(err.response.status);
    //                     console.log(err.response.headers);
    //                     setHeaders('');
    //                     setUser('');
    //                     setLoginMessage(err.response.data.errors[0]);
    //                     setTimeout(() => {
    //                         setLoginMessage('');
    //                     }, 3000);
    //                     setTimeout(() => {
    //                         setLoginMessage('');
    //                     }, 3000);
    //                 } else if (err.request) {
    //                     // The request was made but no response was received
    //                     console.log(err.request);
    //                     setLoginMessage('Server error, please try again.');
    //                     setTimeout(() => {
    //                         setLoginMessage('');
    //                     }, 3000);
    //                 } else {
    //                     // Something happened in setting up the request that triggered an Error
    //                     console.log('Error', err.message);
    //                 }
    //             });
    //     }
    // }, []);

    return (
        <div className="App">
            {/* <Router> */}
            <Switch>
                <PrivateRoute component={Main} path="/" exact />

                <Route component={LoginPage} />
            </Switch>
            {/* </Router> */}
        </div>
    );
}

export default App;
