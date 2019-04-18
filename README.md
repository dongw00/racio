# 레이시오 웹 어플리케이션

## Intro

이 깃 허브는 레이시오의 웹 어플리케이션 프로젝트 저장소 입니다. <br />
<br />

## 😎 Stack

- React
- Fiebase

<br />

## Project execution without firebase

```
yarn install
yarn start
```
<br />

## Project execution with firebase

```
yarn install
firebase serve
```

<br />

## Project File structure

- `/models/` : MongoDB Schema File
  - `boardSchema` : board's DB schema
  - `member.js` : members page's DB schema
  - `user.js` : account info (admin, etc..)
- `/public/` : static file folder (such as javaScript files, CSS files, images files etc.)
  - `javascripts/dist` : Compile to ES5 syntax (bc of IE compatibility) - babel 7
  - `robots.txt` : To give instructions about site to web robots
- `/routes/` : Routing specific directory
- `/views/` : View part. EJS is similar with java jsp, Ruby erb

## ETC

- Password encryption method: bcrypt(Password Hash Function)
- When saving a default admin account info, you should save it on `/.env`
