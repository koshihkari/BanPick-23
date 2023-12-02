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