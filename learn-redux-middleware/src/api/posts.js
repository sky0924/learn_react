// 특정 시간(ms)동안 기다리는 프로미스를 만드는 함수
const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// Posts Data
const posts = [
  {
    id: 1,
    title: "리덕스 미들웨어를 배워봅시다",
    body: "리덕스 미들웨어를 직접 만들어보면 이해하기 쉽죠.",
  },
  {
    id: 2,
    title: "redux-thunk를 사용해봅시다",
    body: "redux-thunk를 사용해서 비동기 작업을 처리해봅시다!",
  },
  {
    id: 3,
    title: "redux-saga도 사용해봅시다",
    body: "나중엔 redux-saga를 사용해서 비동기 작업을 처리하는 방법도 배워볼 거예요.",
  },
];

// Posts를 가져오는 비동기 함수
export const getPosts = async () => {
  await sleep(500);
  return posts; // posts 배열을 반환
};

// ID로 Post를 조회하는 비동기 함수
export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
