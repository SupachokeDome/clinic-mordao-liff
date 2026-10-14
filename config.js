// Copy to config.js next to index.html in the public LIFF repo and fill in the values.
// None of these are secrets: the page is public and LINE shows the LIFF ID anyway.
// Until they are filled in, the page says "ยังไม่ได้ตั้งค่าหน้าคิว (config.js)".
window.CLINIC_CONFIG = {
  LIFF_ID: 'PASTE_LIFF_ID',        // LINE Developers > LINE Login channel > LIFF, e.g. 2000000000-AbCdEfGh
  GAS_URL: 'PASTE_WEB_APP_URL',    // Apps Script web app URL, https://script.google.com/macros/s/.../exec
  OA_ID: '@PASTE_OA_BASIC_ID',     // LINE OA basic ID, with the @
};
