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
 document.getElementById("letter1").innerHTML = "";
 document.getElementById("letter2").innerHTML = "";
 document.getElementById("letter3").innerHTML = "";
 document.getElementById("letter4").innerHTML = "";
}

function percentage1(){
  var grade1 = document.getElementsByName("grade_1")[0].value;
  var outOf1 = document.getElementsByName("outOf_1")[0].value;
  var percent1 = grade1 / outOf1 * 100;
  document.getElementById("percentage_1").innerHTML = percent1.toFixed(2);
  if((percent1 >= 0) && (percent1 <= 54)){
      document.getElementById("letter1").innerHTML = "F";
    }
  else if ((percent1 >= 55) && (percent1 <= 64)){
      document.getElementById("letter1").innerHTML = "D";
    }
  else if ((percent1 >= 65) && (percent1 <= 74)){
      document.getElementById("letter1").innerHTML = "C-/C/C+";
    }
  else if ((percent1 >= 75) && (percent1 <= 84)){
      document.getElementById("letter1").innerHTML = "B-/B/B+";
    }
  else if ((percent1 >= 85) && (percent1 <= 100)){
      document.getElementById("letter1").innerHTML = "A-/A/A+";
    }
  else {
    document.getElementById("letter1").innerHTML = "Invalid grade";
  }
}

function percentage2(){
  var outOf2 = document.getElementsByName("outOf_2")[0].value;
  var grade2 = (document.getElementsByName("grade_2")[0].value);
  var percent2 = grade2 / outOf2 * 100;
  document.getElementById("percentage_2").innerHTML = percent2.toFixed(2);
  if((percent2 >= 0) && (percent2 <= 54)){
      document.getElementById("letter2").innerHTML = "F";
    }
  else if ((percent2 >= 55) && (percent2 <= 64)){
      document.getElementById("letter2").innerHTML = "D";
    }
  else if ((percent2 >= 65) && (percent2 <= 74)){
      document.getElementById("letter2").innerHTML = "C-/C/C+";
    }
  else if ((percent2 >= 75) && (percent2 <= 84)){
      document.getElementById("letter2").innerHTML = "B-/B/B+";
    }
  else if ((percent2 >= 85) && (percent2 <= 100)){
      document.getElementById("letter2").innerHTML = "A-/A/A+";
    }
  else {
    document.getElementById("letter2").innerHTML = "Invalid grade";
  }}

function percentage3(){
  var outOf3 = document.getElementsByName("outOf_3")[0].value;
  var grade3 = (document.getElementsByName("grade_3")[0].value);
  var percent3 = grade3 / outOf3 * 100;
  document.getElementById("percentage_3").innerHTML = percent3.toFixed(2);
  if((percent3 >= 0) && (percent3 <= 54)){
      document.getElementById("letter3").innerHTML = "F";
    }
  else if ((percent3 >= 55) && (percent3 <= 64)){
      document.getElementById("letter3").innerHTML = "D";
    }
  else if ((percent3 >= 65) && (percent3 <= 74)){
      document.getElementById("letter3").innerHTML = "C-/C/C+";
    }
  else if ((percent3 >= 75) && (percent3 <= 84)){
      document.getElementById("letter3").innerHTML = "B-/B/B+";
    }
  else if ((percent3 >= 85) && (percent3 <= 100)){
      document.getElementById("letter3").innerHTML = "A-/A/A+";
    }
  else {
    document.getElementById("letter3").innerHTML = "Invalid grade";
  }
}

function percentage4(){
  var outOf4 = document.getElementsByName("outOf_4")[0].value;
  var grade4 = (document.getElementsByName("grade_4")[0].value);
  var percent4 = grade4 / outOf4 * 100;
  document.getElementById("percentage_4").innerHTML = percent4.toFixed(2);
  if((percent4 >= 0) && (percent4 <= 54)){
      document.getElementById("letter4").innerHTML = "F";
    }
  else if ((percent4 >= 55) && (percent4 <= 64)){
      document.getElementById("letter4").innerHTML = "D";
    }
  else if ((percent4 >= 65) && (percent4 <= 74)){
      document.getElementById("letter4").innerHTML = "C-/C/C+";
    }
  else if ((percent4 >= 75) && (percent4 <= 84)){
      document.getElementById("letter4").innerHTML = "B-/B/B+";
    }
  else if ((percent4 >= 85) && (percent4 <= 100)){
      document.getElementById("letter4").innerHTML = "A-/A/A+";
    }
  else {
    document.getElementById("letter4").innerHTML = "Invalid grade";
  }
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
  var meanValue = ((grade1 + grade2 + grade3 + grade4)/count)*100;
  var output = meanValue.toFixed(1);
  document.getElementById("output").innerHTML = output + "/100";
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
  if(weight1 == ""){
    weight1 = 0;
  }
  if(weight2 == ""){
    weight2 = 0;
  }
  if(weight3 == ""){
    weight3 = 0;
  }
  if(weight4 == ""){
    weight4 = 0;
  }
  weightedValue = ((grade1*weight1 + grade2*weight2 + grade3*weight3 + grade4*weight4)/(parseInt(weight1, 10) + parseInt(weight2, 10) + parseInt(weight3, 10) + parseInt(weight4, 10)))*100;
  var output = weightedValue.toFixed(1);
  document.getElementById("output").innerHTML = output + "/100";
}
