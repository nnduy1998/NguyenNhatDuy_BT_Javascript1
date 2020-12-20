/**
 * Ve xem phim
 */

 //Đầu vào

 var tenPhim = "Thor";

 var giaVeNguoiLon = 45000;
 var giaVeEmBe = 40000;
 
 var soLuongVeNguoiLon = 1000;
 var soLuongVeEmBe = 500;
 
 var phanTramTuThien = 0.1;

 // Xử lý
 var doanhThu = (giaVeNguoiLon * soLuongVeNguoiLon) + (giaVeEmBe*soLuongVeEmBe);
 console.log("Doanh Thu = " + doanhThu);


 //Đầu ra
 var tienTuThien = doanhThu * 10/100;
 console.log("Tiền từ thiện = " + tienTuThien);

 var tienLai = doanhThu - tienTuThien;
 console.log("Tiền lãi = " + tienLai);


 /**
  * Bài 1 : Tính tiền lương nhân viên
  */
 function tinhTienLuong(event){
    event.preventDefault();
    var soNgay = document.getElementById("soNgay").value;
    var tienLuong = document.getElementById("spanKetQuaTienLuong").innerHTML = soNgay * 100000
    document.getElementById("hienThiKQTienLuong").style.display = "block";     
 }
 /**
  * Bài 2 : Tính giá trị trung bình
  */
function tinhGiaTriTB(event){
    event.preventDefault();
    var so1 = document.getElementById("soThu1").value;
    var so2 = document.getElementById("soThu2").value;
    var so3 = document.getElementById("soThu3").value;
    var so4 = document.getElementById("soThu4").value;
    var so5 = document.getElementById("soThu5").value;
    so1 = parseInt(so1);
    so2 = parseInt(so2);
    so3 = parseInt(so3);
    so4 = parseInt(so4);
    so5 = parseInt(so5);
    var giaTriTB = (so1 + so2 + so3 + so4 + so5) / 5 ;
    document.getElementById("spanGiaTriTB").innerHTML = giaTriTB;
    document.getElementById("giaTriTB").style.display = "block";
    console.log(so1);
    console.log(so2);
    console.log(so3);
    console.log(so4);
    console.log(giaTriTB);
}

/**
 * Bài 3 - Quy Doi Tien
 */
function doiTien(event){
  event.preventDefault();
  const TYGIA = 23500;
  var kqDoiTien = document.getElementById("soTien").value * TYGIA;
  document.getElementById("spanDoiTien").innerHTML = kqDoiTien;
  document.getElementById("kqDoiTien").style.display = "block";
}

/**
 * Bài 4 - Tính diện tích, chu vi hình chữ nhật
 */
// Tính chu vi
function tinhCV(event){
  event.preventDefault();
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;
  chieuDai = parseInt(chieuDai);
  chieuRong = parseInt(chieuRong);
  var chuVi = ( chieuDai + chieuRong ) * 2;

  document.getElementById("spanCV").innerHTML = chuVi;
  document.getElementById("kqChuVi").style.display = "block";
}
//Tinh diện tích
function tinhDienTich(event){
  event.preventDefault();
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;
  chieuDai = parseInt(chieuDai);
  chieuRong = parseInt(chieuRong);
  var dienTich = chieuDai * chieuRong;

  document.getElementById("spanDT").innerHTML = dienTich;
  document.getElementById("kqDienTich").style.display = "block";
}


/**
 * Bài 5 - Tính tổng 2 ký số
 */

function tongKySo(event){
  event.preventDefault();
  var kySo = document.getElementById("kySo").value;
  kySo = parseInt(kySo);
  console.log(kySo);
  var so_hang_dv = kySo % 10;
  var so_hang_chuc = Math.floor(kySo / 10) ;
  console.log("So DV :" + so_hang_dv);
  console.log("So hang chuc : " + so_hang_chuc);
  var tongKS = so_hang_dv + so_hang_chuc;
  console.log(("Tong ks : ") + tongKS);
  document.getElementById("spanKQ").innerHTML = tongKS;
  document.getElementById("kqTinhTongKySo").style.display = "block";

}