import {ROWS, COLS} from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];

  // 먹이의 좌표
  this.fruit = {x: 8, y: 7};
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  // joint의 y축을 -1 시킴
  this.joints[this.joints.length-1].x = this.joints[0].x;

  this.joints[this.joints.length-1].y = this.joints[0].y-1;

  for(let i = 0 ; i<this.joints.length;i++){
    this.joints[i].y -= 1;
  }

  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  // joint y축을 +1 시킴

  for(let i = 0 ; i<this.joints.length;i++){
    this.joints[i].y += 1;
  }
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  // joint의 x축을 -1시킴

  for(let i = 0 ; i<this.joints.length;i++){
    this.joints[i].x -= 1;
  }
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  //joint의 x축을 +1시킴
  

  for(let i = 0 ; i<this.joints.length;i++){
    this.joints[i].x += 1;
  }

  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환


  console.log(`nextState`);
  return true;
}

export default SnakeGameLogic;
