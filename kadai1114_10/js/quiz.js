q = new Array();  // 配列作成
q[0] = ["イルカを漢字で書くとどれ？","海豚","海牛","河豚",1];
q[1] = ["クラゲを漢字で書くとどれ？","水浮","水母","水星",2];
q[2] = ["カタツムリを漢字で書くとどれ？","禍牛","鍋牛","蝸牛",3];
q[3] = ["バッタを漢字で書くとどれ？","飛蝗","飛蟻","飛脚",1];
q[4] = ["マグロを英語にするとどれ？","funa","suna","tuna",3];

const quiz_num_max = 5;  // クイズの問題数
var quiz_num = 0;
var score = 0;

document.getElementById('quizNum').innerHTML = "第"+(quiz_num+1)+"問";


var log = function(){
    if(quiz_num>=quiz_num_max-1){  // スコア表示
      document.getElementById('quizNum').innerHTML = score;
      document.getElementById('quiz_text').innerHTML = "";
      document.getElementById('select_ans').innerHTML = "";
      document.getElementById('judge').innerHTML = "";

      setTimeout(scoreFunc, 3000);

    }else{
      quiz_num++;
      document.getElementById('quiz_text').innerHTML = "";
      document.getElementById('judge').innerHTML = "";
      document.getElementById('quizNum').innerHTML = "第"+(quiz_num+1)+"問";
      document.getElementById('select_ans').innerHTML = "";

    setTimeout(new_quiz, 3000);
  }
};


/* 問題表示 */
var new_quiz = function new_quiz_func(){

  document.getElementById('quizNum').innerHTML = "";
  document.getElementById('quiz_text').innerHTML = q[quiz_num][0];
  document.getElementById('select_ans').innerHTML = "\
  <input class=\"btn-sticky\" type=\"button\" value="+q[quiz_num][1]+" onclick=judgeFunc(1)></div>\
  <br>\
  <br>\
  <input class=\"btn-sticky\" type=\"button\" value="+q[quiz_num][2]+" onclick=judgeFunc(2)></div>\
  <br>\
  <br>\
  <input class=\"btn-sticky\" type=\"button\" value="+q[quiz_num][3]+" onclick=judgeFunc(3)></div>\
  ";

}

if (quiz_num==0) {
  setTimeout(new_quiz, 3000);
}

function judgeFunc(select){
  if(q[quiz_num][4] == select){
    document.getElementById('judge').innerHTML = "ok";
    score += 20;  // スコアの加算
  }
  else{
    document.getElementById('judge').innerHTML = "ng";
  }

  setTimeout(log, 3000);
}

function scoreFunc(){
    window.location.href = './index.html'; // 通常の遷移

}
