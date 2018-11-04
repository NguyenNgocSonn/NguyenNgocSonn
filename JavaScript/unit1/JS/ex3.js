function tinh_tong(n){
	var tong = 0;
	var i = 1;
	do
	{
		tong += 1/i;
		i++;
	}
	while (i <= n);
	return tong;
}
var n = parseInt(prompt("Nhập số n: "));
document.write("Tổng S của biểu thức với n=" +n+" là: " + tinh_tong(n));