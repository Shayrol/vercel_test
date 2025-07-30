# # 1. 운영체제 및 프로그램 설치 - 우분투 22.04 버전 운영체제 설치한다.
# FROM ubuntu:22.04

# # 2. nodejs 설치를 통해 npm을 사용하고 npm을 통해 yarn을 설치한다.
# #    RUN 명령어는 해당 운영체제의 터미널에서 실행되는 명령어이며 우분투는 apt로 설치가 된다.
# #    sudo는 관리자 권한으로 실행하기 위함이다.
# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn

# # 3. git 클론해서 소스코드 가짜컴퓨터 안에서 다운로드 받기
# RUN git clone https://github.com/Shayrol/vercel_test.git

# # 4. 최종 실행하기
# RUN yarn install
# RUN yarn build

# # 5. yarn start는 RUN으로 실행이 되지 않을 것이다. 그래서 CMD로 실행한다.
# CMD yarn start

# # 1 ~ 4 단계 까지는 가짜 컴퓨터를 생성하는 과정이다.
# # 5 단계는 따로 실행을 해줘야 한다.


# 개선점 - 1
# 운영체제와 nodejs, yarn을 한 번에 설치하는 과정이 docker에 올라와 있다.
# FROM node:18


# # git clone하지 않고 현 파일을 복사해서 새로 만든 폴더에 넣어준다.
# # 현 프로젝트 폴더 내용을 도커 컨테이너의 /myfolder/ 경로로 복사한다. - 폴더가 없으면 자동 생성됨
# COPY . /myfolder/

# # 앞으로 작업 디렉토리로 설정된다. - 자동으로 해당 폴더로 cd 이동됨
# WORKDIR /myfolder/

# # 최종 실행
# RUN yarn install
# RUN yarn build
# CMD yarn start

# docker build를 통해 RUN yarn build까지 실행이 되며 이미지(파일)이 생성된다.
# docker images로 확인할 수 있다.

# docker run을 통해 이미지 실행을 할 수 있다.

# 프론트에서만 실행을 하거나 프론트, 백, 서버 모두 한 번에 실행하는 방법도 있다.
# docker-compose.yaml 파일을 통해 진행한다. - 해당 파일에서 확인할 것.


# ✨ 도커의 캐싱
# 1. 도커는 이미지를 만들 때, 각 단계별로 캐싱을 한다.
#    한 줄 한 줄 읽어 가면서 캐싱을 하는데 문제점이 있다.
# 2. 만약에 소스코드를 수정하게 되면 해당 파일만 다시 COPY를 하면 되는데
#    실제 build를 하게되면 yarn install 까지 전부 다시 다운받고 있다.
# 3. 이유는 도커는 캐싱을 사용하다가 새로 변경되어 다시 다운받는 경우 그 아래 단게 모두
#    다시 다운받아야 하기 때문이다.
# 4. 그래서 최대한 캐시를 유지해야하는 것 들은 위에 끌어 올려둔다.

# 개선점 - 2
FROM node:18

# 캐싱 유지를 위해 끌어 올리고 해당 yarn install을 하기 위해 package.json과 yarn.lock 파일이
# 필요하기에 COPY를 통해 먼저 복사해서 가져온다.
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
RUN yarn install

COPY . /myfolder/

WORKDIR /myfolder/

# 최종 실행
RUN yarn build
CMD yarn start

# 이렇게 해줘 스타일, 내용 등 컴포넌트 변경은 COPY만 다시 받아오고 나머지 캐싱된 상태를 사용한다.
# 그리고 라이브러리 추가로 package.json, yarn.lock 파일이 변경이 되면 다시 yarn install을 실행을 해
# 라이브러리가 추가된 상태로 다시 캐싱을 한다.