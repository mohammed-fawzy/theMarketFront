<<<<<<< HEAD

export default function ({ $axios, error: nuxtError, store }) {
$axios.setBaseURL('https://the-market.se01.tech/')

function getHeaders() {
    const authUser = store.getters["auth/isAuthenticated"];
    const user = store.getters["auth/StateUser"]
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Content-Language': 'en'
    }
    if (authUser) {
        headers['Authorization'] = `bearer ${user.token}`;
    }

    return headers;
}

$axios.interceptors.request.use((config) => {
    // set Headers
    config.headers = getHeaders();

    return config;
},
(error) => {
    // store.commit('main/addErr', error.toString());
    return Promise.reject(error);
});
=======

export default function ({ $axios, error: nuxtError, store }) {
$axios.setBaseURL('https://the-market.se01.tech/')

function getHeaders() {
    const authUser = store.getters["auth/isAuthenticated"];
    const user = store.getters["auth/StateUser"]
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Content-Language': 'en'
    }
    if (authUser) {
        headers['Authorization'] = `bearer ${user.token}`;
    }

    return headers;
}

$axios.interceptors.request.use((config) => {
    // set Headers
    config.headers = getHeaders();

    return config;
},
(error) => {
    // store.commit('main/addErr', error.toString());
    return Promise.reject(error);
});
>>>>>>> 5f780eaab8e1d3744787a9b7a65d5dc42fb91375
}