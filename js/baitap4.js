const inpNhapChieuDai = document.getElementById('inpNhapChieuDai');
const inpNhapChieuRong = document.getElementById('inpNhapChieuRong');
const btnTinh = document.getElementById('btnTinh');
const txtChuViVaDienTich = document.getElementById('txtChuViVaDienTich');

// Xử lý sự kiện khi người dùng click vào nút "Tính"
btnTinh.addEventListener('click', function() {
    // Lấy giá trị chiều dài và chiều rộng từ người dùng
    const chieuDai = parseFloat(inpNhapChieuDai.value);
    const chieuRong = parseFloat(inpNhapChieuRong.value);

    // Kiểm tra nếu người dùng không nhập đủ thông tin
    if (isNaN(chieuDai) || isNaN(chieuRong)) {
        txtChuViVaDienTich.textContent = 'Vui lòng nhập đầy đủ thông tin.';
        return;
    }

    // Tính toán diện tích và chu vi
    const dienTich = chieuDai * chieuRong;
    const chuVi = 2 * (chieuDai + chieuRong);

    // Hiển thị kết quả
    txtChuViVaDienTich.textContent = 'Diện tích: ' + dienTich + ', Chu vi: ' + chuVi;
});