// 横並びの要素の高さを最大値に揃える
// function alignHeights(className) {
//   const elem = document.getElementsByClassName(className);
//   let h = [];
//   for(let h_n = 0; h_n < elem.length; h_n++) {
//     h[h_n] = elem[h_n].getBoundingClientRect().height;
//   }
//   const h_list = Math.max(...h);
//   for(let h_i = 0; h_i < elem.length; h_i++) {
//     elem[h_i].style.height = h_list + "px";
//   }
// }
// トップに戻るボタン
//スクロール量を取得する関数
function getScrolled() {
 return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
}

//トップに戻るボタンの要素を取得
var topButton = document.getElementById( 'page_top' );

//ボタンの表示・非表示
window.onscroll = function() {
  ( getScrolled() > 500 ) ? topButton.classList.add( 'fade-in' ): topButton.classList.remove( 'fade-in' );
};

//トップに移動する関数
function scrollToTop() {
  var scrolled = getScrolled();
  window.scrollTo( 0, Math.floor( scrolled / 2 ) );
  if ( scrolled > 0 ) {
    window.setTimeout( scrollToTop, 30 );
  }
};

//イベント登録
topButton.onclick = function() {
  scrollToTop();
};

// ホバーアニメーション
var supportTouch = 'ontouchend' in document;
var EVENTNAME_TOUCHSTART = supportTouch ? 'touchstart' : 'mouseover';
var EVENTNAME_TOUCHMOVE = supportTouch ? 'touchmove' : 'mousemove';
var EVENTNAME_TOUCHEND = supportTouch ? 'touchend' : 'mouseout';

// 対象セレクタにクラスを付与
function setClass(selector, type, className) {
  const $elem = [].slice.call(document.querySelectorAll(selector));
  $elem.forEach(function(e) {
    e.addEventListener(type, function() {
      this.className = className;
    }, {passive: true});
  });
}

function touchAction(selector, touchstart, touchend) {
  setClass(selector, EVENTNAME_TOUCHSTART, touchstart);
  setClass(selector, EVENTNAME_TOUCHEND, touchend);
}
// index イメージ
// touchAction('.thumbnail-link', 'mouseover', 'mouseout');
// article サムネイル
touchAction('.thumbnail-link', 'mouseover', 'mouseout');
