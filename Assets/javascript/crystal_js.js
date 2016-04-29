//solution if you put the whole thing in an object:

window.onload = function(){
  var total = 0;

  function ranNum(min, max){
    var randomNumber = 0;
    randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);
    return randomNumber;
  }
  var randomNumber = ranNum(19, 120);
  function showNum(ranNum){
    var result; 
      document.getElementById("show_number").innerHTML = ranNum;
  }
  
  
  function addNumber(crystal){
    total = total + crystal;
    return total;
  }
  function showSum(crys){
    var sum = addNumber(crys);
    document.getElementById("total").innerHTML = sum;
    return sum;
  }
  function test_winner(sum){
    if(sum == randomNumber){
      alert("your a winner");
    }else if(sum > randomNumber){
      alert("your a loser");
    }

  }

  showNum(randomNumber);
  var crystal_1 = ranNum(1, 12);
  var crystal_2 = ranNum(1, 12);
  var crystal_3 = ranNum(1, 12);
  var crystal_4 = ranNum(1, 12);
  $('#img1').on('click', function(){
    test_winner(showSum(crystal_1));
  });
  $('#img2').on('click', function(){
    test_winner(showSum(crystal_2));
  });
  $('#img3').on('click', function(){
    test_winner(showSum(crystal_3));
  });
  $('#img4').on('click', function(){
    test_winner(showSum(crystal_4));
  });
  //test for winner


};

