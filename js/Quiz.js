class Quiz {
  constructor(){}

  //gettong state from database and saving it in gameState variable
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  //updating state to the parameter given
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  //creatig function for when the game starts
  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //hiding the title input and buttons is not necessary because we did that on keypressed in display function of question class

    //writing code to change the background color here
    background(0);

    //writing code to show a heading for showing the result of Quiz
    fill(225);
    textSize(30);
    text("Results are out!",350,30);

    //calling getContestantInfo( ) here
    Contestant.getPlayerInfo();

    var display_position = 240;

    //writing condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      //adding a note here
      fill("blue");
      textSize(20);
      text("NOTE: Contestants who answered correct are highlighted in green color!", 130, 230);

      for(var plr in allContestants){

        //highlighting contest who answered correctly
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer){
          fill("Green");
        }else{
          fill("red");
        }

        //displaying the results
        display_position+= 20;
        textSize(15);
        text(allContestants[plr].name+ ":"+allContestants[plr].answer, 130, display_position);
      }
    }
  }
}
