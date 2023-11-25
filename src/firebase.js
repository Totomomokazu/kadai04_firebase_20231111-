// firebaseの初期化
import { initializeApp } from "firebase/app";
// Cloud Firestore を初期化する
import { getFirestore } from "firebase/firestore";

// APIキーなど
// const firebaseConfig = {
//     apiKey: "AIzaSyDq2tUK4PdW7raYP8Ar9OxieP5m45AwAuI",
//     authDomain: "twitter-clone-1aedc.firebaseapp.com",
//     projectId: "twitter-clone-1aedc",
//     storageBucket: "twitter-clone-1aedc.appspot.com",
//     messagingSenderId: "284422025560",
//     appId: "1:284422025560:web:a3bd8d5ccfbbc6100b752d"
//   };


const firebaseConfig = {
apiKey: "AIzaSyCDPGsNUTLu6Ie7Io3_Ke1h9aVc9TudmU8",
authDomain: "gsdev26us07-4888a.firebaseapp.com",
databaseURL: "https://gsdev26us07-4888a-default-rtdb.firebaseio.com",
projectId: "gsdev26us07-4888a",
storageBucket: "gsdev26us07-4888a.appspot.com",
messagingSenderId: "48332909203",
appId: "1:48332909203:web:f1943b8d72c858909e3b66"
};


  //initializeApp関数を使ってFirebaseアプリケーションを初期化。これにより、Firebaseの各種サービスへのアクセスが可能になる。
const app = initializeApp(firebaseConfig); 

const db = getFirestore(app);//Cloud Firestoreに接続。getFirestore関数を用いてCloud Firestoreへの接続。


// 下記の処理を行うことでtimeline.jsでfirebaseに接続できるようにするなどが可能
export default db;