

/*
function hantei_10(){
// var fig;//変数宣言
//
// fig = document.getElementById('figure').value;
//
// if (fig>=10)
//  {
//    document.getElementById('res').innerHTML="やるやん！";
//
// }


  var fig;

  fig = document.getElementById('figure').value;

  if (jack%2==0) {
    document.getElementById('res').innerHTML="2の倍数"
  }else if(jack%3==0){
      document.getElementById('res').innerHTML="３の倍数"
  }else if (jack%7==0) {
      document.getElementById('res').innerHTML="７の倍数"
  }else {
      document.getElementById('res').innerHTML="残念"

// 三角形の公式作成途中

// var start;
//
// start = document.getElementById(figure).value;
//
// var end;
//
// end = document.getElementById(skate).value;




  }

}

*/


function calculate(){

  var num;
  num = document.getElementById('guki_in').value;

if (num%2==0) {
  document.getElementById("guki_out").innerHTML="偶数です";
}else{
  document.getElementById("guki_out").innerHTML="奇数です";

}


}



function krkrkr(){

  var num = document.getElementById('krr_in').value;
  document.getElementById("krr_out").innerHTML="";

    for (var i = 1; i <= num; i++) {
      document.getElementById("krr_out").innerHTML += i + "回目の繰り返しデス<br>";
    }
}

function sgsgsg(){
  var num = document.getElementById('sgm_in').value;
  document.getElementById("sgm_out").innerHTML="";
 var sum= 0;
    for (var i = 1; i <= num; i++) {
    sum += i;
    }
      document.getElementById("sgm_out").innerHTML = sum;
}

function snkk(){
  var num = document.getElementById('und_in').value;
  var cum = document.getElementById('high_in').value;
  document.getElementById("mns_out").innerHTML="";

  var rum=num*cum/2;

  document.getElementById("mns_out").innerHTML=rum;
}

function color(){
    var color = document.getElementById('color_in').value;
    var res;
    res = '<p style="color:'+color+'">やるやん</p>';
    document.getElementById('color_out').innerHTML = res;

}

var flag = 0;
function changeimage(){
if (flag == 0){

  document.getElementById('imgShow').innerHTML =
  "<img src = './img/DSC_0207.jpg' weight=100px height=180px>";
  flag = 1;
}else {
  document.getElementById('imgShow').innerHTML = "AAA";
  flag = 0;
}
}

// function changeimage(){
//   document.getElementById('imgShow').innerHTML =
//   "<img src = './img/DSC_0319.jpg' weight=100px height=180px>";
