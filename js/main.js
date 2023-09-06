

$(function () {
  //알림창

  Swal.fire({
    title: '환영합니다.',
    text: '본사이트는 반응형으로 디자인 되었습니다.',
    icon: 'warning',

    showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
    confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
    confirmButtonText: '확인', // confirm 버튼 텍스트 지정

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



  //#web 스와이퍼

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


  /* 연출 */


})



