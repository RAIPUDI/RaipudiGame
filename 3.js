var ll;
function grand_check()
{


    if(array[0][0]==array[0][1]  && array[0][1] ==array[0][2])
    {
      grand_final(array[0][0]);

    }

    else if(array[1][0]==array[1][1]  && array[1][1]==array[1][2])
    {
      grand_final(array[1][0]);
    }


      else  if(array[2][0]==array[2][1]  && array[2][1]==array[2][2])
       {
           grand_final(array[2][0]);
       }





  else if(array[0][0] == array[1][0] && array[1][0] == arrray[2][0])
    {
      grand_final(array[0][0]);


    }

    else if(array[0][1]==array[1][1] && array[1][1]==array[2][1])
    {
      grand_final(array[0][1]);
    }

    else if(array[0][2]==array[1][2] && array[1][2]==array[2][2])
    {
      grand_final(array[0][2]);
    }



    else if(array[0][0]==array[1][1]  && array[1][1]==array[2][2])
    {
      grand_final(array[0][0]);



    }

    else if(array[0][2]==array[1][1]  && array[1][1]==array[2][0])
    {
      grand_final(array[0][2]);


    }




}



function grand_final(get_that)
{
  if(get_that==0)
  {
    $(".last").text( "MR.COMPUTER is the winner press refresh button if you want to start again");
  }

  else{
    $(".last").text("YOU are the winner press refresh button if you want to start again");
  }
}









function horizontal(k) {
  count0 = 0;
  for (ii = 0; ii < 3; ii++) {
    if (array[k][ii] == zump) {
      count0 = count0 + 1;
    }

  }


  if (count0 == 2) {
    for (jj = 0; jj < 3; jj++) {
      if (array[k][jj] != zump && array[k][jj] != zump1) {
        fin_arr = [];
        fin_arr.push(k);
        fin_arr.push(jj);
        return 10;

      }
    }
  }

  return 20;


}



function vertical(k) {
  count0 = 0;

  for (ii = 0; ii < 3; ii++) {
    if (array[ii][k] == zump) {
      count0 = count0 + 1;
    }

  }

  if (count0 == 2) {
    for (jj = 0; jj < 3; jj++) {
      if (array[jj][k] != zump && array[jj][k] != zump1) {
        fin_arr = [];
        fin_arr.push(jj);
        fin_arr.push(k);
        return 10;

      }
    }
  }

  return 20;
}



function diagonal1() {
  count0 = 0;
  for (ii = 0; ii < 3; ii++) {

    if (array[ii][ii] == zump) {
      count0 = count0 + 1;
    }
  }

  if (count0 == 2) {
    for (jj = 0; jj < 3; jj++) {
      if (array[jj][jj] != zump && array[jj][jj] != zump1) {
        fin_arr = [];
        fin_arr.push(jj);
        fin_arr.push(jj);
        return 10;

      }
    }
  }

  return 20;
}


function diagonal2() {

  count0 = 0;
  if (array[2][0] == zump) {
    count0++;
  }

  if (array[1][1] == zump) {
    count0++;
  }

  if (array[0][2] == zump) {
    count0++;
  }


  if (count0 == 2) {
    if (array[2][0] != zump && arr[2][0] != zump1) {
      fin_arr = [];
      fin_arr.push(2);
      fin_arr.push(0);
      return 10;

    }

    if (array[1][1] != zump && array[1][1] != zump1) {
      fin_arr = [];
      fin_arr.push(1);
      fin_arr.push(1);
      return 10;

    }

    if (array[0][2] != zump && array[0][2] != zump1) {

      fin_arr = [];
      fin_arr.push(0);
      fin_arr.push(2);
      return 10;

    }

  }
  return 20;
}



//THIS IS HOW COMPUTER WORKS....................

function program()


{


  //HORIZONTAL CHECKING.....
  keerthi = horizontal(0);
  if (keerthi == 10) {
    return 1;
  }


  keerthi = horizontal(1);
  if (keerthi == 10) {
    return 1;
  }


  keerthi = horizontal(2);
  if (keerthi == 10) {
    return 1;
  }

  //Vertical checking.......

  keerthi = vertical(0);

  if (keerthi == 10) {
    return 1;
  }



  keerthi = vertical(1);

  if (keerthi == 10) {
    return 1;
  }


  keerthi = vertical(2);

  if (keerthi == 10) {
    return 1;
  }

//DIAGONAL........


  keerthi = diagonal1();

  if (keerthi == 10) {
    return 1;
  }



  keerthi = diagonal2();


  if (keerthi == 10) {
    return 1;
  }


  //SECOND STEP.......

  zump=zump+1;
  zump1=zump1-1;




  keerthi = horizontal(0);
  if (keerthi == 10) {


    return 1;
  }


    keerthi = horizontal(1);
    if (keerthi == 10) {
      return 1;
    }

    keerthi = horizontal(2);
    if (keerthi == 10) {
      return 1;
    }

    keerthi = vertical(0);

    if (keerthi == 10) {
      return 1;
    }

    keerthi = vertical(1);

    if (keerthi == 10) {
      return 1;
    }

    keerthi = vertical(2);

    if (keerthi == 10) {
      return 1;
    }


      keerthi = diagonal1();

      if (keerthi == 10) {
        return 1;
      }


      keerthi = diagonal2();


      if (keerthi == 10) {
        return 1;
      }






   for(var xx=0;xx<3;xx++)
   {
     for(var yy=0;yy<3;yy++)
     {
       if(array[xx][yy]!=0 && array[xx][yy]!=1 )
       {

          fin_arr = [];
          fin_arr.push(xx);
          fin_arr.push(yy);

       }
     }
   }






count0=0;


}



//THIS IS HOW COMPUTER WORKS....................







//DECLARATION OF NEEDED VARIABLES.........

var audio1 = new Audio("tom-1.mp3");
var time = 0;
var count = 0;
var c;
var v;
var count0 = 0;
var count1 = 0;
var casek=0;

var done;
var ii=0;
var jj=0;
var keerthi=100;
var zump = 0;
var zump1 = 1;

var step = 1;
var fin_arr = [];

var array = [];
var first = [-1, -2, -3];
var second = [-4, -5, -6];
var third = [-7, -8, -9];

array.push(first);
array.push(second);
array.push(third);






//DECLARATION OF NEEDED VARIABLES.........


//GIVING THE C,V

function giveme_cv_values(ok) {

  if (ok >= 1 && ok <= 3) {
    c = 0;
    v = ok - 1;
  } else if (ok >= 4 && ok <= 6) {
    c = 1;
    v = ok - 4;
  } else if (ok >= 7 && ok <= 9) {
    c = 2;
    v = ok - 7;
  }




}

//FOR BACKGROUND MUSIC.........


var audio = new Audio("1.mp3");

$(".music").click(teja);

function teja() {
  if (time == 0) {
    time = 1;
    audio.play();
  } else if (time == 1) {
    time = 0;
    audio.pause();

  }


}


//FOR BACKGROUND MUSIC..........

//FOR TOSS AND ALL  AND DISPLAY READY BUTTON.............

setTimeout(function() {
  $(".side").text("please press the toss button");
  $(".toss").css("visibility", "visible");
}, 3000);

$(".toss").click(toss);

var num = Math.random();
num = num * 2;
num = Math.floor(num);

function toss() {
  audio1.play();

  $(".toss").css("visibility", "hidden");
  if (num == 0) {
    $(".side").text("MR.COMPUTER won the toss, he can start the game, Are you ready");
  } else {
    $(".side").text("YOU  won the toss, you can start the game, Are you ready");
  }

  $(".ready").css("visibility", "visible");
}

//FOR TOSS AND ALL  AND DISPLAY READY BUTTON.............

//FOR GETTING READY...........
$(".ready").click(imp);

function imp() {
  audio1.play();
  $(".ready").css("visibility", "hidden");
  $(".side").text("ALL THE BEST");

  $(".side").css("font-size", "5rem");
  tiktac();
  computer();

}

//FOR GETTING READY...........


//FOR ADDING EARS TO THOSE IMAGES.........


function tiktac() {

  $(".f1").click(come);
  $(".f2").click(come);
  $(".f3").click(come);
  $(".f4").click(come);
  $(".f5").click(come);
  $(".f6").click(come);
  $(".f7").click(come);
  $(".f8").click(come);
  $(".f9").click(come);
}


//FOR ADDING EARS TO THOSE IMAGES.........




//HERE THE MAIN LOGIC COMES...................


function come()

 {


  count = count + 1;
  if (num == 0) {




    num = 1;
    if (step == 1) {
      $(".f5").attr("src", "0.png");
      $(".f5").unbind();
      array[1][1] = 0;
    } else if (step == 2) {
      if (array[1][1] == 1) {
        $(".f3").attr("src", "0.png");
        $(".f3").unbind();
        array[0][2] = 0;

      } else {
        $(".f5").attr("src", "0.png");
        $(".f5").unbind();
        array[1][1] = 0;

      }

    } else if (step == 3) {
      if (array[0][0] != 1 && array[2][2]!=0) {
        $(".f9").attr("src", "0.png");
        $(".f9").unbind();
        array[2][2] = 0;
      } else {
        $(".f7").attr("src", "0.png");
        $(".f7").unbind();
        array[2][0] = 0;
      }
    }





     else {
      program();

      done = getnum();


      manipulate = ".f" + done;
      $(manipulate).attr("src", "0.png");
      $(manipulate).unbind();
      array[fin_arr[0]][fin_arr[1]] = 0;
      fin_arr = [];









    }





    step = step + 1;

  }

   else if (num == 1) {

    num = 0;
    step = step + 1;
    var need = $(this).attr("class");
    change = need.slice(1, 2);



    giveme_cv_values(change);
    $(this).attr("src", "1.png");

    $(this).unbind();
    array[c][v] = 1;




  }





  if (count == 9) {
    $(".last").text("Sorry match is draw, click refresh page button to play again");
  }

 computer();

}


//COMPUTER FUNCTION.....

function computer()
 {


if(num==0)
{
  come();
}



}


function getnum() {
  if (fin_arr[0] == 0) {
    return fin_arr[1] + 1;
  } else if (fin_arr[0] == 1) {
    return fin_arr[1] + 4;
  } else if (fin_arr[0] == 2) {
    return fin_arr[1] + 7;
  }
}
