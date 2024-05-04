var slides = document.querySelector(".slides"),
  slide = document.querySelectorAll(".slides li"),
  currentIdx = 0, //처음과 마지막을 구분해 다시 돌아가게 하는 설정을 위해, 처음엔 =0
  slideCount = slide.length, //슬라이드 15개, 길이 15
  slideWidth = 300,
  slideMargin = 30,
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next");

slides.style.width =
  (slideWidth + slideMargin) * slideCount - slideMargin + "px";

function moveSlide(num) {
  slides.style.left = -num * 330 + "px"; //1장 왼쪽으로 넘어감
  currentIdx = num; //사용자가 보려고 넘긴 수
}

nextBtn.addEventListener("click", function () {
  //다음 버튼을 누르면
  if (currentIdx < slideCount - 4) {
    // 현재 보이는 슬라이드 수가 20-4 보다 적으면
    moveSlide(currentIdx + 4); //계속 4장씩 더 보여줌
  } else {
    moveSlide(0); //그렇지 않으면 처음으로 돌아감
  }
});

prevBtn.addEventListener("click", function () {
  //이전버튼을 누를 때
  if (currentIdx > 0) {
    //현재 보이는 슬라이드가 0보다 크면
    moveSlide(currentIdx - 4); // 현재 슬라이드에서 3개씩 뒤로 보여줌
  } else {
    moveSlide(slideCount - 4); // 그렇지 않으면 20-4 부터 보여줌 (맨뒤)
  }
});
