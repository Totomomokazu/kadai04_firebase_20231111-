//Firebaseモジュールのインポート:
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";//Firebaseアプリケーションをインポート。initializeAppはFirebaseアプリケーションを初期化。
import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved } //データベース関連の関数をインポート。getDatabaseやrefなどはデータベースの操作に必要な関数
    from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";



// firebaseのconfig設定。Firebaseプロジェクトの設定情報（APIキー、プロジェクトIDなど）を定義。Firebaseコンソールから取得した情報
const firebaseConfig = {
  };


const app = initializeApp(firebaseConfig); //initializeApp関数を使ってFirebaseアプリケーションを初期化。これにより、Firebaseの各種サービスへのアクセスが可能になる。
const db = getDatabase(app); //RealtimeDBに接続。getDatabase関数を用いてFirebase Realtime Databaseへの接続。
const dbRef = ref(db, "chat"); //ref関数を使用して、データベース内の特定のパスを参照。このパスはデータの読み書きの対象となる。RealtimeDB内に"chat"のフォルダーを作る

