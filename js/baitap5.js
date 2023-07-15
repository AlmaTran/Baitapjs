// Lấy tham chiếu đến các phần tử trên trang
const inpNhapSoCoHaiChuSo = document.getElementById('inpNhapSoCoHaichuSo');
const btnTinhTong = document.getElementById('btnTinhTong');
const txtTinhTong = document.getElementById('txtTinhTong');

// Xử lý sự kiện khi người dùng click vào nút "Tính Tổng"
btnTinhTong.addEventListener('click', function() {
    // Lấy giá trị số có hai chữ số từ người dùng
    const so = parseInt(inpNhapSoCoHaiChuSo.value);

    // Kiểm tra nếu người dùng không nhập đủ thông tin
    if (isNaN(so)) {
        txtTinhTong.textContent = 'Vui lòng nhập đầy đủ thông tin.';
        return;
    }

    // Kiểm tra nếu số không có hai chữ số
    if (so < 10 || so > 99) {
        txtTinhTong.textContent = 'Vui lòng nhập một số có hai chữ số.';
        return;
    }

    // Tính tổng hai chữ số
    const chuc = Math.floor(so / 10);
    const donVi = so % 10;
    const tong = chuc + donVi;

    // Hiển thị kết quả
    txtTinhTong.textContent = 'Tổng hai chữ số là: ' + tong;
});