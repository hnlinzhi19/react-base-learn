// 首頁第一屏
export const getHome1 = () => new Promise((resolve, reject) => {
  fetch('http://m.chijiayd.com/api/wap/index/1')
    .then(e => e.json())
    .then(function (response) {
      console.log(response);
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
});

export const getHome2 = () => new Promise((resolve, reject) => {
  fetch('http://m.chijiayd.com/api/wap/index/2')
    .then(e => e.json())
    .then(function (response) {
      console.log(response);
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
});