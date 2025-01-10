## Summary
- 웹으로 간편하게 이용한 가능한 모의투자 웹 어플리케이션
- stock + forecasting의 합성어로 Stockasting
- [토스 증권](https://tossinvest.com/)의 디자인을 벤치마크하여 개발

## Features
* 회원가입 및 로그인
* 계좌 및 포트폴리오 관리
* 주식 매입, 판매 기능
* 주식 가격 변화 그래프
* 거래 및 판매 내역 확인

## Skills
-**React, Typescript**
> React 기반으로 프로젝트 개발 및 코드 안정성을 위한 Typescript 사용

**-Redux toolkit**
>Redux 기반의 상태관리 라이브러리 사용. 비교적 사용이 복잡하며 러닝 커브가 높은 편이지만
>개인 프로젝트에 활용해봄으로써 상태관리 라이브러리 특성 비교

**-Tailwind**
>Tailwind 기반으로 CSS 작성 + 선택 이유 보충

**-Chart js**
> 주식 변동 그래프 생성에 이용

**-Firebase Auth**
> OAuth 기반 소셜로그인에 사용

**-Webpack, Vercel**
>번들링 및 Github와 연동한 배포

**-Node, MySQL, Web Socket**
>[한국 투자 Open API](https://apiportal.koreainvestment.com/) 및 더미 데이터를 호출하기 위한 노드 기반 API server 구축
>웹 소켓을 통한 실시간 시세 정보

**- GraphQL**
>필요한 데이터만 요청해 오버페칭 방지 및 API 인터페이스 설계 및 유지보수에 대한 비용 절감
>복잡한 OPEN API 데이터를 프론트엔드 주도적으로 관리

**- SharedWorker**
>여러 탭간 소켓 상태 공유를 통한 자원 절약 및 일관성 유지

**- React-hook Form**
> 주식 결제 관련 폼의 유효성 검사 간편화 및 코드 가독성 증대

## WireFrame
### Landing
- **Firebase Auth**를 사용해 Google 소셜 로그인을 지원함. 계정이 없을 경우 자동으로 회원가입을 시도하며, 이미 존재할 경우 해당 계정으로 로그인함.
- Google 소셜 로그인 단일 플랫폼만 제공해 간편한 로그인 경험을 제공함.

<img src="https://github.com/user-attachments/assets/7cac2d36-d678-4307-b1f9-2101b3b1fee9" width="300" height="400"/>

#### Home
- 사용자가 입력한 검색어를 기반으로 **Node API**가 더미 주식 목록에서 주식을 검색함.
- 주가 지수 및 주식 목록은 **KIS Open API**를 통해 데이터를 제공받으며, 국내 주식에 한정된 정보를 제공함.
- 화면 하단의 **푸터 영역에 로그아웃 기능**을 배치함.

<img src="https://github.com/user-attachments/assets/3c79ee36-41cd-4262-a012-a0ef01b6e871" width="300" height="400"/>

### My Account
- 초기 1,000,000원의 고정 금액이 주어지며, 거래 후 **주문 가능 금액**은 자동으로 업데이트됨.
- 계좌의 변동 사항을 그래프로 시각화해 자산 흐름을 한눈에 파악할 수 있도록 함.

<img src="https://github.com/user-attachments/assets/68c9a734-8a20-42f5-b260-4db08235efb1" width="300" height="400"/>

### Sale Revenue
- 판매로 인한 수익을 리스트로 보여주며, 사용자가 쉽게 확인할 수 있도록 **페이지네이션** 기능을 추가함.
- **월별 재정렬** 기능을 통해 각 월의 수익 내역을 확인할 수 있음.

<img src="https://github.com/user-attachments/assets/651f3705-28b1-4790-9a6d-d59d23488fea" width="300" height="400"/>

#### Transaction History
- 사용자의 거래 내역을 리스트 형식으로 제공하며, 각 거래의 상세 정보를 볼 수 있도록 함.
- 페이지네이션을 통해 특정 개수 단위로 나누어 보여줌.

<img src="https://github.com/user-attachments/assets/43b0d536-c0a4-475b-aaed-f9672e5c762b" width="300" height="400"/>

#### commit convention
1. **feat**: 새로운 기능 추가
2. **fix**: 버그 수정
3. **chore**: 빌드 작업이나 설정 변경
4. **refactor**: 코드 리팩토링
5. **style**: 코드 포맷 변경 (포매팅, 세미콜론 추가 등)
6. **docs**: 문서 수정
7. **test**: 테스트 코드 추가 또는 수정
8. **perf**: 성능 개선
9. **build**: 빌드 관련 파일 수정
10. **ci**: CI 설정 파일 수정
11. **revert**: 이전 커밋 되돌리기
12. **add**: 새로운 파일 추가
13. **remove**: 파일 삭제
14. **merge**: 브랜치 병합

## ER Diagram
![stockast diagram](https://github.com/user-attachments/assets/fc2a7e6f-b4e7-4421-aba0-7bcb9c7bf408)
