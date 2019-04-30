var config = {
  apiKey: "AIzaSyAFBoNrEkBI0TLB6fjW-4ifMS3HAtuxxtY",
  authDomain: "facebooklogin-44d81.firebaseapp.com",
  databaseURL: "https://facebooklogin-44d81.firebaseio.com",
  projectId: "facebooklogin-44d81",
  storageBucket: "facebooklogin-44d81.appspot.com",
  messagingSenderId: "480930104944"
  };
firebase.initializeApp(config);

//세션유지
function confirmLogin(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      try{
        set_user(user);
      }
      catch(error){
      };
    } else {
      document.getElementById('login_button').style.display = 'block';
    }
  });
}

//엔터감지
function keydown(num) {
  if (window.event.keyCode == 13) {
    if (num == 1) EmailBtnEvent();
    else SignUpBtnEvent();
  }
}

//화면변화
function active_login(id1, id2) {
  clear();
  document.getElementById(id1).style.display = 'none';
  document.getElementById(id2).style.display = 'block';
}

//정보입력
function set_user(user) {
  active_login('login_button', 'hide_dash');
  active_login('hide_login', 'change_login');

  if(user.photoURL === null) {
    document.getElementById('rounded1').style.backgroundImage = `url(/../images/app-promo/No_url.png)`;
  }else{
    document.getElementById('rounded1').style.backgroundImage = `url(${
      user.photoURL
    })`;
  }
  document.getElementById('user_info').innerHTML = `
    Name : ${user.displayName}
    <br>
    Email : ${user.email}
    <br>
  `;
}

//이메일 생성가능 판단
function emailCheck(mail) {
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailReg.test(mail)) return true;
  return false;
}

//이메일 유효성 검증
function validateJoinForm(email, password, rePassword) {
  if (!emailCheck(email)) {
    alert('Invalid Email');
    return false;
  }
  if (password !== rePassword) {
    alert('Password is different');
    return false;
  }
  return true;
}

//입력값 초기화
function clear() {
  document.getElementById('joinUserName').value = '';
  document.getElementById('joinUserEmail').value = '';
  document.getElementById('joinPassword').value = '';
  document.getElementById('joinRePassword').value = '';
  document.getElementById('userName').value = '';
  document.getElementById('password').value = '';
}

//구글 로그인 버튼 이벤트
function GoogleBtnEvent() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
        })
        .catch(error => {});
      var user = firebase.auth().currentUser;
      set_user(user);
    })
    .catch(function(error) {
      alert(error.message);
    });
}


//이메일 로그인 버튼 이벤트
function EmailBtnEvent() {
  const email = document.getElementById('userName').value.trim();
  const password = document.getElementById('password').value.trim();
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  if (!emailCheck(email)) alert('Invaild Email');

  if (emailCheck(email) && password.length > 0) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        if (!user.emailVerified) {
          alert('You have to verify your Email');
          firebase
            .auth()
            .signOut()
            .then(() => {
              // Sign-out successful.
            })
            .catch(error => {
              // An error happened.
            });
          retrun;
        }
        set_user(user);
      })
      .catch(error => {
        // Handle Errors here.
        switch (error.code) {
          case 'auth/invalid-email':
            alert('invalid-email\nplease check your id ^^');
            break;
          case 'auth/user-disabled':
            alert('Sorry... this User was disabled');
            break;
          case 'auth/user-not-found':
            alert('user-not-found\nplease check your id ^^');
            break;
          case 'auth/wrong-password':
            alert('wrong-password\nplease check your password ^^');
            break;
        }
      });
  }
}

//이메일 가입버튼 이벤트
function SignUpBtnEvent() {
  const userName = document.getElementById('joinUserName').value.trim();
  const email = document.getElementById('joinUserEmail').value.trim();
  const password = document.getElementById('joinPassword').value.trim();
  const rePassword = document.getElementById('joinRePassword').value.trim();
  if (validateJoinForm(email, password, rePassword)) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        user
          .sendEmailVerification()
          .then(() => alert('Verifying message is sent to your Email'))
          .catch(error => {});

        user
          .updateProfile({
            displayName: userName,
          })
          .catch(error => {});

        active_login('hide_signup', 'hide_login');
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('This Email is already in use');
            break;
          case 'auth/invalid-email':
            alert('invalid-email');
            break;
          case 'auth/operation-not-allowed':
            alert('operation-not-allowed');
            break;
          case 'auth/weak-password':
            alert('Password must be at least 6 digits');
            break;
        }
      });
  }
}

//로그아웃 이벤트
function LogOutEvent() {
  const user = firebase.auth().currentUser;
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful
      document.getElementById('rounded1').style.backgroundImage = null;
      document.getElementById('user_info').innerHTML = '';
      active_login('hide_dash', 'login_button');
    })
    .catch(error => {
      // An error happened.
    });
}
