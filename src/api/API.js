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

export const getListsAPI = (data) => {
    return axios({
        method: 'GET',
        url: data.url,
        headers: {
            'access-token': data['access-token'],
            client: data.client,
            expiry: data.expiry,
            uid: data.uid,
        },
    })
        .then((res) => res)
        .catch((err) => err);
};

export const getMessagesAPI = (data) => {
    return axios({
        method: 'GET',
        url: `messages?receiver_id=${data.user_id}&receiver_class=${data.receiver_class}`,
        params: {
            receiver_id: data.user_id,
            receiver_class: data.receiver_class,
        },
        headers: {
            'access-token': data['access-token'],
            client: data.client,
            expiry: data.expiry,
            uid: data.uid,
        },
    })
        .then((res) => res)
        .catch((err) => err);
};
