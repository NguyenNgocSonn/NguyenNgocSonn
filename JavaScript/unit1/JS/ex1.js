var a = prompt("Nhập số bất kỳ: ",'')
for (var i = 1; i <= a; i++) {
	for (var j = 1; j <= i; j++) {
		document.write("*")
	}
	document.write("<br/>")
}
document.write("<br/>")

for (var i = 1; i <=a; i++) {
	for (var j = 1; j <=a; j++) {
		document.write("*")
	}
	document.write("<br/>")
}
document.write("<br/>")

for(i=0;i<a;i++)
   {
       for(j=0;j<a;j++)
      {
          if(i==0||i==a-1||j==0||j==a-1){
             document.write("*")
          }
         else{
             document.write(" ")
         }
      }
      document.write("<br/>")
   }
document.write("<br/>")

for(var i=1;i<=a;i++){
	for(var j=1;j<=a-i+1;j++){
		document.write("*")
	}
	document.write("<br/>")
}
document.write("<br/>")





