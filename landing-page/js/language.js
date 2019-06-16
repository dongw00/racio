var language = 'KR';

function ChangeLanguage() {
  if (language === 'KR') {
    document.getElementById('text_login').innerHTML =
      '<i class="fa fa-sign-in mr-2"></i>Login';
    document.getElementById('text1').innerHTML =
      'Experience Web Application for TrimmOne!, <br> You can manage a data efficiently and useful';
    document.getElementById('tag0').innerHTML = 'Home';
    document.getElementById('tag3').innerHTML = 'Our Product';
    document.getElementById('tag4').innerHTML = 'Pre-Sale';
    document.getElementById('text_fit0').innerHTML = 'Features';
    document.getElementById('post_text').innerHTML = 'Latest Posts';
    document.getElementById('text_fit0').innerHTML = 'About TrimmOne';

    /*
    document.getElementById('table2').innerHTML = 'Renewable Energy';
    document.getElementById('table3').innerHTML = 'Powerful Navi for Map';
    document.getElementById('table4').innerHTML = 'Message & Call';
    document.getElementById('table5').innerHTML = 'Multilingual support ';
    document.getElementById('table6').innerHTML = 'Dashboard';
    document.getElementById('table7').innerHTML = 'Health';
    document.getElementById('table8').innerHTML = 'Data Synchronization ';
    document.getElementById('table9').innerHTML = 'Aesthetic design  ';
*/
    language = 'EN';
  } else {
    document.getElementById('text_login').innerHTML =
      '<i class="fa fa-sign-in mr-2"></i>로그인';
    document.getElementById('text1').innerHTML =
      '트림원을 위한 웹 어플리케이션을 경험해보세요. <br/> 더 나은 삶을 경험해볼 준비가 되셨나요?';
    document.getElementById('tag0').innerHTML = '홈';
    document.getElementById('tag3').innerHTML = '제품 설명';
    document.getElementById('tag4').innerHTML = '사전 예약구매';
    document.getElementById('text_fit0').innerHTML = 'Trimm One 소개';
    document.getElementById('post_text').innerHTML = '최근 게시물';
    document.getElementById('text_fit0').innerHTML = 'TrimmOne 소개';

    language = 'KR';
  }
}
