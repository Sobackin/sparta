const collectNum = (Math.random() * 100) +1; // 랜덤숫자 하나 뽑기
let inputNum = 0;  // 사용자 입력 숫자
let countNum = 0;  // 입력 횟수 

for (let i =0; i <=100; i++) {
  if (collectNum < inputNum) {
    console.log(`숫자입력 : ${inputNum}`);
    console.log("DOWN");
    countNum++;
  } else if (collectNum > inputNum) {
    console.log(`숫자입력 : ${inputNum}`);
    console.log("UP");
    countNum++;
  } else  {
    console.log(`숫자입력 : ${inputNum}`);
    console.log("CORRECT");
    console.log(`숫자 입력한 횟수 : ${countNum}`);
    break;
    
  }
}