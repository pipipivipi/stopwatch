const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime;
let stopTime = 0;
let timeoutID;

//時間を表示する関数
function displayTime(){
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h =String(currentTime.getHours()-9).padStart(1, '0');
  const m =String(currentTime.getMinutes()).padStart(1, '0');
  const s =String(currentTime.getSeconds()).padStart(1, '0');
  const ms =String(currentTime.getMilliseconds()).padStart(3,'0').slice(0,1);

  time.textContent = `${h}:${m}:${s}:${ms}`;
  timeoutID = setTimeout(displayTime, 10);
}

//スタートボタン処理
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
  startTime = Date.now();
  displayTime();
}
);

//ストップボタン処理
stopButton.addEventListener('click',function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  clearTimeout(timeoutID)
  stopTime += (Date.now() - startTime);
}
);

//リセットボタン処理
resetButton.addEventListener('click',function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  time.textContent = '0:0:0:0';
  stopTime = 0;
  clearTimeout(timeoutID)

}
);