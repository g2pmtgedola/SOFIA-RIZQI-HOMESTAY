// ==========================================================================
// FAIL TETAPAN UTAMA HOMESTAY (CONFIG.JS)
// ==========================================================================
// Jika anda menjual sistem ini kepada homestay lain, anda HANYA perlu
// menukar maklumat di dalam fail ini sahaja!
// ==========================================================================

const HOMESTAY_CONFIG = {
  // 1. Identiti & Nama Homestay
  id: "sofia",                                            // ID unik sistem (huruf kecil tanpa ruang)
  name: "SofiaRizqi Homestay",                            // Nama rasmi homestay
  tagline: "Selesa, Bersih & Mesra",                      // Slogan / Moto
  address: "No. 14, Jalan Desa Seroja 3, Taman Desa Seroja, 09100 Baling, Kedah.",

  // 2. Maklumat Pengurusan / Admin
  adminName: "Pengurusan SofiaRizqi",
  adminPhone: "0192298176",                                // No WhatsApp penerima tempahan

  // 3. Maklumat Akaun Bank & Pembayaran
  bankName: "Bank Islam Malaysia Berhad (BIMB)",
  accountNumber: "02132010000146",
  accountHolder: "RAHMAN RAMLI VENTURES",
  qrCodeUrl: "assets/qr_bankislam.png",

  // 4. Kadar Harga Lalai
  defaultRatePerNight: 350,                                // Kadar sewa satu malam (RM)
  defaultSecurityDeposit: 100,                             // Deposit sekuriti (RM)

  // 5. Saluran Cloud Sync (PENTING: Mesti UNIK untuk setiap homestay agar data tidak bercampur!)
  syncChannel: "sofia_homestay_sync_v1",                  // Saluran sync kalendar & tempahan
  receiptsChannel: "sofia_homestay_receipts_v1"           // Saluran muat naik fail resit
};

// Pasang ke window supaya boleh dibaca oleh semua skrip
if (typeof window !== 'undefined') {
  window.HOMESTAY_CONFIG = HOMESTAY_CONFIG;
}
