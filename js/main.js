//알림창

Swal.fire({
  title: '환영합니다.',
  text: '본사이트는 크롬브라우저(1920*1080)에 최적화 되어있습니다.',
  icon: 'warning',
  
  showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
  confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
  confirmButtonText: '이해했어요', // confirm 버튼 텍스트 지정

}).then(result => {
  // 만약 Promise리턴을 받으면,
  if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
  
     Swal.fire('감사합니다.', '스크롤을 내리시면 메인화면으로 이동합니다.', 'success');
  }
});

// #home nav

var nav = $('.nav ul li');
var nav1 = $('.nav ul .nav_home');
var nav2 = $('.nav ul .nav_about');
var nav3 = $('.nav ul .nav_web');
var nav4 = $('.nav ul .nav_web2');
var nav5 = $('.nav ul .nav_contact');

nav.click(function (e) {
  e.preventDefault();
});
nav1.click(function () {
  $('html,body').animate({
    scrollTop: 1100
  }, 600);
});
nav2.click(function () {
  $('html,body').animate({
    scrollTop: 4500
  }, 600);
});
nav3.click(function () {
  $('html,body').animate({
    scrollTop: 12000
  }, 600);
});
nav4.click(function () {
  $('html,body').animate({
    scrollTop: 26660
  }, 600);
});
nav5.click(function () {
  $('html,body').animate({
    scrollTop: 28400
  }, 600);
});


//#about 차트

var counterDate = $('.box h3');
var executed = false;

$(window).scroll(function () {
  var $scroll = $(this).scrollTop();
  // var $offset = $('.easypieChart').offset().top - 400;
  // var wScroll = parseInt($(this).scrollTop());

  if ($scroll > 10300) {
    pieChart() //한번만 실행됨
    //동그라미가 돌아가게 만들고
    // !exectred = true 중괄호가 진행되서 각각의 할일이 진행됨
    // 그리고 다시 true 를 넣어서 !exectred = false 가 됨.
    // 그래서 한번만 실행 됨
    if (!executed) {
      counterDate.each(function () { //각각할일
        var current = $(this);
        //var target=current.attr('data-rate');
        var target = current.data('rate');
        console.log(target);

        $({
          rate: 0
        }).animate({
          rate: target
        }, {
          //옵션
          duration: 2500,
          progress: function () {
            var now = this.rate;
            current.text(Math.floor(now) + "%");
          }
        })
      }); //each
      executed = true;
    } //if문
  }
});



function pieChart() {
  $('.chart1').easyPieChart({
    //your options goes here
    barColor: function () {
      var ctx = this.renderer.getCtx();
      var canvas = this.renderer.getCanvas();
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, "#593DC8");
      gradient.addColorStop(1, "#04009A");
      return gradient;
    },
    scaleColor: false, // 원 옆에 눈금 같은거 지우기
    trackColor: "#EEEEEE",
    lineWidth: 10,
    // size: 200,
    animate: 2000,
    lineCap: "butt"
  });

  $('.chart2').easyPieChart({
    //your options goes here
    barColor: function () {
      var ctx = this.renderer.getCtx();
      var canvas = this.renderer.getCanvas();
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, "#50D3B4");
      gradient.addColorStop(1, "#96c93d");
      return gradient;
    },
    scaleColor: false, // 원 옆에 눈금 같은거 지우기
    trackColor: "#EEEEEE",
    lineWidth: 10,
    // size: 200,
    animate: 2000,
    lineCap: "butt"
  });

  $('.chart3').easyPieChart({
    //your options goes here
    barColor: function () {
      var ctx = this.renderer.getCtx();
      var canvas = this.renderer.getCanvas();
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, "#F7FD04");
      gradient.addColorStop(1, "#F98404");
      return gradient;
    },
    scaleColor: false, // 원 옆에 눈금 같은거 지우기
    trackColor: "#EEEEEE",
    lineWidth: 10,
    // size: 200,
    animate: 2000,
    lineCap: "butt"
  });

  $('.chart4').easyPieChart({
    //your options goes here
    barColor: function () {
      var ctx = this.renderer.getCtx();
      var canvas = this.renderer.getCanvas();
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, "#ee9ca7");
      gradient.addColorStop(1, "#ffdde1");
      return gradient;
    },
    scaleColor: false, // 원 옆에 눈금 같은거 지우기
    trackColor: "#EEEEEE",
    lineWidth: 10,
    // size: 200,
    animate: 2000,
    lineCap: "butt"
  });
}


// https://api.jquery.com/animate/
//https://github.com/rendro/easy-pie-chart

// #web p_tit 

var pt = $('.panerl .p_tit');
var pt1 = $('.panerl .p_tit1');
var pt2 = $('.panerl .p_tit2');
var pt3 = $('.panerl .p_tit3');

pt.click(function (e) {
  e.preventDefault();
});
pt1.click(function () {
  $('html,body').animate({
    scrollTop: 15000
  }, 600);
});
pt2.click(function () {
  $('html,body').animate({
    scrollTop: 21336
  }, 600);
});
pt3.click(function () {
  $('html,body').animate({
    scrollTop: 26605
  }, 600);
});

//#web 맥도날드 호버이펙트

var myAnimation = new hoverEffect({
  parent: document.querySelector('.my-div'),
  intensity: 0.3,
  image1: 'img/portfolio/mac_1-1.JPG', //이미지 파일 경로 확인
  image2: 'img/portfolio/mac_1-2.JPG',
  displacementImage: 'img/portfolio/displacement-5.png', //섞일 때 뒤에 섞이는 형태를 만들어주는 역할
  imagesRatio: 600 / 500 // 이미지의 크기 조절
});


//#web 스와이퍼

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  mousewheel: true,
  centeredSlides: true,
  slidesPerView: "auto",
  // autoHeight: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


//#contact 패럴랙스
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


//#contact .to_top 


$('.to_top').click(function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 600);
});