import axios from 'axios';

//Set default URL for the API
axios.defaults.baseURL = 'https://slackapi.avionschool.com/api/v1/';

export const loginAPI = ({ email, password }) => {
    return axios({
        method: 'post',
        url: 'auth/sign_in',
        data: {
            email: email,
            password: password,
        },
    });
    // .then((res) => res)
    // .catch((err) => err);
};
