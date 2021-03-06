// 첫 번째 풀이 -> 아직 파이썬답게 풀어 chaining과 js 메소드를 완벽히 사용하지 못하였다.
function first(id){
  return id.toLowerCase();
}

function second(id){
  const reg = /[^0-9a-z._-]/g;
  return id.replace(reg,"");
}

function third(id){
  const reg = /\.+/g;
  id = id.replace(reg,"\.");
  return id
}

function fourth(id){
    const reg = /^\.|\.$/;
    while(reg.test(id)){
        id = id.replace(reg,"");
    }
    return id
}

function fifth(id){
    if (!id){
        return "a";
    }
    return id;
}

function sixth(id){
    if (id.length >= 16){
        id = id.slice(0,15);
    }
    id = fourth(id);
    return id;
}

function seventh(id){
    while(id.length <= 2){
        id += id[id.length-1];
    }
    return id;
}

function solution(new_id) {
  let answer = '';
  answer = first(new_id);
  answer = second(answer);
  answer = third(answer);
  answer = fourth(answer);
  answer = fifth(answer);
  answer = sixth(answer);
  answer = seventh(answer);
  console.log(answer);
  return answer;
}

// 다른 사람들의 chaining을 보면서 공부한 메소드를 사용한 코드
// chaining을 사용함으로써 좀 더 깔끔해진 모습을 볼 수 있다.
// Js에서는 Python의 문자열 처리 메소드 대신 정규식을 많이 사용한다는 것을 알 수 있었다.
function solution(new_id) {
  const answer = new_id
      .toLowerCase()
      .replace(/[^\w-.]/g,"")
      .replace(/\.+/g,".")
      .replace(/^\.|\.$/, "")
      .replace(/^$/,"a")
      .slice(0,15).replace(/\.$/, "");
  return answer.padEnd(3, answer[answer.length-1]);
}