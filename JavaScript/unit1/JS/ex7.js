var dem=0;
for (var i = 0; i <= 100; i++){
			if (i % 3 == 0||i % 7 == 0){
				dem++;
				document.write(i + ' - ');
			}
		}
document.write('Có '+dem+' số chia hết cho 3 hoặc 7');