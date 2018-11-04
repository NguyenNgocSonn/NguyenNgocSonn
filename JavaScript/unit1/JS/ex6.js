function tinh_tong(n){
	var tong = 0;
	var i = 0;
	do
	{
		tong += i;
		i++;
	}
	while (i <= n);
	return tong;
}
var n = parseInt(prompt("Nhập số n: "));
document.write("Tổng từ 1 đến " + n + " là: " + tinh_tong(n));