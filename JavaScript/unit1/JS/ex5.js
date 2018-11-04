function tinh_tong(n){
    var tong = 0;
    var index = 1;
    var gt=1;
    ;
    do
    {
    	for (i=1; i<=index; i++) {
    	gt*=i;
    	}
        tong += index / gt;
        index++;
    }
    while (index <= n);
    return tong;
}
var n = parseInt(prompt("Nhập số n: "));
document.write("Tổng S của biểu thức với n=" +n+" là: "  + tinh_tong(n));