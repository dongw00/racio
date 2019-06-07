import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { app, auth } from '../../firebase/FBinit';


import MainText from './IndexTexts';


class FirebaseLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            signUp: false,
            login: false,
        };

        this.SignUpEvent = this.SignUpEvent.bind(this);
        this.BackEvent = this.BackEvent.bind(this);
        this.LoginEvent = this.LoginEvent.bind(this);
        this.GoogleBtnEvent = this.GoogleBtnEvent.bind(this);

        this.ConfirmLogin();
    }

    //세션유지
    ConfirmLogin() {
        app.auth().onAuthStateChanged(user => {
            if(user) this.setState({ user });
        });
    }

    //입력값 초기화
    clear() {
        document.getElementById('joinUserName').value = '';
        document.getElementById('joinUserEmail').value = '';
        document.getElementById('joinPassword').value = '';
        document.getElementById('joinRePassword').value = '';
        document.getElementById('userName').value = '';
        document.getElementById('password').value = '';
    }

    //구글 로그인 버튼 이벤트
    GoogleBtnEvent() {
        const provider = new auth.GoogleAuthProvider();
        app.auth().signInWithPopup(provider).then(result => {
            app.auth().setPersistence(auth.Auth.Persistence.SESSION)
                .then(() => { })
                .catch(error => { });
            this.LoginDone();
        })
            .catch(function (error) {
                alert(error.message);
            });
    }

    //이메일 로그인 버튼 이벤트
    EmailBtnEvent() {
        const email = document.getElementById('userName').value.trim();
        const password = document.getElementById('password').value.trim();
        app.auth().setPersistence(auth.Auth.Persistence.SESSION);
        if (!this.emailCheck(email)) alert('Invaild Email');

        if (this.emailCheck(email) && password.length > 0) {
            app.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    const user = app.auth().currentUser;
                    if (!user.emailVerified) {
                        alert('You have to verify your Email');
                        app.auth().signOut()
                            .then(() => {
                                // Sign-out successful.
                            })
                            .catch(error => {
                                // An error happened.
                            });
                        // retrun;
                    }
                    this.LoginDone();
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
                        default:
                            alert(error);
                    }
                });
        }
    }

    //엔터감지
    keydown(num) {
        if (window.event.keyCode === 13) {
            if (num === 1) this.EmailBtnEvent();
            else this.SignUpBtnEvent();
        }
    }


    //이메일 생성가능 판단
    emailCheck(mail) {
        const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
        if (emailReg.test(mail)) return true;
        return false;
    }

    //이메일 유효성 검증
    validateJoinForm(email, password, rePassword) {
        if (!this.emailCheck(email)) {
            alert('Invalid Email');
            return false;
        }
        if (password !== rePassword) {
            alert('Password is different');
            return false;
        }
        return true;
    }


    //이메일 가입버튼 이벤트
    SignUpBtnEvent() {
        const userName = document.getElementById('joinUserName').value.trim();
        const email = document.getElementById('joinUserEmail').value.trim();
        const password = document.getElementById('joinPassword').value.trim();
        const rePassword = document.getElementById('joinRePassword').value.trim();
        if (this.validateJoinForm(email, password, rePassword)) {
            app.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    const user = app.auth().currentUser;
                    user.sendEmailVerification()
                        .then(() => alert('Verifying message is sent to your Email'))
                        .catch(error => { });

                    user.updateProfile({
                        displayName: userName,
                    })
                        .catch(error => { });

                    this.active_login('hide_signup', 'ActiveLogin');
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
                        default:
                            alert(error);
                    }
                });
        }
    }

    //로그아웃 이벤트
    LogOutEvent() {
        app.auth().signOut()
            .then(() => {
                // Sign-out successful
                document.getElementById('rounded1').style.backgroundImage = null;
                document.getElementById('user_info').innerHTML = '';
                this.active_login('hide_dash', 'login_button');
            })
            .catch(error => {
                // An error happened.
            });
    }

    SignUpEvent() { this.setState({ signUp: true }); }
    BackEvent() { this.setState({ signUp: false }); }
    LoginEvent() { this.setState({ login: true }); }
    LoginDone() {
        this.setState({
            user: app.auth().currentUser,
            login: false,
            signup: false
        });
    }

    render() {
        return (
            this.state.user ? <Redirect to='/main' /> :
            <div>
                {this.state.login ?
                    this.state.signUp ?
                        <SignUp></SignUp> :
                        <ActiveLogin
                            events={{
                                google: this.GoogleBtnEvent,
                                email: this.EmailBtnEvent,
                                signup: this.SignUpEvent,
                                back: this.SignUpEvent,
                            }}>
                        </ActiveLogin> :
                    <ChangeLogin
                        user={this.state.user}
                        events={{
                            login: this.LoginEvent,
                            logout: this.LogOutEvent,
                        }}>
                    </ChangeLogin>
                }
            </div>
        );
    }
}
export default FirebaseLogin;



const ChangeLogin = (props) => (
    <div id="change_login">
        <MainText></MainText>
        <p className="text-muted" id="text1">
            트림원을 위한 웹 어플리케이션을 경험해보세요. <br />
            당신의 데이터를 유용하고 효율적으로 관리 할 수 있습니다.
            </p>
        {/*<StartButton user={props.user} logoutEvent={props.events.logout}></StartButton>*/}
        <LoginButton loginEvent={props.events.login} />
        <div className="d-block mt-4">
            <a href="https://designrevision.com/download/shards"><img className="w-25 mt-2 mr-3"
                src={require("../../assets/images/app-promo/badge-apple-store.png")} alt="Get it on Apple Store" /></a>
            <a href="https://designrevision.com/download/shards"><img className="w-25 mt-2"
                src={require("../../assets/images/app-promo/badge-google-play-store.png")} alt="Get it on Google Play Store" /></a>
        </div>
    </div>

);

const LoginButton = (props) => (
    <div id="login_button">
        <a id="text_login" href=".#" className="btn btn-lg btn-primary btn-pill align-self-center text-md-center"
            onClick={props.loginEvent}><i className="fa fa-sign-in mr-2"></i>로그인</a>
    </div>
);

// const StartButton = (props) => (
//     <div id="hide_dash">
//         <div>
//             <div id="img_table">
//                 {/* <img
//                     className="user-avatar rounded-circle mr-2"
//                     src={props.user ? props.user.photoURL : require("../../assets/images/app-promo/No_url.png")}
//                     alt="User Avatar"
//                 /> */}
//                 <div id="rounded1"
//                     style={{
//                         backgroundImage: props.user.photoURL ?
//                             `url(${props.user.photoURL})` :
//                             `url(../../assets/images/app-promo/No_url.png)`
//                     }}>
//                 </div>
//             </div>
//             <div id="go_dash">
//                 <NavLink id="start_dash" className="btn btn-lg btn-primary btn-pill align-self-center text-md-center" to='/main'>
//                     <i className="fa fa-sign-in mr-2"></i>시작
//                 </NavLink>

//             </div>
//         </div>

//         <a id="user_info" href='.#'>
//             Name : {props.user.displayName}<br />
//             Email : {props.user.email}<br />
//         </a>
//         <a id="logoutbtn" onClick={props.logoutEvent} href='.'>Logout</a>
//     </div >
// );


const ActiveLogin = (props) => (
    <div id="ActiveLogin" >
        <div id="dvAuth">
            <div id="dvLogin">
                <h5 className="login_title">Account</h5>
                <div id="dvSocial">
                    <div className="btnGroup">
                        <li id="liGoogleBtn" className="waves-effect waves-teal btn-flat" onClick={props.events.google}>
                            <i></i>Using Google Account
                                </li>
                    </div>
                </div>
                <div id="dvEmail">
                    <input type="email" id="userName" name="userName" className="input-text" placeholder="email" />
                    <input type="password" id="password" name="password" className="input-text" maxLength="17"
                        placeholder="password" onKeyDown="keydown(1)" />
                    <div className="btnGroup">
                        <li id="liEmailBtn" className="waves-effect waves-teal btn-flat" onClick={props.events.email}>
                            Login</li>
                        <li id="liEmailJoin" className="waves-effect waves-teal btn-flat"
                            onClick={props.events.signup}>
                            Sign Up</li>
                    </div>
                </div>
                <em className="login-btn" id="back" onClick={props.events.back}>
                    <i className="fa fa-angle-left"></i>back</em>
            </div>
        </div>
    </div>
);

const SignUp = () => (
    < div id="hide_signup" >
        <div id="dvJoin">
            <h5 className="login_title">Email SignUp</h5>
            <input type="text" id="joinUserName" name="userName" className="input-text"
                placeholder="UserName (ex.Hong gil dong)" />
            <input type="email" id="joinUserEmail" name="userName" className="input-text"
                placeholder="Email account (ex.google, naver..)" />
            <input type="password" id="joinPassword" name="password" className="input-text" maxLength="17"
                placeholder="password" />
            <input type="password" id="joinRePassword" className="input-text" maxLength="17"
                placeholder="confirm password" onKeyDown="keydown(2)" />
            <div className="btnGroup">
                <li id="liEmailJoinSubmit" className="waves-effect waves-teal btn-flat" onClick="SignUpBtnEvent()">
                    Signed Up
                </li>
            </div>
        </div>
        <em id="back" onClick="active_login('hide_signup','ActiveLogin')">&ltback</em>
    </div >
);