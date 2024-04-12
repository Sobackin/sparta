const calculator = {
    add: function (a, b) {
      console.log(a + b);
    },
    minus: function (a, b) {
      console.log(a - b);
    },
    devide: function (a, b) {
      console.log(a / b);
    },
    times:function (a, b) {
      console.log(a * b);
    },
    power: function (a, b) {
      console.log(a ** b);
    },
  };
  
  calculator.add(1, 2);
  calculator.minus(1, 2);
  calculator.devide(1, 2);
  calculator.times(1, 2);
  calculator.power(1, 2);
  
  const title = document.querySelector("div.hello:first-child h1");
  
  function handleTitleClick(){
      console.log("title was clicked!")
  }
  
  title.addEventListener("click", handleTitleClick);