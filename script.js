'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ローカルストレージの設定
const storage = localStorage;
console.log(storage.length);


// 動画データの複製
const works = document.querySelector(".container");
// const work77 = [...works];
// console.log(work77);
// for(const item of work77){
//   console.log(item);}
//   for(const i of item){
//     console.log(i);
// }


const originDate = document.querySelector(".sns-box");
const cloned = originDate.cloneNode(true);
const cloned2 = originDate.cloneNode(true);

const iframe = document.querySelector("iframe");
// works.appendChild(cloned);

// 要素の配列化
// const listItems = originDate.children;
// const listItemArray = [...listItems];

// for(const item of listItemArray){
//   console.log(item);
// }


// YouTube埋込みデータ読出
const inputDate = document.querySelector("#content");
// console.log(inputDate);

// URL抽出
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
  works.appendChild(cloned2);
  
  console.log(works);
}

// イベントリスナー
const sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", searchUrl);



const homePic = document.querySelector("#homePic");
console.log(homePic);
// homePic.setAttribute("src",);

// 繰り返し処理
let i = 0;
let y = "a";
const intervalAct = function () {
  console.log("test");
  console.log(i);
  if (i >= 60) {clearInterval(timer)};
  i++;
  if( y === "a"){
    console.log(y);
    y = "b";
    homePic.setAttribute("src","images/IMG_7207.jpg");
  }else if (y === "b"){
    console.log(y);
    y = "c";
    homePic.setAttribute("src","images/IMG_7201c.jpeg");
  }else if(y === "c"){
    console.log(y);
    y="d";
    homePic.setAttribute("src","images/04A177F5-A9DD-4BBD-B693-18AAE89443A9_1_105_c.jpeg");
  }else if(y === "d"){
    console.log(y);
    y="a"
    homePic.setAttribute("src","images/image.png");
  }  
};

const timer = setInterval(intervalAct, 6000);

// 1.text読み込み
// 2.textからURL抽出
// 3.youtubeの埋め込み追加
// 4.埋め込み動画のlinkを2.のURLに書き換え
// 5.pb操作する度1〜４を繰り返し行う
// 5.埋め込んだ動画のurlをwebストレージに保管（オブジェクト形式）
// 6.webサイト更新してもデータ保持
// 7.不要な動画は削除
