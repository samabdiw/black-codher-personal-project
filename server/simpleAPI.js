const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/api/users', function (_, res) {
   fs.readFile(path.join(__dirname, "models", "data.json"), 'utf8', function (__, data) {
      console.log(data);
   });
})

// const server = app.listen(3000, function () {
//  console.log('Node server is running http://localhost:3000 ...');
// });

app.listen(3000, function() {
   console.log('Node server is running http://localhost:3000/api/users');
})