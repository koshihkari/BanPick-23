// let weapons = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // シューター
//     [0, 0, 0, 0, 0],                            // ローラー
//     [0, 0, 0, 0, 0, 0],                         // チャージャー
//     [0, 0, 0, 0, 0, 0],                         // スロッシャー
//     [0, 0, 0, 0, 0, 0],                         // スピナー
//     [0, 0, 0, 0, 0],                            // マニューバー
//     [0, 0, 0],                                  // シェルター
//     [0, 0, 0, 0, 0, 0, 0],                      // ブラスター
//     [0, 0, 0],                                  // フデ
//     [0, 0],                                     // ストリンガー
//     [0, 0]                                      // ワイパー
// ];
let weapons = Array(60);
for (let i = 0; i < 60; i++) {
    weapons[i] = 0;
  }

var count = 0;

function f(n) {
    if (weapons[n] == 0) {
        document.getElementById(String(n)).style.visibility="visible";
        weapons[n] = 1;
    } else {
        document.getElementById(String(n)).style.visibility="hidden";
        weapons[n] = 0;
    }
    console.log(n)
}

function reset() {
    weapons = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // シューター
        [0, 0, 0, 0, 0],                            // ローラー
        [0, 0, 0, 0, 0, 0],                         // チャージャー
        [0, 0, 0, 0, 0, 0],                         // スロッシャー
        [0, 0, 0, 0, 0, 0],                         // スピナー
        [0, 0, 0, 0, 0],                            // マニューバー
        [0, 0, 0],                                  // シェルター
        [0, 0, 0, 0, 0, 0, 0],                      // ブラスター
        [0, 0, 0],                                  // フデ
        [0, 0],                                     // ストリンガー
        [0, 0]                                      // ワイパー
    ];
    console.log("called reset()")
}