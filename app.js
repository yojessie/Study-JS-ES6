// this & arrow function 연습문제
// 최대한 this와 arrow function을 활용하여 풀어보기

// 1. 간단한 메소드 만들기
function Profile(name) {
  this.name = name;
  this.sayHello = () => console.log('Hello, I am ' + this.name + '.');
} //메소드 밖에 this가 없다면, 메소드 안에서 arrow function을 썼을때 this가 window가 되면서 에러가 났을것.

const profile1 = new Profile('Jessie');
profile1.sayHello();

const profile2 = new Profile('Tony');
profile2.sayHello();



// 2. 오브젝트 데이터 계산기 만들기 (data 오브젝트는 변형시키지 말 것)
const data = {
  num : [1, 2, 3, 4, 5]
}

data.calculator = function() {
  let sum = 0;
  this.num.forEach(item => sum = sum + item)
  console.log(sum);
}

data.calculator();



// 3. 1초후에 클릭한 버튼 내용 출력하기
const button = document.querySelector('#settime-button');

button.addEventListener('click', function(){
  setTimeout(() => console.log(this.innerHTML), 1000)
  // setTimeout 실행함수에 들어간 this가 일반 함수에서 실행되어서 window가 되기 때문에,
  // 한단계 바깥의 this가 가질 수 있는 값으로 갖게 하기 위해서 arrow function을 사용함
})






// 변수 연습문제

// 1. 1초마다 1 ~ 5 숫자가 차례대로 나오게 하기
// 잘못된 코드
for (var i = 1; i < 6; i++) { 
  setTimeout(function() { console.log(i); }, i * 1000 ); 
}

// var은 함수 안에 있지 않는한 전역변수라 조건문이 setTimeout과 별개로 먼저 실행되어버려, 최종값만 i 변수에 남게된다.
// 따라서 괄호 범위에서 실행되는 let으로 변수를 선언해주어, setTimeout이 필요할떄 범위 내에있는 let 변수를 사용할 수 있게 바꿨다.
for (let i = 1; i < 6; i++) { 
  setTimeout(function() { console.log(i); }, i * 1000 ); 
}