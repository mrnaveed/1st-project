var stu = [];
stu[0] = "Michael";
stu[1] = "John";
stu[2] = "Tony";

var score = [];
score[0] = 320;
score[1] = 230;
score[2] = 480;

var percent = [];
percent[0] = score[0]*100/500;
percent[1] = score[1]*100/500;
percent[2] = score[2]*100/500;

document.write("Score of " + stu[0] + " is " +score[0] +"."+ "&nbsp;" +"Percentage:" +percent[0]+"%"+"<br>");
document.write("Score of" + stu[1] +"is" + +score[1] +"."+ "&nbsp;"+ "Percentage:" +percent[1]+"%"+"<br>");
document.write("Score of" + stu[2]+"is" +score[2] +"."+ "&nbsp;"+ "Percentage:" +percent[2]+"%"+"<br>");