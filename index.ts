import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url)
    .then(result => {
        console.log(result.data);
    })
    .catch(error => {
        console.log(error);
    })