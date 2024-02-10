// // // Task: JS. DOM
// // 1) HTML: є кнопка. JS: При натисканні на кнопку змінити текст цієї кнопки (див. textContent).

const textBtns = document.querySelector(".textBtn");

function textClickHandler(e) {
  textBtns.textContent = "Happy New Year!";
}

textBtns.addEventListener("click", textClickHandler);

// -------------------------------------------------

// // 2) HTML: є кнопка. JS: При натисканні на кнопку змінити її колір.

const colorBtns = document.querySelector(".colorBtn");

function colorClickHandler(e) {
  colorBtns.style.backgroundColor = "violet";
}

colorBtns.onclick = colorClickHandler;

// // 3) HTML: є зображення. JS: Зробити так, щоб при появі сторінки відображалася одна картинка,
// //    а при наведенні миші на неї відображалася інша.

const changeImg = document.querySelector(".changeImgAnimals");

function changeImgHover(e) {
  setTimeout(() => {
    changeImg.src =
      "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg";
    changeImg.alt = "cat";
  }, 700);
}

changeImg.addEventListener("mouseover", changeImgHover);
