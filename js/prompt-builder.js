// ==========================================
// PROMPT BUILDER
// Invoice AI Designer V1
// ==========================================

function collectEquipmentItems() {

    const rows = document.querySelectorAll(
        "#itemTableBody tr"
    );

    let items = [];

    rows.forEach((row, index) => {

        const name =
            row.querySelector(".item-name")
            ?.value || "";

        const qty =
            row.querySelector(".item-qty")
            ?.value || 0;

        const price =
            row.querySelector(".item-price")
            ?.value || 0;

        const duration =
            row.querySelector(".item-duration")
            ?.value || 1;

        const subtotal =
            row.querySelector(".item-subtotal")
            ?.value || 0;

        if (name) {
            items.push(
                `${index + 1}. ${name} | Qty: ${qty} | Harga/Hari: Rp ${Number(price).toLocaleString("id-ID")} | Durasi: ${duration} hari | Subtotal: Rp ${subtotal}`
            );
        }

    });

    return items.length > 0
        ? items.join("\n")
        : "(Belum ada item)";

}

// ==========================================
// BUILD PROMPT
// ==========================================

function buildPrompt(){
    // ... (ambil variabel seperti biasa) ...

    return `
CREATE A PROFESSIONAL MEDICAL EQUIPMENT RENTAL INVOICE - REVISED LAYOUT

[HEADER SECTION - ALIGNED TOP]
- TOP LEFT: Official Logo of "Sewaalkes.com" (Green medical cross icon with blue text).
- TOP CENTER: Text "INVOICE SEWA ALAT KESEHATAN" and sub-text "TERIMA KASIH ATAS KEPERCAYAAN ANDA" must be aligned horizontally with the logo.
- TOP RIGHT: WhatsApp QR Code with "HUBUNGI KAMI VIA WHATSAPP" label.

[COMPANY INFO]
${companyName} | ${website} | ${email} | ${phone}
Address: ${companyAddress}

[INVOICE & CUSTOMER INFO]
Invoice: ${invoiceNumber} | Date: ${invoiceDate} | Due: ${dueDate} | Status: ${paymentStatus}
Customer: ${customerName} | Phone: ${customerPhone} | Email: ${customerEmail} | Address: ${customerAddress}

[RENTAL ITEMS TABLE]
Format: NO | NAMA ALAT | QTY | HARGA | DURASI | SUBTOTAL
Note: Subtotal is Qty multiplied by Harga only.
Items:
${collectEquipmentItems()}

[PAYMENT SUMMARY]
Grand Total: ${grandTotal}
Show Discount, Delivery, Pickup, and DP fields.

[ADDITIONAL ASSETS - PERMANENT]
- QRIS SECTION: Display a permanent "QRIS Standar Pembayaran Nasional" barcode box on the right side of payment summary.
- BANK SECTION: Display BCA, Mandiri, and BRI logos with account details.
- NOTES: Include 2 check-marked terms of service.

[SIGNATURE AREA - REVISED]
- LEFT SIDE: "Penyewa" area - LEAVE BLANK/EMPTY (Only show name "${customerName}" in brackets below, no signature graphic).
- CENTER SIDE: "Admin" area - Include a professional handwritten signature with "Admin" label.
- RIGHT SIDE: "Stempel Perusahaan" - Show a green circular company stamp of Sewaalkes.

[VISUAL STYLE]
- Theme: Premium Corporate Medical.
- Color: Deep Blue and Medical Green.
- Layout: A4 Portrait, clean grid, professional typography.
- Footer: Icons for PROFESSIONAL, AMAN, TERPERCAYA.
`;
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFORMASI PERUSAHAAN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nama Perusahaan: ${companyName}
Website: ${website}
Email: ${email}
Telepon: ${phone}
Alamat: ${address}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFORMASI INVOICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nomor Invoice: ${invoiceNumber}
Tanggal Invoice: ${invoiceDate}
Jatuh Tempo: ${dueDate}
Status Pembayaran: ${paymentStatus}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFORMASI PENYEWA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nama: ${customerName}
No HP: ${customerPhone}
Email: ${customerEmail}
Alamat: ${customerAddress}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DAFTAR ALAT YANG DISEWA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${items}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RINGKASAN PEMBAYARAN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Diskon: Rp ${Number(discount).toLocaleString("id-ID")}
Biaya Antar: Rp ${Number(deliveryFee).toLocaleString("id-ID")}
Biaya Ambil: Rp ${Number(pickupFee).toLocaleString("id-ID")}
DP / Uang Muka: Rp ${Number(downPayment).toLocaleString("id-ID")}
${grandTotal}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GAYA VISUAL INVOICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Template: Premium Corporate Medical Blue
Tema: Premium Corporate Blue Medical
Kanvas: A4 Portrait (21x29.7cm)

Layout:
- Header: Logo perusahaan kiri, Judul Invoice tengah, QR WhatsApp kanan
- Kartu Informasi Pelanggan
- Kartu Informasi Sewa
- Tabel Peralatan: Grid Layout Profesional
- Ringkasan Pembayaran: Grand Total disorot
- Bagian Rekening Bank
- Bagian Pembayaran QRIS
- Area Tanda Tangan (Pelanggan + Admin + Stempel Perusahaan)
- Footer: Professional • Aman • Terpercaya

Gaya Desain:
- Photorealistic, Ultra Detail
- Medical Corporate Branding
- Premium Invoice Design
- Gradien Biru Modern
- Latar Belakang Putih Bersih
- Tipografi Profesional
- Print Ready, Kualitas Tinggi`;
}
