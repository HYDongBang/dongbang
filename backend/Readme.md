# Dongbang
with prismagram, graphql, react, apollo

## User Stories

### 유저 입장
- [ ] 동아리 목록 가져오기 // 필터링은 Client단에서 O
- [ ] 동아리 세부 목록 보기, (인스타 소개, 활동) O 
- [ ] 동아리 지원하기 기능 O
- [ ] 채팅기능 구현 O
- [ ] 로그인 기능 구현(계정 생성) O
- [ ] 프로필 관리(이름, 전화번호 수정) O

### 운영자 입장
- [ ] 동아리 정보 관리 O
- [ ] 지원자 관리 (합격 등 통보) O 
- [ ] 동아리 활동 관리 숨기기/보이기, 페이스북/ 인스타그램 O
- [ ] 가입신청 양식 관리 O 
- [ ] 사진 올리기 O

## Data Model

```c
type User{
    id:
    phone-number:
    isMaster:
    sex:String
    joinClubs:[Clubid]
    bio:
    student-number
    major:
    applications:[Applicationid]
    rooms:[Room]
    notifications:[Notification]
}

type Notification{
    userId: User
    content: String
    checked: boolean
}

type Application{
    id:
    userId : User
    club:
    questions: [QuestionId]
    answer: [String]
    checked: boolean // true
    isPass: boolean
    // 합격, 불합격, 처리가 안된거..
}

type Club{
    id:
    master-id:
    members: [User]
    applications: [ApplicaitonId]
    name:
    bio:
    description:
    logo:
    clubImage:
    type:
    social_url:
    social_display:
}

type Question{
    id:
    subject:
    type:
    options:[String]
}

type Room{
    id:
    User: [A, B]
    Message: [MessageId]
}

type Message{
    id:
    room:
    from:
    to:
    content:
    created_at:
}
```
