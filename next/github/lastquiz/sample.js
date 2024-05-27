var qa = [
    ['再生資源の利用に関する法律（リサイクル法）ができたのは1991年である。', 1],
    ['日本で一年間にでるゴミの量は4432万トンである。', 1],
    ['一人が一日で出すゴミの量は500gである。', 2],
    ['3Rとはリデュース、リユース、リサイクルの頭文字をとったものである。', 1],
    ['リユースは物を大切に扱い廃棄物の抑制をすることである。', 2],
    ['リサイクルは廃棄物を資源として再利用することである。', 1],
    ['PDF化は粉砕した神谷廃プラスチック、生ごみ等を可燃ごみを石炭と混ぜ、乾燥、圧縮をしてチョーク上に固形化したものである。', 1],
    ['ヨーグルトやカップラーメン等の紙製容器は古紙として回収できる。', 2],
    ['電池は燃やすごみである。', 1],
    ['世界で一番問題になっいるのは海洋プラスチックである。', 1],
    ['ゴミが一番多かった都道府県は大阪府である。', 2],
    ['リサイクルは江戸時代から行われいた。', 1],
    ['日本のゴミは太平洋を出てハワイに行く。', 1],
    ['3RのほかにRefuse(断る)、Repair(修理)を追加したら5Rである', 1],
    ['家庭ごみを適切に分別することは地球環境を守ることにつながる。',1],
    ['家庭ごみのリサイクルは資源を有効活用するための手段である。',1],
    ['家庭ごみの分別は地球の美しさを維持するため手段である。',1],
    ['家庭ごみの問題解消のために各世帯の協力が必要である。',1],
    // 他のクイズデータも同様に追加
  ];
  
  var count = 0;
  var correctNum = 0;
  var currentQuestionData;
  
  function getRandomQuestion() {
    return qa[Math.floor(Math.random() * qa.length)];
  }
  
  function displayQuestion() {
    var questionData = getRandomQuestion();
    var questionElement = document.getElementById("question");
    questionElement.textContent = currentQuestionData[0];
    return questionData;
  }
  
  function hantei(answer) {
    var questionData = displayQuestion();
  
    if (answer == currentQuestionData[1]) {
      correctNum++;
      console.log("正解！");
    } else {
      console.log("不正解...");
    }
  
    count++;
  
    if (count < 2) {
      // まだ10問に達していない場合、次の問題を表示
      
    } else {
      // 10問終了した場合、結果を表示
      // 既存の要素のinnerHTMLプロパティを使ってHTMLを挿入
      changeScreen();
    }
  }
  function changeScreen(){
    window.location.href = "result.html";
  }
  function showScore() {
    var scoreMessageElement = document.getElementById("score-message");
    var resultMessage = "正解数: " + correctNum + " / 全体の問題数: " + 10;
    scoreMessageElement.textContent = resultMessage;
  }
  
  
  // 初回の問題表示
  displayQuestion();
  

  