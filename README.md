# S-LOG

> 위즈윅 에디터 기반으로 작성 가능한 블로그

## 목차

- [1. 프로젝트 소개](#1-프로젝트-소개)
- [2. API Table](#7-api-table)
- [3. 구현기능](#8-구현-기능)
- [4. 트러블](#8-issue)

## 1. 프로젝트 소개

- 프로젝트 제목 :
  - S-LOG
- 프로젝트 간단 설명 :

## 2. API Table

| 이름                  | URL       | Method | request                                                         | prams                   |
| :-------------------- | :-------- | :----- | :-------------------------------------------------------------- | :---------------------- |
| 게시글 목록 전체 조회 | /post     | GET    |                                                                 |                         |
| 게시글 상세 조회      | /post/:id | GET    |                                                                 | {'contentId':contentId} |
| 게시글 작성           | /post     | POST   | {'title’:title,’content’:content}                               |                         |
| 게시글 수정           | /post/:id | PATCH  | {'title’:editTitle,’content’:editContent,’contentId’:contentId} |                         |
| 게시글 삭제           | /post/:id | DELETE | {’contentId’:contentId}                                         |                         |
| 회원가입              | /register | POST   | {’id’:id,'password':password}                                   |                         |
| 로그인                | /login    | POST   | {’id’:id,'password':password}                                   |                         |

## 3. 구현기능

-
-

## 4. issue

> 1. 새로고침하면 쿠키는 살아있지만 로그아웃됨
> 2. 수정했을 때 인풋값 바로 안바뀌는 현상
