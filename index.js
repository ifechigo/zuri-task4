const fs = require('fs');
const axios = require('axios');

async function posts() {
    const url = 'http://jsonplaceholder.typicode.com/posts';
    let response = await axios.get(url);
    let data = JSON.stringify(response.data, null, 2);
 
    return data;
}

posts().then(result => {
    fs.writeFile('./result/posts.json', result, (error) => {
        if (error) {
            console.log(error);
            return
        }
        return console.log('Created File');
    });
}).catch(error => console.log(error));
   
  