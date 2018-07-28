// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCmiI8ecG4P_QJxQ-HsPxnkPgW3QIj_rpg",
    authDomain: "books-store-81a42.firebaseapp.com",
    databaseURL: "https://books-store-81a42.firebaseio.com",
    projectId: "books-store-81a42",
    storageBucket: "books-store-81a42.appspot.com",
    messagingSenderId: "876979723286"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
