var colorName = ["White","Red","Green","Orange"];

var input1 = prompt("Enter color add to the beginning");
colorName.unshift(input1);
document.write(colorName + "<br>");

var input2 = prompt("Enter color add to the end");
colorName.push(input2);
document.write(colorName + "<br>")

var input3 = prompt("Enter two more color add to the beginning");
colorName.unshift(input3, input3);
document.write(colorName + "<br>")

var input4 = prompt("Enter delete the first color");
colorName.shift(input4);
document.write(colorName + "<br>")

var input5 = prompt("Enter delete the last color");
colorName.pop();
document.write(colorName + "<br>")

var input6 = prompt("Enter Which index color add & color name");
colorName.splice(3, 0, input6);
document.write(colorName + "<br>")

var input7 = prompt("Enter Which index color delete & how many colors want to delete");
colorName.splice(3, 3);
document.write(colorName + "<br>")






