// document.getElementById("letter1").addEventListner("keyup", function(){
//   var grade1 = document.getElementsByName("grade_1")[0].value;
//   var outOf1 = document.getElementsByName("outOf_1")[0].value;
//   var percent1 = grade1 / outOf1 * 100;
//   if((percent1 >= 0) && (percent1 <= 54)){
//     document.getElementById("letter1").innerHTML = "F";
//   }
// });
// document.getElementById("letter1").addEventListner("keyup", function(){
//   var grade1 = document.getElementsByName("grade_1")[0].value;
//   var outOf1 = document.getElementsByName("outOf_1")[0].value;
//   var percent1 = grade1 / outOf1 * 100;
//   document.getElementById("percentage_1").innerHTML = percent1.toFixed(2);
// });


function clearr(){
 document.getElementsByName("grade_1")[0].value = "";
 document.getElementsByName("grade_2")[0].value = "";
 document.getElementsByName("grade_3")[0].value = "";
 document.getElementsByName("grade_4")[0].value = "";
 document.getElementsByName("outOf_1")[0].value = "";
 document.getElementsByName("outOf_2")[0].value = "";
 document.getElementsByName("outOf_3")[0].value = "";
 document.getElementsByName("outOf_4")[0].value = "";
 document.getElementsByName("weight_1")[0].value = "";
 document.getElementsByName("weight_2")[0].value = "";
 document.getElementsByName("weight_3")[0].value = "";
 document.getElementsByName("weight_4")[0].value = "";
 document.getElementById("output").innerHTML = "";
 document.getElementById("percentage_1").innerHTML = "";
 document.getElementById("percentage_2").innerHTML = "";
 document.getElementById("percentage_3").innerHTML = "";
 document.getElementById("percentage_4").innerHTML = "";
}

function percentage1(){
  var grade1 = document.getElementsByName("grade_1")[0].value;
  var outOf1 = document.getElementsByName("outOf_1")[0].value;
  var percent1 = grade1 / outOf1 * 100;
  document.getElementById("percentage_1").innerHTML = percent1.toFixed(2);
}

function percentage2(){
  var outOf2 = document.getElementsByName("outOf_2")[0].value;
  var grade2 = (document.getElementsByName("grade_2")[0].value);
  var percent2 = grade2 / outOf2 * 100;
  document.getElementById("percentage_2").innerHTML = percent2.toFixed(2);
}

function percentage3(){
  var outOf3 = document.getElementsByName("outOf_3")[0].value;
  var grade3 = (document.getElementsByName("grade_3")[0].value);
  var percent3 = grade3 / outOf3 * 100;
  document.getElementById("percentage_3").innerHTML = percent3.toFixed(2);
}

function percentage4(){
  var outOf4 = document.getElementsByName("outOf_4")[0].value;
  var grade4 = (document.getElementsByName("grade_4")[0].value);
  var percent4 = grade4 / outOf4 * 100;
  document.getElementById("percentage_4").innerHTML = percent4.toFixed(2);
}


function mean() {
  var outOf1 = document.getElementsByName("outOf_1")[0].value;
  var outOf2 = document.getElementsByName("outOf_2")[0].value;
  var outOf3 = document.getElementsByName("outOf_3")[0].value;
  var outOf4 = document.getElementsByName("outOf_4")[0].value;
  if(outOf1 != 0){
    var grade1 = (document.getElementsByName("grade_1")[0].value) / outOf1;
  }
  else{
    var grade1 = 0;
  }
  if(outOf2 != 0){
    var grade2 = (document.getElementsByName("grade_2")[0].value) / outOf2;
  }
  else{
    var grade2 = 0;
  }
  if(outOf3 != 0){
    var grade3 = (document.getElementsByName("grade_3")[0].value) / outOf3;
  }
  else{
    var grade3 = 0;
  }
  if(outOf4 != 0){
    var grade4 = (document.getElementsByName("grade_4")[0].value) / outOf4;
  }
  else{
    var grade4 = 0;
  }
  var count = 0;
  var array = [grade1, grade2, grade3, grade4];
  for(var i = 0; i < 4; i++){
    if(array[i] != 0){
      count++;
    }
  }
  var meanValue = (grade1 + grade2 + grade3 + grade4)/count;
  document.getElementById("output").innerHTML = meanValue;
}

function weighted() {
  var outOf1 = document.getElementsByName("outOf_1")[0].value;
  var outOf2 = document.getElementsByName("outOf_2")[0].value;
  var outOf3 = document.getElementsByName("outOf_3")[0].value;
  var outOf4 = document.getElementsByName("outOf_4")[0].value;
  var weight1 = document.getElementsByName("weight_1")[0].value;
  var weight2 = document.getElementsByName("weight_2")[0].value;
  var weight3 = document.getElementsByName("weight_3")[0].value;
  var weight4 = document.getElementsByName("weight_4")[0].value;
  if(outOf1 != 0){
    var grade1 = (document.getElementsByName("grade_1")[0].value) / outOf1;
  }
  else{
    var grade1 = 0;
  }
  if(outOf2 != 0){
    var grade2 = (document.getElementsByName("grade_2")[0].value) / outOf2;
  }
  else{
    var grade2 = 0;
  }
  if(outOf3 != 0){
    var grade3 = (document.getElementsByName("grade_3")[0].value) / outOf3;
  }
  else{
    var grade3 = 0;
  }
  if(outOf4 != 0){
    var grade4 = (document.getElementsByName("grade_4")[0].value) / outOf4;
  }
  else{
    var grade4 = 0;
  }
  var count = 0;
  var array = [grade1, grade2, grade3, grade4];
  for(var i = 0; i < 4; i++){
    if(array[i] != 0){
      count++;
    }
  }
  var weightedValue = (grade1*weight1 + grade2*weight2 + grade3*weight3 + grade4*weight4)/count;
  document.getElementById("output").innerHTML = weightedValue;
}
