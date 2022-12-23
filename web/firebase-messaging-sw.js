// // Import the functions you need from the SDKs you need
// importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-messagging.js");
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBuRy6Z6jvjIyl_PXEnIfdE57MIFyBzb-0",
//   authDomain: "posapp-ab28a.firebaseapp.com",
//   projectId: "posapp-ab28a",
//   storageBucket: "posapp-ab28a.appspot.com",
//   messagingSenderId: "504708576326",
//   appId: "1:504708576326:web:fe4208c2479e96413b0647"
// };

// // Initialize Firebase
// const app =firebase.initializeApp(firebaseConfig);
// const messaging= firebase.messaging();
// messaging.onBackgroundMessage(function(payload){
// console.log("recieved background message",payload);
// const notifiacationtitle=payload.notifiacation.title;
// const notifiacationOptions={
// body: payload.notifiacation.body,
// };
// self.ServiceWorkerRegistration.showNotification(notifiacationtitle,notifiacationOptions);

// }
// );
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");
const firebaseConfig = {
  apiKey: "AIzaSyAlro97SUYB2tBtayDn4anNMNv2a0pe_F4",
  authDomain: "blinkmessanger.firebaseapp.com",
  projectId: "blinkmessanger",
  storageBucket: "blinkmessanger.appspot.com",
  messagingSenderId: "628093645210",
  appId: "1:628093645210:web:c75dd5a6270bddec26ca23",
  measurementId: "G-VQTNVSYM6S"
};

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});