$(document).ready(function () {
  let choices = ["面", "小手", "胴", "小手面"];
  console.log(choices);
  let computerChoices = ["小手面", "小手面", "面", "小手", "胴"];
  let playerWins = 0;
  let computerWins = 0;
  let rounds = 0;

  $(document).ready(function() {

  
    $("#playerMen").click(function(){
      $("#img1").attr("src","https://ekakisalue.blush.jp/ken0712.jpg");
      // $("#img1").fadein(2000);
      
      // return false;
      $(".text1").html("面");
    });

    $("#playerKote").click(function(){
      $("#img1").attr("src","img/image2.JPG");
      // $("#img1").fadein(2000);
      
      // return false;
      $(".text1").html("小手");
    });

    
    $("#playerDo").click(function(){
      $("#img1").attr("src","https://ekakisalue.blush.jp/kendo24_3.jpg");
      // $("#img1").fadein(2000);
      
      // return false;
      $(".text1").html("胴");
    });

    $("#playerKoteMen").click(function(){
      $("#img1").attr("src","https://ekakisalue.blush.jp/ken1001.jpg");
      // $("#img1").fadein(2000);
      
      // return false;
      $(".text1").html("小手面");
    });

})

  $(".choice").on("click", function () {
      let playerChoice = $(this).text();
      let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      $("#player .choices .choice").prop("disabled", true);
      $("#playerChoice").text(playerChoice);
      $("#computerChoice").text(computerChoice);

      if (playerChoice === computerChoice) {
          $("#resultText").text("引き分けです！");
      } else if ((playerChoice == "胴" && computerChoice == "小手面") || (playerChoice == "小手面" && computerChoice == "胴"))
         {
          $("#resultText").text("引き分けです！"); 
         } else if (
          (playerChoice === "面" && computerChoice === "小手面") ||
          (playerChoice === "小手" && (computerChoice === "胴" || computerChoice === "面")) ||
          (playerChoice === "胴" &&  computerChoice === "面") ||
          (playerChoice === "小手面" && computerChoice === "小手")
      ) {
          $("#resultText").text("プレイヤーの勝ち！");
          playerWins++;
      } else {
          $("#resultText").text("コンピュータの勝ち！");
          computerWins++;
      }

      rounds++;

      if (rounds < 3) {
          setTimeout(function () {
              $("#playerChoice").text("");
              $("#computerChoice").text("");
              $("#resultText").text("次のラウンドへ進みます。");
              setTimeout(function () {
                  $("#player .choices .choice").prop("disabled", false);
                  $("#resultText").text("");
              }, 1000);
          }, 2000);
      } else {
          if (playerWins > computerWins) {
              $("#resultText").text("3回戦終了！プレイヤーの勝ち！");
          } else if (playerWins < computerWins) {
              $("#resultText").text("3回戦終了！コンピュータの勝ち！");
          } else {
              $("#resultText").text("3回戦終了！引き分けです！");
          }
          $("#player .choices .choice").prop("disabled", true);
      }

      // スコアを更新
      $("#scoreText").text("プレイヤー: " + playerWins + " 勝 / コンピュータ: " + computerWins + " 勝");


      if(computerChoice == "面"){
        $("#img2").attr("src","https://ekakisalue.blush.jp/ken0712.jpg")
        $(".text2").html("面")
      }

      
      if(computerChoice == "小手"){
        $("#img2").attr("src","img/image2.JPG")
        $(".text2").html("小手")
      }

      if(computerChoice == "胴"){
        $("#img2").attr("src","https://ekakisalue.blush.jp/kendo24_3.jpg")
        $(".text2").html("胴")
      }

      if(computerChoice == "小手面"){
        $("#img2").attr("src","https://ekakisalue.blush.jp/ken1001.jpg")
        $(".text2").html("小手面")
      }
      

  });

 

});
