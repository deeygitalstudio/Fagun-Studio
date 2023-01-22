$(document).ready(function(){
  $('.slides').slick({
      slidesToShow: 7,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      infinite: true,
      responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
});


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("reviews");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}





const WordsEl = document.querySelector(".words");
const cursor = document.querySelector(".cursor");

const wordArray = ["Photographer.", "Videographer.", "Photography and Video Editor."];
let wordArrayIndex = 0;
let letterIndex = 0;

const typingDelay = 50;
const erasingDelay = 100;
const newWordDelay = 2000;

// Typing Function
function type() {
  if (letterIndex < wordArray[wordArrayIndex].length) {
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");
    }

    WordsEl.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursor.classList.remove("typing");
    setTimeout(erase, newWordDelay);
  }
}

// Erase Function
function erase() {
  if (letterIndex > 0) {
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");
    }
    WordsEl.textContent = wordArray[wordArrayIndex].substring(
      0,
      letterIndex - 1
    );
    letterIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursor.classList.remove("typing");
    wordArrayIndex++;
    if (wordArrayIndex >= wordArray.length) {
      wordArrayIndex = 0;
    }
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, newWordDelay);
});


var i = 0;
var images = []; //array
var time = 6000; // time in millie seconds

//images

images[0] = "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(https://cdn.pixabay.com/photo/2016/11/29/06/18/apple-1867762_960_720.jpg)";
images[1] = "linear-gradient(rgba(0, 0,  0, 0.8),rgba(0, 0, 0, 0.8)), url(https://cdn.pixabay.com/photo/2020/02/08/14/28/camera-4830248_960_720.jpg)";
images[2] = "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(https://cdn.pixabay.com/photo/2016/11/29/03/53/camera-1867184_960_720.jpg)";
images[3] = "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(https://cdn.pixabay.com/photo/2020/05/11/15/52/canon-5158887_960_720.jpg)";
images[4] = "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(https://cdn.pixabay.com/photo/2017/08/06/06/25/technology-2589463_960_720.jpg)";
//function

function changeImage() {
    const bgimg = document.querySelector('.--section')
    bgimg.style.backgroundImage = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = -1;
    }
    setTimeout('changeImage()', time);
}

window.onload = changeImage;



const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = 0;

  function updateCounter() {
    const target = +counter.dataset.target;
    const count = +counter.innerText;
    const increment = target / 100; //Count timing

    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target + "+";
    }
  }
  //   updateCounter();
  window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const sectionTop = document.querySelector(".top");
    const sectionTopHeight = sectionTop.clientHeight;
    console.log(sectionTopHeight);
    if (scrollHeight >= sectionTopHeight - 1) {
      updateCounter();
    }
  });
});


const readEl = document.getElementById("read");
function showText() {
  var dotsEl = document.getElementById("dots");
  var moreTextEl = document.getElementById("more");
  


  if (dotsEl.style.display === "none") {
    dotsEl.style.display = "inline";
    readEl.innerHTML = "See more";
    moreTextEl.style.display = "none";
    
  } else {
    dotsEl.style.display = "none";
    readEl.innerHTML = "See less";
    moreTextEl.style.display = "inline";

  }
}

readEl.addEventListener("click", showText)


const scriptURL = 'https://script.google.com/macros/s/AKfycbwALuf025y0d9jQS57CVrLXeVJBQzESjSRzIDFe2MWhg4Ks9yE0zJg_WwAdQSuM-I7cNw/exec'
const form = document.forms['submit-to-google-sheet']
const errorEl = document.getElementById("error")
const btnEl = document.getElementById("btn")
const inputEl = document.querySelectorAll('.form-control')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => { errorEl.innerHTML = "Thank you, We have recieved your message";})
    .catch(error => console.error('Error!', error.message))

   setTimeout(function(){
      errorEl.innerHTML = "";

   },7000)
   form.reset()
  

  
})


var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});