import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const universal = require('./../dist/movie/server/main.js').app();
export const universalapp = functions.https.onRequest(universal);
// tslint:disable-next-line: no-empty
// export const shiva = functions.https.onRequest((req, res) => {
//     res.send({
//         jso:"sdasd"
//     })
// });