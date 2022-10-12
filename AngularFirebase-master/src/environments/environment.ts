// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

export const environment = {
  production: false,
    firebaseConfig: {
    apiKey: "AIzaSyC-S4pNiGOjtVd5i5Ix8d2UrzIEzv2ie6k",
    authDomain: "crud-282a0.firebaseapp.com",
    projectId: "crud-282a0",
    storageBucket: "crud-282a0.appspot.com",
    messagingSenderId: "807321753530",
    appId: "1:807321753530:web:51f4936d303a73ce1eef83",
    measurementId: "G-B4VZXSXK99"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
