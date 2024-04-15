// セクション1の要素を取得
const section1 = document.getElementById('section1');

// ページが読み込まれたときにアニメーションを実行
window.onload = function() {
  section1.style.opacity = '0';
  setTimeout(function() {
    fadeIn(section1);
  }, 500);
};

// フェードインのアニメーションを定義
function fadeIn(element) {
  let opacity = 0;
  const timer = setInterval(function() {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity += 0.1;
  }, 50);
}
