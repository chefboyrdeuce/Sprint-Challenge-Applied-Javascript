/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel(index) {
  const carouselDiv = document.createElement('div');
  carouselDiv.classList.add('carousel');

  const leftButtonDiv = document.createElement('div');
  leftButtonDiv.textContent = " < ";
  leftButtonDiv.classList.add('left-button');

  const mountains = document.createElement('img');
  mountains.src = "./assets/carousel/mountains.jpeg"; 
  mountains.classList.add('mySlides');

  const computer = document.createElement('img');
  computer.src = "./assets/carousel/computer.jpeg";
  computer.classList.add('mySlides');

  const trees = document.createElement('img');
  trees.src = "./assets/carousel/trees.jpeg";
  trees.classList.add('mySlides');

  const turntable = document.createElement('img');
  turntable.src = "./assets/carousel/turntable.jpeg";
  turntable.classList.add('mySlides');

  const rightButtonDiv = document.createElement('div');
  rightButtonDiv.textContent = " > ";
  rightButtonDiv.classList.add('right-button');

  carouselDiv.appendChild(leftButtonDiv);
  carouselDiv.appendChild(mountains);
  carouselDiv.appendChild(computer);
  carouselDiv.appendChild(trees);
  carouselDiv.appendChild(turntable);
  carouselDiv.appendChild(rightButtonDiv);



  return carouselDiv;
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}

console.log(Carousel());

let carouselContainer = document.querySelector('.carousel-container'); 
  
let applyCarousel = Carousel(); 

carouselContainer.appendChild(applyCarousel); 

leftButton = document.querySelector('.left-button');
console.log(leftButton);

rightButton = document.querySelector('.right-button');
console.log(rightButton);

leftButton.addEventListener('click', () => {
SOMETHINGGOESHERE.classList.toggle('.image-open');
console.log('thug life');
});

rightButton.addEventListener('click', () => {
SOMETHINGELSEGOESHERE.classList.toggle('.image-open');
console.log('baby baby');
});