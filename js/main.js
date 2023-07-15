
// Lấy tham chiếu đến các phần tử trên trang
const inpLuongMotNgay = document.getElementById('inpLuongMotNgay');
const inpSoNgayLam = document.getElementById('inpSoNgaylam');
const btnTinhLuong = document.getElementById('btnTinhLuong');
const txtTienLuong = document.getElementById('txtTienPhat');

// Xử lý sự kiện khi người dùng click vào nút "Tính lương"
btnTinhLuong.addEventListener('click', function () {
    // Lấy giá trị lương một ngày và số ngày làm từ người dùng
    const luongMotNgay = parseInt(inpLuongMotNgay.value);
    const soNgayLam = parseInt(inpSoNgayLam.value);

    // Kiểm tra nếu người dùng không nhập đủ thông tin
    if (isNaN(luongMotNgay) || isNaN(soNgayLam)) {
        txtTienLuong.textContent = 'Vui lòng nhập đầy đủ thông tin.';
        return;
    }

    // Tính toán tiền lương
    const tienLuong = luongMotNgay * soNgayLam;

    // Hiển thị kết quả
    txtTienLuong.textContent = 'Tiền lương là: ' + tienLuong.toLocaleString() + ' VND';
});
