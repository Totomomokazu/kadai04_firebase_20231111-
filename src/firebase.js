// firebaseの初期化
import { initializeApp } from "firebase/app";
// Cloud Firestore を初期化する
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
};


  //initializeApp関数を使ってFirebaseアプリケーションを初期化。これにより、Firebaseの各種サービスへのアクセスが可能になる。
const app = initializeApp(firebaseConfig); 

const db = getFirestore(app);//Cloud Firestoreに接続。getFirestore関数を用いてCloud Firestoreへの接続。


// 下記の処理を行うことでtimeline.jsでfirebaseに接続できるようにするなどが可能
export default db;