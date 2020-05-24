let html = document.querySelector("#html");
let style = document.querySelector("#style");
let n = 0;
let string = `/*你好，我是howardyangyixuan
* 我昨天刚刚荣获ECCV111评分
* 我太难了我需要画一个太极平静一下
**/
/*首先我要准备一个div*/
#div1 {
  border: 1px solid red;
  width: 40vh;
  height: 40vh;
}
/*接下来我要把 div 变成一个八卦图
* 首先，把 div 变成一个圆*/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
  }
/*《周易·系辞下》云：“古者包牺氏之王天下也，仰则观象于天，俯则观法于地；
* 观鸟兽之文与地之宜；近取诸身，远取诸物，于是始作八卦，以通神明之德，以类万物之情。
* 太极生两仪，两仪生四象，四象生八卦*/
#div1 {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 1) 100%
    );
}
#div1::before {
    content: "";
    display: block;
    border: 1px solid green;
    position: absolute;
}
#div1::before {
    width: 50%;
    height: 50%;
    left: 50%;
    transform: translate(-50%);
    background: white;
    border-radius: 50%;
    background: rgb(0, 0, 0);
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 15%,
      rgba(255, 255, 255, 1) 15%,
      rgba(255, 255, 255, 1) 100%
    );
    border: none;
}
#div1::after {
    content: "";
    display: block;
    border: 1px solid red;
    position: absolute;
}
#div1::after {
    width: 50%;
    height: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
    background: black;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 15%,
      rgba(0, 0, 0, 1) 15%,
      rgba(0, 0, 0, 1) 100%
    );
    border: none;
}
/*谢谢大家，我回去做实验了:)
*/
`;
let stringShow = "";
let step = () => {
  setTimeout(() => {
    if (n < string.length) {
      //   stringShow += string[n] === "\n" ? "<br>" : string[n];
      if (string[n] === "\n") {
        stringShow += "<br>";
      } else if (string[n] === " ") {
        stringShow += "&nbsp";
      } else {
        stringShow += string[n];
      }
      style.innerHTML += string[n];
      html.innerHTML = stringShow;
      window.scrollTo(0, 99999);
      html.scrollTo(0, 99999);
      //以下代码，在手机上会卡在一个位置
      // html.scrollTo(0, document.body.scrollHeight);
      // window.scrollTo(0, document.body.scrollHeight);

      step();
      n += 1;
    }
  }, 10);
};
step();
