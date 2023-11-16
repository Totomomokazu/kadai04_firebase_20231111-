// alert("テスト")
// //Firebaseモジュールのインポート:
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";//Firebaseアプリケーションをインポート。initializeAppはFirebaseアプリケーションを初期化。
// import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved } //データベース関連の関数をインポート。getDatabaseやrefなどはデータベースの操作に必要な関数
//     from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

//     console.log("firebaseのモジュールインポート")


// // firebaseのconfig設定。Firebaseプロジェクトの設定情報（APIキー、プロジェクトIDなど）を定義。Firebaseコンソールから取得した情報
// const firebaseConfig = {
//     apiKey: "AIzaSyCF9-D16Fp1QP0DNoeR_XX2cnd_mdNnsBk",
//     authDomain: "kadai04firebase20231111.firebaseapp.com",
//     projectId: "kadai04firebase20231111",
//     storageBucket: "kadai04firebase20231111.appspot.com",
//     messagingSenderId: "254491891417",
//     appId: "1:254491891417:web:505f31830b3a509c4b50c8"
// };

//     console.log("firebaseのconfig設定")

// const app = initializeApp(firebaseConfig); //initializeApp関数を使ってFirebaseアプリケーションを初期化。これにより、Firebaseの各種サービスへのアクセスが可能になる。
// const db = getDatabase(app); //RealtimeDBに接続。getDatabase関数を用いてFirebase Realtime Databaseへの接続。
// const dbRef = ref(db, "chat"); //ref関数を使用して、データベース内の特定のパスを参照。このパスはデータの読み書きの対象となる。RealtimeDB内に"chat"のフォルダーを作る

//     console.log("firebaseのアプリケーション初期化、RealtimeDBに接続、DB内で特定のパスを参照")




//ここから下にコードを書く
 $("#post_btn").on("click",function(){
    // unameとtextareaの値を取得
    const uname=$("#uname").val()
    const textarea=$("#textarea").val()

    console.log("unameの値を取得")
    console.log("textareaの値を取得")

    // 該当idの値を初期化
    $("#uname").val("")
    $("#textarea").val("")

    // 取得した値をobjへ代入
    const obj={
        uname:uname,
        textarea:textarea,
    }

    // 「Firebaseのデータベースに新しい位置（ノード）を作成し、その位置にユーザーの名前とメッセージを保存する」という処理を行っている
    const newPostRef=push(dbRef);//push(dbRef)は、Firebaseのデータベース内で新しい参照を作成。dbRefは、データベース内の特定の位置を指す参照
    set(newPostRef,obj)//上記で作成したdbRefにobjをsetする
})

