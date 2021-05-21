class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:-Do you think cavemen had nightmares about cavewomen?" );
    this.question.position(150, 80);
    this.option1.html("1: Yes " );
    this.option1.position(150, 100);
    this.option2.html("2: Maybe (I Don't Know) " ); //ans
    this.option2.position(150, 120);
    this.option3.html("3: No " );
    this.option3.position(150, 140);
    this.option4.html("4: I am Not There At That Time " );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);

      if(contestantCount > 4){
      
      gameState = 1;

      }

    });
  }
}
