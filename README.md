# Atomix Foodlab – landing page

- `index.html`: trang landing (Design canvas "Atomix Foodlab"). Ảnh nằm trong `assets/`.
- `apps-script/Code.gs`: mã Apps Script nhận phiếu đăng ký và ghi vào Google Sheet
  [Đăng ký atomix foodlab](https://docs.google.com/spreadsheets/d/1YVZmF4GybJybpZhUy_sJl_8JhrxBIYVwtSN8WlzK8zc/edit).

## Kết nối form với Google Sheet

1. Mở https://script.google.com → **Dự án mới**, đặt tên "Atomix foodlab – nhận đăng ký".
2. Xóa nội dung mặc định, dán toàn bộ `apps-script/Code.gs`, lưu.
3. **Triển khai** → **Triển khai mới** → loại **Ứng dụng web**:
   - Thực thi dưới quyền: **Tôi**
   - Ai có quyền truy cập: **Bất kỳ ai**
4. Bấm **Triển khai**, cấp quyền khi được hỏi, rồi sao chép **URL ứng dụng web** (dạng `https://script.google.com/macros/s/.../exec`).
5. Dán URL đó vào thuộc tính **sheetEndpoint** ("Link Google Apps Script nhận form") của trang landing.

Khi có URL, mỗi lần khách bấm "Đăng ký khám quán" sẽ thêm một dòng vào Sheet.
Cột: Thời gian, Họ và tên, Số điện thoại, Tên quán, Khu vực, Chặng của quán, Set quan tâm, Điều đau đầu nhất, Nguồn.

Sau khi sửa `Code.gs`, phải **Triển khai → Quản lý triển khai → Sửa → Phiên bản mới** thì thay đổi mới có hiệu lực.

## Lưu ý

`index.html` được xuất từ công cụ Design của Claude, nên cần runtime `support.js` và `dc-runtime.js` của công cụ đó để hiển thị. Chưa có các tệp này trong repo, nên mở trực tiếp trên GitHub Pages hoặc Netlify sẽ chưa chạy đúng.
