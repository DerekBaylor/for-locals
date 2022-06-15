import axios from "axios";
import { getToken } from './authManager';

const dbUrl = "https://localhost:7058/api/Local";

const getLocals = () => new Promise((resolve, reject) => {
        axios
            .get(`${dbUrl}`)
            .then((response) => resolve(response.data))
            .catch(reject);
});

const getLocalById = (id) => new Promise((resolve, reject) => {
        axios
            .get(`${dbUrl}/id/${id}`)
            .then((response) => resolve((response.data)))
            .catch(reject);
});

const getLocalByFKey = (firebaseKey) => new Promise((resolve, reject) => {
        axios
        .get(`${dbUrl}/${firebaseKey}`)  
            .then((response) => resolve((response.data)))
            .catch(reject);
  });

const addLocal = (local) => new Promise((resolve, reject) => {
    return getToken().then((token) => {
        axios
            .post(`${dbUrl}`, local, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => resolve(response.data))
            .catch(reject);
    });
});

const updateLocal = (localObj) => new Promise((resolve, reject) => {
    return getToken().then((token) => {
        axios
            .post(`${dbUrl}/edit/${localObj.firebaseKey}`, localObj, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(() => getLocals().then(resolve))
            .catch(reject);
        });
});

// const updateLocal = (localObj, firebaseKey) => new Promise((resolve, reject) => {
//         axios
//         .get(`${dbUrl}/edit/${firebaseKey}`, localObj)
//         .then(() => getLocalByFKey(firebaseKey))
//         .then(resolve)
//         .catch(reject)

// });

const deleteLocalSqlDB = (local) => new Promise((resolve, reject) => {
    return getToken().then((token) => {
        axios
            .post(`${dbUrl}`, local, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(() => getLocals().then(resolve))
            .catch(reject);
    });
});

export {
    getLocals,
    getLocalById,
    getLocalByFKey,
    addLocal,
    updateLocal,
    deleteLocalSqlDB,
};