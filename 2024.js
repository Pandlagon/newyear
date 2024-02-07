const titledate = document.getElementsByClassName('an');
const titlehour = document.getElementsByClassName('hour');
const titleminetr = document.getElementsByClassName('minute');
const titlefrist = document.getElementsByClassName('one');
const titlesecond = document.getElementsByClassName('back');
const before=document.getElementsByClassName("over");
const titletwo=document.querySelector("two");
const after=document.getElementsByClassName("after");
const newlink=document.createElement('a');

newlink.href='';
newlink.textContent='新年贺卡';

const text = document.getElementsByClassName('text');
const extext = document.getElementsByClassName('ex');

const newYear = new Date('2024-02-10T00:00:00');

function update() {
  const nowDate = new Date();
  const different = newYear - nowDate;
  const days = Math.floor(different / (1000 * 60 * 60 * 24));
  const hours = Math.floor((different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((different % (1000 * 60)) / 1000);
  
  const hourdeg=hours/24*360;
  const minutedeg=minutes/60*360;
  const seconddeg=seconds/60*360;

  titlefrist[0].style.backgroundImage = `conic-gradient(red 0deg, red ${hourdeg}deg, black ${hourdeg}deg, black 360deg)`;
  titlefrist[1].style.backgroundImage = `conic-gradient(red 0deg, red ${minutedeg}deg, black ${minutedeg}deg, black 360deg)`;
  titlehour[0].innerHTML = hours < 10 ? `0${hours}` : `${hours}`;
  titleminetr[0].innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  before[2].style.display = 'inline';

  titlesecond[2].innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  if ( days>=0&&hours >= 0 && minutes > 0) {
    before[2].style.display = 'none';
   
  } else if (days ==0 && minutes == 0 && seconds > 0) {
    before[0].style.display = 'none';
    before[1].style.display = 'none';
    before[2].style.display='block';
    titletwo.style.backgroundImage = `conic-gradient(red 0deg, red ${seconddeg}deg, black ${seconddeg}deg, black 360deg)`;
   
    
   
  } else {
    text[0].style.display = 'none';
    text[1].style.display = 'none';
    before[0].style.display = 'none';
    before[1].style.display = 'none';
    before[2].style.display = 'none';
    extext[0].style.display = 'inline';
    
    titledate[0].appendChild(newlink);
    titledate[0].style.background='linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4)';
    titledate[0].style.backgroundSize='400%';
    
  }
}
setInterval(update, 1000);

function rain() {
  const man = document.getElementById('man');
  const img = document.createElement('img');
  // 随机位移
  const left = Math.floor(Math.random() * 50);
  // 随机大小
  const size = Math.random() * 20;
  const duration = Math.random() * 1;
  img.src = './img/xxx.png'; // 请将图片路径替换为实际路径
  img.style.left = left + 'px';
  img.style.width = 20 + size + 'px';
  img.style.height = 20 + size + 'px';
  
  man.appendChild(img);
  setTimeout(() => {
    man.removeChild(img);
  }, 4000);
}

// 调用rain函数触发雨滴效果
setInterval(rain, 150);



function startAnimation() {
  let box = document.querySelector(".start");
  let button=document.querySelector("#style1");
  box.style.animation = "movex 2s forwards 0.2s";
  button.style.animation = "movex 2s forwards 0.2s";
}
function startmove(){
  let box1=document.querySelector(".start1");
  let box2=document.querySelector(".start2");
  let button=document.querySelector("#style2");
  box1.style.animation = "move1 2s forwards 0.2s";
  box2.style.animation = "move2 2s forwards 0.2s";
  button.style.display='none';
}

let greets=[
  '岁序更替，华章日新',
  '一元复始，辞旧迎新',
  '凯歌辞旧岁，瑞雪迎新年',
  '栉风沐雨，春华秋实',
  '喜辞旧岁，笑迎新春',
  '岁华新至，除夕乐融',
  '平安顺遂，吉祥圆满',
  '历添新岁月，春满旧山河',
  '新岁维祺，万事胜意',
  '岁岁常欢愉，年年皆胜意'
]
let greetbox=document.querySelector(".greetbox");
let fu=document.querySelector(".fu");
let score=0;
fu.addEventListener("click",function(){
  let greeting=document.createElement("div");
  greeting.className="greeting";
  greeting.innerHTML=`${greets[score]}`;
  score++;
  let leng=Math.random()*90;
  greeting.style.top=`${leng}vh`;
  greetbox.appendChild(greeting);
  if(score==greets.length){
      score=0;
  }
});