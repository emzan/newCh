// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCibJ7oCfDQuH3UilIAkpBRFj-f2pu3vsI",
    authDomain: "yourobe-f7675.firebaseapp.com",
    databaseURL: "https://yourobe-f7675.firebaseio.com",
    projectId: "yourobe-f7675",
    storageBucket: "yourobe-f7675.appspot.com",
    messagingSenderId: "125788694808",
    appId: "1:125788694808:web:76f75d2c4c95ee4f83566d"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
