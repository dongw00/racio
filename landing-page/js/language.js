function ChangeLanguage(){  
    console.log(--my-value);
    if( --my-value ==='KR'){
        document.getElementById('text1').innerHTML = "Experience Web Application for TrimmOne!, <br> You can manage a data efficiently and useful";
        document.getElementById('tag0').innerHTML = "Home";
        document.getElementById('tag1').innerHTML = "Ranking & Achievement";
        document.getElementById('tag2').innerHTML = "Database";
        document.getElementById('tag3').innerHTML = "Our Product";
        document.getElementById('tag4').innerHTML = "Our Services";
    
    }else{

        document.getElementById('text1').innerHTML = "트림원을 위한 웹 어플리케이션을 경험해보세요. <br>  당신의 데이터를 유용하고 효율적으로 관리 할 수 있습니다.";
        document.getElementById('tag0').innerHTML = "홈";
        document.getElementById('tag1').innerHTML = "랭킹";
        document.getElementById('tag2').innerHTML = "데이터베이스";
        document.getElementById('tag3').innerHTML = "제품";
        document.getElementById('tag4').innerHTML = "기타 서비스";
    
    }
}
