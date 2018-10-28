const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://ec2-54-172-170-74.compute-1.amazonaws.com:3001'

const headers = {
    'Accept': 'application/json'
};

export const setPage1 = (payload) =>
    fetch(`${api}/page1`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const setPage2 = (payload) =>
    fetch(`${api}/page2`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const setPage3 = (payload) =>
    fetch(`${api}/page3`, {
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });