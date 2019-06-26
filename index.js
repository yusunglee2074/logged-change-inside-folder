// 기본 node fs 모듈을 쓰지 않는 이유는
// fs.watch 맥OS에서 파일이름을 표시 하지 않고
// 폴더속 폴더를 쳐다보는 기능도 포함되어있지 않다.
// 그 밖에 여러 이슈가 있다.
// https://github.com/paulmillr/chokidar

const chokidar = require('chokidar')


chokidar.watch('.')
// 현재 스크립트와 동일한 폴더내에서 파일 추가 쳐다보기
  .on('add', (filename) => {
    // 파일이 추가 될때마다 DB에 쓴다던지,
    // API콜을 친다던지 여기 콜백 함수내에서 하면된다.
    console.log(filename + '이 추가되었습니다.')
  })
// 파일 제거 쳐다보기
  .on('unlink', (filename) => {
    console.log(filename + '이 제거되었습니다.')
  })
