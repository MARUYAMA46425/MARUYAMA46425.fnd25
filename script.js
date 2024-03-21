'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ローカルストレージの設定
const storage = localStorage;
console.log(storage.length);


// 動画データの複製
const works = document.querySelector(".container");
const originDate = document.querySelector(".sns-box");
const cloned = originDate.cloneNode(true);

const iframe = document.querySelector("iframe");

// YouTube埋込みデータ読出
const inputDate = document.querySelector("#content")
console.log(inputDate);

// URL抽出（抽出までok）
function searchUrl() {
  const arrayOfYoutube = inputDate.value.split(" ");
  for (const array of arrayOfYoutube) {
    if (String(array).indexOf("src=") !== -1) {
      const result = String(array);
      const srcCut1 = result.substring(result.indexOf("=") + 1);
      const srcCut2 = srcCut1.substring(1, srcCut1.length - 1);

      // console.log(srcCut2);
      iframe.setAttribute("src", srcCut2);
      // console.log(iframe);
      // storage[storage.length+1] = srcCut1;

      // cloned.setAttribute("iframe",iframe);
      // console.log(cloned);
    }
    // works.appendChild(cloned);
  }
  // cloned.appendChild(iframe);
  works.appendChild(cloned);
  console.log(works);
}

// 動画投稿イベントリスナー
const sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", searchUrl);

// 繰り返し処理
let i = 0;
let y = "a";
const intervalAct = function () {
  console.log("test");
  console.log(i);
  if (i >= 60) { clearInterval(timer) };
  i++;
  if (y === "a") {
    console.log(y);
    y = "b";
    homePic.setAttribute("src", "images/IMG_7207.jpg");
  } else if (y === "b") {
    console.log(y);
    y = "c";
    homePic.setAttribute("src", "images/IMG_7201c.jpeg");
  } else if (y === "c") {
    console.log(y);
    y = "d";
    homePic.setAttribute("src", "images/04A177F5-A9DD-4BBD-B693-18AAE89443A9_1_105_c.jpeg");
  } else if (y === "d") {
    console.log(y);
    y = "a"
    homePic.setAttribute("src", "images/image.png");
  }
};

// ホーム画面切り替え
const homePic = document.querySelector("#homePic");
console.log(homePic);

const timer = setInterval(intervalAct, 6000);

// メモ帳
{
  const text = document.getElementById('text');
  const save = document.getElementById('save');
  const clear = document.getElementById('clear');
  const message = document.getElementById('message');

  if (localStorage.getItem('memo') === null) {
    text.value = '';
  } else {
    text.value = localStorage.getItem('memo');
  }

  save.addEventListener('click', () => {
    message.classList.add('appear');
    setTimeout(() => {
      message.classList.remove('appear');
    }, 1000);
    localStorage.setItem('memo', text.value);
  });

  clear.addEventListener('click', () => {
    if (confirm('削除ししてもいいですか？') === true) {
      text.value = '';
      localStorage.removeItem('memo');
    }
  });
}
