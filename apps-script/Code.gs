// Nhận phiếu đăng ký từ landing page Atomix Foodlab và ghi vào Google Sheet "Đăng ký atomix foodlab".
// Dán toàn bộ file này vào dự án Apps Script, rồi triển khai dưới dạng Web app (xem README.md).

const SHEET_ID = '1YVZmF4GybJybpZhUy_sJl_8JhrxBIYVwtSN8WlzK8zc';

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  const row = sheet.getLastRow() + 1;

  // Giữ số 0 đầu của số điện thoại: đặt định dạng văn bản trước khi ghi.
  sheet.getRange(row, 3).setNumberFormat('@');
  sheet.getRange(row, 1, 1, 9).setValues([[
    new Date(),
    data.name || '',
    data.phone || '',
    data.shop || '',
    data.area || '',
    data.stage || '',
    data.package || '',
    data.note || '',
    data.source || ''
  ]]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Mở link Web app trên trình duyệt để kiểm tra script đang chạy.
function doGet() {
  return ContentService
    .createTextOutput('Atomix Foodlab form endpoint đang hoạt động.')
    .setMimeType(ContentService.MimeType.TEXT);
}
