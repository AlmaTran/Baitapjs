 // Lấy tham chiếu đến các phần tử trên trang
 const inpSoThu1 = document.getElementById('inpNhapSoThu1');
 const inpSoThu2 = document.getElementById('inpNhapSoThu2');
 const inpSoThu3 = document.getElementById('inpNhapSoThu3');
 const inpSoThu4 = document.getElementById('inpNhapSoThu4');
 const inpSoThu5 = document.getElementById('inpNhapSoThu5');
 const btnTinhTrungBinh = document.getElementById('btnTinhTrungBinh');
 const txtTinhTrungBinh = document.getElementById('txtTinhTrungBinh');

 // Xử lý sự kiện khi người dùng click vào nút "Tính trung bình"
 btnTinhTrungBinh.addEventListener('click', function() {
     // Lấy giá trị của 5 số từ người dùng
     const soThu1 = parseFloat(inpSoThu1.value);
     const soThu2 = parseFloat(inpSoThu2.value);
     const soThu3 = parseFloat(inpSoThu3.value);
     const soThu4 = parseFloat(inpSoThu4.value);
     const soThu5 = parseFloat(inpSoThu5.value);

     // Tính giá trị trung bình
     const trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;

     // Hiển thị kết quả
     txtTinhTrungBinh.textContent = 'Giá trị trung bình là: ' + trungBinh.toFixed(2);
 });