// This file can be replaced during build by using the `fileReplacements` array.

export const environment = {
  production: false,
  firebase: {
    apiKey: process.env.NG_APP_FIREBASE_API_KEY
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
