var first=prompt("Name of player 0");
var second=prompt("name of player 1");

var audio1=new Audio("tom-1.mp3");

var count=0;
var ever;

function final(output)
{

  for(var i=1;i<10;i++)
  {
    if(output!=0 || output!=1)
    {
      ever=".f"+i;
      $(ever).unbind();
    }



  }

  if(output==0)
  {
    $(".last").text( first + " is the winner press refresh button if you want to start again");
  }

else if(output==1)
{
  $(".last").text( second + " is the winner press refresh button if you want to start again");
}




}


var change;

var arr=[-1,-2,-3,-4,-5,-6,-7,-8,-9];


function check(yes,please)
{
change=parseInt(yes);
arr[change-1]=please;


if (arr[0]==arr[1] && arr[1]==arr[2])
{


final(arr[0]);
}

else if(arr[0]==arr[3]&& arr[3]==arr[6])
{
final(arr[0]);
}

else if(arr[0]==arr[4] && arr[4]==arr[8])
{
final(arr[0]);
}

else if (arr[3]==arr[4] && arr[5]==arr[4])
{
final(arr[3]);
}

else if(arr[6]==arr[7] && arr[7]==arr[8])
{
final(arr[6]);
}

else if(arr[6]==arr[4] && arr[4]==arr[2])
{
final(arr[6]);
}

else if (arr[1]==arr[4] && arr[4]==arr[7])
{
final(arr[1]);
}

else if(arr[2]==arr[5] && arr[5]==arr[8])
{
final(arr[2]);
}



}


var time=0;
var audio =new Audio("1.mp3");

$(".music").click(teja);
function teja()
{
  if(time==0)
  {
    time=1;
    audio.play();
  }

  else if(time==1)
  {
    time=0;
    audio.pause();

  }


}

setTimeout(function(){
  $(".side").text(first+" ,please press the toss button");
  $(".toss").css("visibility","visible");
},3000);

$(".toss").click(toss);

var num=Math.random();
num=num*2;
num=Math.floor(num);

function toss()
{
  audio1.play();

  $(".toss").css("visibility","hidden");
  $(".side").text("Player "+num+" won the toss, he can start the game, Are you ready");
  $(".ready").css("visibility","visible");
}

$(".ready").click(imp);

function imp()
{
   audio1.play();
   $(".ready").css("visibility","hidden");

   $(".side").text("player "+num);
   $(".side").css("font-size","5rem");
   tiktac();

}

function come()
{
  count=count+1;
  if (num==0)
  {
    var needed=$(this).attr("class");
    check(needed.slice(1,2),0);
    num=1;
    $(this).attr("src","0.png");
    $(".side").text("Player "+num);
    $(this).unbind();



  }
else if (num==1)
  {
    var need=$(this).attr("class");
    check(need.slice(1,2),1);
    num=0;
    $(this).attr("src","1.png");
    $(".side").text("Player "+num);
    $(this).unbind();





  }
 if(count==9)
 {
   $(".last").text("Sorry match is draw, click refresh page button to play again");
 }
}





function tiktac()
{

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
