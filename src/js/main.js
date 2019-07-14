var link = document.querySelector(".burger-menu");
var button = document.querySelector(".mobile-popup");
var accordeon = document.querySelectorAll(".team__link");
var accordeonOpen = document.getElementsByClassName(".team__dropdown");
let reviewsPopup = document.querySelector(".reviews-popup")
let buttonReviews = document.querySelectorAll(".button--reviews")
let accordeonMenu = document.querySelectorAll(".accordeon__item")
let accordeonDesc = document.querySelectorAll(".accordeon__desc")
let accordeonList = document.querySelector(".accordeon__list")
var submit = document.querySelector(".button--submit")
var form = document.querySelector(".form")
var modal = document.querySelector('.delivery__modal');
var modalMsg = document.querySelector('.delivery__modal-text')
var modalClose = document.querySelector('.delivery__button');
let accordeonActive = document.querySelectorAll(".accordeon--active")
var videoEl = document.querySelector('.video')
var playBtn = document.querySelector('.play-button')
var vidControls = document.getElementById('controlls')
var volumeControl = document.querySelector('.volume-bar')
var duration = document.querySelector('.progress-bar-circle')
var muted = document.querySelector('.muted-button')
var videoPlay = document.querySelector('.work__video-play')

console.log("reviewsPopup")

// OnePage
let currentEq = 0,
  inScroll = false;
const pageContent = document.querySelector('.main'),
  sections = document.querySelectorAll('.section'),
  bullets = document.querySelectorAll('.points__link'),
  blackBulletsOnEq = [1, 6, 8];
  

function onePageScroll(eq) {
  function translate() {
    inScroll = true;
    const position = `-${eq * 100}%`;
    pageContent.style.transform = `translateY(${position})`;
    pageContent.style.webkitTransform = `translateY(${position})`;  
    setCurrentBullet(eq);
    setTimeout(() => {
      inScroll = false;
    }, 700);
  }
  translate(eq);
}

function changeCurrentEq(index) {
  currentEq = index;
}

// TouchScreen
const hammer = new Hammer(document.documentElement);
hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
hammer.on('swipeup', () => {
  if (currentEq >= sections.length - 1) {
    return;
  }
  if (!inScroll) {
    onePageScroll(currentEq += 1);
  }
});
hammer.on('swipedown', () => {
  if (currentEq <= 0) {
    return;
  }
  if (!inScroll) {
    onePageScroll(currentEq -= 1);
  }
});

// mouseWheel
document.addEventListener('wheel', (event) => {
  function wheelDirection() {
    const delta = event.deltaY,
      direction = delta > 0 ? 'down' : 'up';
    return direction;
  }

  function scrollToSection() {
    const dir = wheelDirection();
    if (dir === 'down') {
      if (currentEq >= sections.length - 1) {
        return;
      }
      if (!inScroll) {
        onePageScroll(currentEq += 1);
      }
    } else {
      if (currentEq <= 0) {
        return;
      }
      if (!inScroll) {
        onePageScroll(currentEq -= 1);
      }
    }
  }
  scrollToSection();
});

// Bullets
function setCurrentBullet(index) {
  bullets.forEach((elem) => {
    elem.parentElement.classList.remove('points__active');
  });
  bullets[index].closest('.points__item').classList.add('points__active');
  changeCurrentEq(index);
}

for (let i = 0; i < bullets.length; i++) {
  bullets[i].addEventListener('click', (event) => {
    event.preventDefault();
    onePageScroll(i);
    setCurrentBullet(i);
  });
}



// Menu-links
const mainMenuItems = document.querySelectorAll('.nav__link');
mainMenuItems.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    onePageScroll(+elem.dataset.scrollTo);
  });
});

const mobileMenuItems = document.querySelectorAll('.mobile-nav__link');
mobileMenuItems.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    onePageScroll(+elem.dataset.scrollTo);
  });
});

document.querySelector('.first-block__arrow-down').addEventListener('click', (event) => {
  event.preventDefault();
  onePageScroll(1);
});

document.querySelector('.header-btn').addEventListener('click', (event) => {
  event.preventDefault();
  onePageScroll(7);
});




// video
// console.log(videoEl)
videoEl.addEventListener('canplaythrough', function () {
            vidControls.classList.remove('hidden');
            videoEl.volume = volumeControl.value;
        }, false);

videoEl.addEventListener('click', function () {
    videoPlay.classList.remove('video-show') 
        
            if (videoEl.paused) {
                videoEl.play();
                startDuration = setInterval(initDuration,1000/66)
                videoPlay.classList.remove('video-show')
                playBtn.style.backgroundImage = "url(./img/icons/Pause_gray.png)"
            } 
            else {
                videoEl.pause();
                clearInterval(startDuration)
                videoPlay.classList.add('video-show')
                playBtn.style.backgroundImage = null

            }
        }, false);
           

videoPlay.addEventListener('click', function () {
    videoPlay.classList.remove('video-show') 
    
            if (videoEl.paused) {
                videoEl.play();
                startDuration = setInterval(initDuration,1000/66)
                playBtn.style.backgroundImage = "url(./img/icons/Pause_gray.png)"
            } 
            else {
                videoEl.pause();
                clearInterval(startDuration)
                playBtn.style.backgroundImage = null
                

            }
        }, false);

        
playBtn.addEventListener('click', function () {
           
            if (videoEl.paused) {
                videoEl.play();
                startDuration = setInterval(initDuration,1000/66)
                videoPlay.classList.remove('video-show')
                playBtn.style.backgroundImage = "url(./img/icons/Pause_gray.png)"
            } 
            else {
                videoEl.pause();
                videoPlay.classList.add('video-show')
                playBtn.style.backgroundImage = null
                clearInterval(startDuration)
            }
        }, false);
muted.addEventListener('click', function () {
    if(videoEl.muted){
    videoEl.muted = false;
  } else {
    videoEl.muted = true;
  }


})
function initDuration(){
    duration.value = videoEl.currentTime
}

function clearAnimateRange(){
    clearInterval(startDuration)
}

function movedRange(){
    videoEl.currentTime = duration.value;
    
}

volumeControl.addEventListener('input', function () {
         videoEl.volume = volumeControl.value;
     }, false);

    window.onload = function(){
        duration.value = 0 
        duration.min = 0 
        duration.max = videoEl.duration
    }

    
// Меню

link.addEventListener("click", function () {
    link.classList.toggle("burger-menu__active");
});

link.addEventListener("click", function () {
    button.classList.toggle("mobile-popup-open");
});

// Кнопка отзыв

for( let i = 0; i < buttonReviews.length; i++) {
    buttonReviews[i].onclick = function(){
    reviewsPopup.classList.add('open-js')}}
            
reviewsPopup.addEventListener('click' , function() {
    reviewsPopup.classList.remove('open-js');
    });

    
    

//  JS accordeon
// for(var i = 0; i < accordeon.length; i++) {
//     accordeon[i].addEventListener('click', function() {
//             for(var i = 0; i < accordeon.length;i++){
//                 accordeon[i].classList.remove('active') 
//             }
//             this.classList.toggle('active')
//         }
//     )
// }
// accordeon[0].classList.add('active')

// Меню-аккордеон

// Вариант-1

// for(let i = 0; i < accordeonMenu.length; i++){
//     accordeonMenu[i].addEventListener('click' , function(e) {
//         e.preventDefault();
//         for(let j = 0; j < accordeonDesc.length; j++){
//         accordeonDesc[j].classList.remove('accordeon--active')
//         }
//         accordeonDesc[i].classList.toggle('accordeon--active')
//         if (accordeonDesc[i].classList.contains('.accordeon--active')) {
//             accordeonDesc[i].classList.remove('.accordeon--active'); 
//     }})
//     accordeonDesc[0].classList.add('accordeon--active')
// }
 
// Вариант-2

for (let i = 0; i < accordeonMenu.length; i++) {
    accordeonMenu[i].onclick = function(){ 
      
    if (this.classList.contains("accordeon--active")){
        this.classList.remove("accordeon--active");
    }else{
        for(let a = 0; a < accordeonMenu.length; a++){
        accordeonMenu[a].classList.remove("accordeon--active");
      }
      this.classList.add("accordeon--active");
    }
    
  };
}


// Форма

function validate(form) {
    let valid = true;
    if (!validateField(form.elements.name)) {
      valid = false;
    }
    if (!validateField(form.elements.phone)) {
      valid = false;
    }
    if (!validateField(form.elements.comments)) {
      valid = false;
    }
    return valid;
  }
  function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
  }

  function exchange(e) {
    e.preventDefault();
    let url = 'https://webdev-api.loftschool.com/sendmail';
    let urlFail = 'https://webdev-api.loftschool.com/sendmail/fail';
    try {

      if (!validate(form)) {
        throw new Error('Заполните форму');
      }
      var fData = new FormData();
      fData.append('name', form.elements.name.value);
      fData.append('phone', form.elements.phone.value);
      fData.append('comment', form.elements.comments.value);
      fData.append('to', 'mechanix96@mail.ru');

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('POST', url);
      xhr.send(fData);
      xhr.addEventListener('load', function () {
        if (xhr.status >= 400) {
          console.log(xhr.response.message);
          modal.style.display = 'flex';
          modalMsg.textContent = xhr.response.message;

        } else {
          console.log(xhr.response.message);
          modal.style.display = 'flex';
          modalMsg.textContent = xhr.response.message;
          form.reset();
        }
      })
    } catch (e) {
      alert(e.message);
    }
  };

  submit.addEventListener('click', exchange);
  modalClose.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = 'none';
  });

// Jquery

// Slick-slider

jQuery(document).ready(function($) {    
    $('.burger__list').slick({
        prevArrow: $('.burger__arrow-back '),
        nextArrow: $('.burger__arrow-forward '),
            slidesToShow: 1,
            slidesToScroll: 1
        })
        });

// Jquery-аккордеоны

// $(function(){
// $('.accordeon__item').on('click', function(e){
//     e.preventDefault();
//         var $this = $(this),
//         container = $this.closest('.accordeon__list'),
//         item = $this.closest('.accordeon__item'),
//         items = container.find('.accordeon__list'),
//         activeItem = items.filter('.active'),
//         content = item.find('.accordeon__desc'),
//         activeContent = activeItem.find('.accordeon__desc');

//         if (!item.hasClass('active')) {
//             items.removeClass('active');
//             item.addClass('active');
//             activeContent.animate({
//                    'width' : '0px'
//             });    
//             content.animate({
//                    'width' : '100%'
//             });

//         } else {
//             item.removeClass('active');
//             content.animate({
//                    'width' : '0px'
//             });

//         }
// });
// });

    $(".team__dropdown").hide().prev().click(function(){
        $(".team__dropdown").not(this).slideUp();
        $(this).next().not(":visible").slideDown();
        });
