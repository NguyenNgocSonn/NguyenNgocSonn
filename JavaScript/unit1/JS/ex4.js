var dem=0;
var n = parseInt(prompt('Nhập sô n: '));
var m = parseInt(prompt('Nhập số m: '));
if (m>n) {
	var k = parseInt(prompt('Nhập số k: '));
	document.write('Các số chia hết cho '+k + ' là:');
	for (var i = n; i <= m; i++){
		if (i % k == 0){
			dem++;
			document.write(i + ' ; ');
		}
	}
}
document.write('Có '+dem+' số chia hết cho '+ k);