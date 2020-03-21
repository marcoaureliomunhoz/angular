import 'jest-preset-angular';
// import './jestGlobalMocks';

window.alert = (message) => { console.log(message); };
