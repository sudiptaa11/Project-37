class Contestant {
  constructor(){
    //adding properties to contestant and giving its value at the start of the game
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  //saving contestant count from database to contestantCount variable
  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })
  }

  //updating count the the parameter given
  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  //updating name and answer in database
  update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  //creating a static function to get all the player's information and saving it in var allContestants
  static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }
}
