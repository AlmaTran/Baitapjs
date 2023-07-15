const inpNhapSoTienUsd = document.getElementById('inpNhapSoTienUsd');
const btnQuyDoiTien = document.getElementById('btnQuyDoiTien');
const txtQuyDoiTien = document.getElementById('txtQuyDoiTien');

// Xử lý sự kiện khi người dùng click vào nút "Quy đổi tiền"
btnQuyDoiTien.addEventListener('click', function() {
    // Lấy giá trị số tiền USD từ người dùng
    const soTienUsd = parseFloat(inpNhapSoTienUsd.value);

    // Kiểm tra nếu người dùng không nhập đủ thông tin
    if (isNaN(soTienUsd)) {
        txtQuyDoiTien.textContent = 'Vui lòng nhập đầy đủ thông tin.';
        return;
    }

    // Tính toán số tiền sau quy đổi
    const tyGiaVnd = 23500;
    const soTienVnd = soTienUsd * tyGiaVnd;

    // Hiển thị kết quả
    txtQuyDoiTien.textContent = 'Số tiền sau quy đổi là: ' + soTienVnd.toLocaleString() + ' VND';
});