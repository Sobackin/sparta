const array = [3, 5, 6, 1, 2, 4];

function findMaxNum(array) {
  let maxNum = array[0]; // 최댓값으로 들어갈 자리 마련하기, 첫번쨰부터 시작하기
  for (let i = 1; i < array.length; i++) { // 하나씩 넘어가며 비교하기
    if (array[i] > maxNum) { // i번째 자리에 있는 숫자가 앞 순서 숫자보다 더 크면
      maxNum = array[i]; // 변수로 선언하기
    }
  }
  return maxNum; //최종적으로 남은 maxNum 리턴
}
console.log(findMaxNum(array)); //콘솔로그로 확인