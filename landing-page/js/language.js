var language = 'KR';

function ChangeLanguage() {
  if (language === 'KR') {
    document.getElementById('text_login').innerHTML = 'login';
    document.getElementById('text1').innerHTML =
      'Experience Web Application for TrimmOne!, <br> You can manage a data efficiently and useful';
    document.getElementById('tag0').innerHTML = 'Home';
    document.getElementById('tag1').innerHTML = 'Ranking & Achievement';
    document.getElementById('tag2').innerHTML = 'Database';
    document.getElementById('tag3').innerHTML = 'Our Product';
    document.getElementById('tag4').innerHTML = 'Our Services';
    document.getElementById('text_fit0').innerHTML = 'Features';
    document.getElementById('text_fit1').innerHTML = 'Comfortable';
    document.getElementById('text_fit2').innerHTML = 'Securitiy';
    document.getElementById('text_fit3').innerHTML = 'Data sharing';
    document.getElementById('text_fit4').innerHTML = 'Easily access Anyware!';
    document.getElementById('text_fit1_sub').innerHTML =
      'Simple and clean UI, It is Easy to use';
    document.getElementById('text_fit2_sub').innerHTML =
      'We Protect personal information thoroughly and completely';
    document.getElementById('text_fit3_sub').innerHTML =
      'You can manage your data through the file system';
    document.getElementById('text_fit4_sub').innerHTML =
      'Anytime, anywhere, you can enjoy trimm One!';
    language = 'EN';
  } else {
    document.getElementById('text_login').innerHTML = '로그인';
    document.getElementById('text1').innerHTML =
      '트림원을 위한 웹 어플리케이션을 경험해보세요. <br>  당신의 데이터를 유용하고 효율적으로 관리 할 수 있습니다.';
    document.getElementById('tag0').innerHTML = '홈';
    document.getElementById('tag1').innerHTML = '랭킹 & 업적';
    document.getElementById('tag2').innerHTML = '데이터베이스';
    document.getElementById('tag3').innerHTML = '제품';
    document.getElementById('tag4').innerHTML = '기타 서비스';
    document.getElementById('text_fit0').innerHTML = 'trimm만의 특징';
    document.getElementById('text_fit1').innerHTML = '편리함';
    document.getElementById('text_fit2').innerHTML = '보안성';
    document.getElementById('text_fit3').innerHTML = '데이터 공유';
    document.getElementById('text_fit4').innerHTML = '어디서나 쉽게!';
    document.getElementById('text_fit1_sub').innerHTML =
      '간편하고 깔끔한 UI, 누구나 쉽게사용할 수 있습니다';
    document.getElementById('text_fit2_sub').innerHTML =
      '철저하고 완벽하게 개인 정보를 보호합니다';
    document.getElementById('text_fit3_sub').innerHTML =
      '파일 시스템을 통해 데이터를 관리할 수 있습니다';
    document.getElementById('text_fit4_sub').innerHTML =
      '언제 어디서나 사용할 수 있는 trimm One!';

    language = 'KR';
  }
}
