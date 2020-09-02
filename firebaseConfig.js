import * as firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyBl7kc82Srkf2Sse3b-7bUxbsncxpZIw_4",
    authDomain: "sparta-psytest-chloe.firebaseapp.com",
    databaseURL: "https://sparta-psytest-chloe.firebaseio.com",
    projectId: "sparta-psytest-chloe",
    storageBucket: "sparta-psytest-chloe.appspot.com",
    messagingSenderId: "931724963554",
    appId: "1:931724963554:web:4c2a2e19f62e60ef9938bb",
    measurementId: "G-FGZ6Q8DSTE"
  };

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()