const https = require('https');
var request = require('request');
var fs = require('fs');

// function getShit (){
//   request.get('https://sytantris.github.io/http-examples/future.jpg', function(err, response, body) {
//     if (err) {
//       throw err;
//     } else {
//       // console.log('Response Status Code: ', response.statusCode)

//       .on('response', function (response){
//         console.log('Response Status Code: ', response.statusCode, response.headers['content-type'], 'Downloading image...')
//       })

//       // console.log('Download Complete')
//       .pipe(fs.createWriteStream('./future.jpg'));
//     }
//   });
// }


function getShit() {
  request
    .get('https://sytantris.github.io/http-examples/future.jpg')
    .on('error', function (err) {
      throw err;
    })
    .on('response', function (response) {
      console.log('Response Status Code: ', response.statusCode, response.headers['content-type'], 'Downloading image...');
    })
    .pipe(fs.createWriteStream('./future.jpg'));
    console.log('Download Complete')
}



getShit();