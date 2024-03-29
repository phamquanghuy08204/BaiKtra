import React, { useState } from 'react';
import './App.css';
import img from './logo.png'

function App() {
  const [formData, setFormData] = useState({
    nganhDangKy: [], // Sửa đổi dạng dữ liệu của nganhDangKy thành một mảng rỗng
    hoTen: '',
    gioiTinh: '',
    ngaySinh: '',
    noiSinh: '',
    danToc: '',
    tonGiao: '',
    hoKhau: '',
    noiTotNghiep: '',
    namTotNghiep: '',
    cmnd: '',
    ngayCap: '',
    noiCap: '',
    diaChiNhanh: '',
    dienThoai: '',
    dienThoaiPhuHuynh: '',
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const newNganhDangKy = [...formData.nganhDangKy];

    if (checked) {
      newNganhDangKy.push(value); // Sử dụng value của checkbox thay vì name
    } else {
      const index = newNganhDangKy.indexOf(value);
      if (index !== -1) {
        newNganhDangKy.splice(index, 1);
      }
    }
    setFormData({
      ...formData,
      [name]: value,
      nganhDangKy: newNganhDangKy,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="App">
      <header>
        <table>
          <tr>
            <h2 style={{ color: "red", textAlign: "center" }}>Chọn khác biệt chọn thành công</h2>
          </tr>
        </table>
        <table>
          <tr>
            <th><img src={img} alt="logo" /></th>
            <th style={{ color: "red" }}>Thành viên của tổ chức giáo dục EQuest</th>
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <h1 style={{ color: "red", textAlign: "left" }}>HỒ SƠ XÉT TUYỂN CAO ĐẲNG TRỰC TUYẾN</h1>
              <hr></hr>
              <h3 style={{ color: "red", textAlign: "left", fontSize: "12px" }}> <div className='square' />Các hạng mục hồ sơ bên dưới vui lòng điền đầy đủ thông tin</h3>
            </td>
          </tr>
        </table>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <section className="thong-tin-ca-nhan">
            <h2>THÔNG TIN CÁ NHÂN</h2>
            {/* Các input fields ở đây */}
          </section>
          <section>
            <div className="form-dang-ky">
              <h1 style={{ backgroundColor: "red", color: "white" }}>NGÀNH ĐĂNG KÝ XÉT TUYỂN</h1>
              <form onSubmit={handleSubmit}>
                {nganhHocList.map((nganh) => (
                  <div className="form-group" key={nganh.maNganh}>
                    <label style={{ color: "red" }} htmlFor={nganh.maNganh}>{nganh.tenNganh}</label>
                    <input
                      type="checkbox"
                      name="nganhDangKy" // Đặt tên của checkbox là nganhDangKy
                      value={nganh.maNganh} // Sử dụng maNganh làm giá trị của checkbox
                      checked={formData.nganhDangKy.includes(nganh.maNganh)} // Kiểm tra checkbox đã được chọn hay không
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </form>
            </div>
            <p style={{ color: 'red', textAlign: 'center' }}><i style={{ fontSize: "12px" }}>Tôi cam đoan những lời khai trong phiếu DKXT này là đúng sự thật, nếu sai tôi chấp nhận chịu xử lý theo Quy chế tuyển sinh.</i></p>
          </section>
          <div style={{ textAlign: "center" }}><button type="submit"><b>ĐĂNG KÝ</b></button></div>
        </form>
      </main>
    </div>
  );
}

export default App;

const nganhHocList = [
  {
    maNganh: "digital-marketing",
    tenNganh: "Digital Marketing",
  },
  {
    maNganh: "thiet-ke-do-hoa",
    tenNganh: "Thiết kế đồ họa",
  },
  {
    maNganh: "quan-tri-khach-san",
  tenNganh: "Quản trị khách sạn",
},
{
  maNganh: "quan-tri-ban-hang",
tenNganh: "Quản trị bán hàng",
},
{
  maNganh: "phien-dich",
tenNganh: "Phiên dịch Tiếng Anh thương mại",
},
{
  maNganh: "quan-tri-doanh-nghiep",
  tenNganh: "Quản trị doanh nghiệp",
},
{
  maNganh: "UDPM",
tenNganh: "CNTT - Ứng dụng phần mềm ",
},
{
  maNganh: "quan-ly-cong-nghiep",
tenNganh: "Quản lý công nghiệp",
},
{
  maNganh: "Han",
tenNganh: "Tiếng Hàn",
},
{
  maNganh: "Nhat",
tenNganh: "Tiếng Nhật",
},
{
  maNganh: "CSSD",
tenNganh: "Chăm sóc sắc đẹp",
},
{
  maNganh: "Logistics",
tenNganh: "Logistics",
},
{
  maNganh: "tai-chinh",
tenNganh: "Tài chính đầu tư",
},
{
  maNganh: "Trung",
tenNganh: "Tiếng Trung",
},
{
  maNganh: "CNOT",
tenNganh: "Công nghệ ô tô",
},
];
