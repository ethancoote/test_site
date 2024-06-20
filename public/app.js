// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { createApp, reactive } from "https://unpkg.com/petite-vue?module";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Xoomh0K0_FvQZBHB32H0KuYTCRLpHUI",
  authDomain: "test-site-322cc.firebaseapp.com",
  projectId: "test-site-322cc",
  storageBucket: "test-site-322cc.appspot.com",
  messagingSenderId: "489598342911",
  appId: "1:489598342911:web:7e00fa969faa9cd2955eca",
  measurementId: "G-GGY6WPCFR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


createApp({
    search: ''
}).mount();

fetch("data/sample_data.json")
.then(function(res){
    return res.json();
})
.then(function(products){
    let placeholder = document.querySelector("#table-body-0");
    let out = "";
    for(let product of products){
        out += `
            <tr>
                <td>${product.rank}</td>
                <td>${product.name}</td>
                <td>${product.rating}</td>
            </tr>
        `;
    }
    placeholder.innerHTML = out;
})
