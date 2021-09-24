import axios from 'axios';

//Set default URL for the API
axios.defaults.baseURL = 'https://slackapi.avionschool.com/api/v1/';

export const userSessionAPI = (data) => {
    return axios({
        method: 'post',
        url: data.url,
        data: {
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
        },
    });
};
