# Dongbang
with prismagram, graphql, react, apollo

## User Stories

### 유저 입장
- [ ] 동아리 목록 가져오기 // 필터링은 Client단에서
- [ ] 동아리 세부 목록 보기, (인스타 소개, 활동)
- [ ] 동아리 지원하기 기능
- [ ] 채팅기능 구현 
- [ ] 로그인 기능 구현(계정 생성)
- [ ] 프로필 관리(이름, 전화번호 수정)

### 운영자 입장
- [ ] 동아리 정보 관리
- [ ] 지원자 관리 (합격 등 통보)
- [ ] 동아리 활동 관리 숨기기/보이기, 페이스북/ 인스타그램
- [ ] 가입신청 양식 관리
- [ ] 사진 올리기

<hr>
## Data Model
type User{
    id(email)
    phone-number
    master
    joinClubs:[Club]
    student-number
    major:
}

type Application{
    userid : User
    club:
}

type Club{
    master-id:
    members: [User]
    applicants: [User]
    bio:
    description:
    logo:
    type:
    question_id
}

type Question{
    subject:
    isSubjective:
    
}

type Room{
    id:
    User: [A, B]
    Message: []
}

type Message{
    room:
    from:
    to:
    content:
}
