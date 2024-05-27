let slideIndex = 0;
function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // 2秒ごとにスライド切り替え（調整可能）
}
// ページ読み込み時にスライドショーを開始
document.addEventListener("DOMContentLoaded", showSlides);




