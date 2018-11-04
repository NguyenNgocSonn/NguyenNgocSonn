function tinh_tong()
{
    var tong = 0;
    var i = 0;
    do
    {
        if (i % 2 == 0){
            tong += i;
        }
        i++;
    }
    while (i <= 20);
 
    return tong;
}
document.write("Tổng 10 số chẵn đầu tiên là: " + tinh_tong());



