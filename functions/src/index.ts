import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

const universal = require('./../dist/server.js').app;
export const universalapp = functions.https.onRequest(universal);
