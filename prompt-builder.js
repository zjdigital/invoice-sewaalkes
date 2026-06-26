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

function buildPrompt() {

    const companyName =
        document.getElementById("companyName")?.value || "-";

    const website =
        document.getElementById("website")?.value || "-";

    const email =
        document.getElementById("email")?.value || "-";

    const phone =
        document.getElementById("phone")?.value || "-";

    const address =
        document.getElementById("address")?.value || "-";

    const invoiceNumber =
        document.getElementById("invoiceNumber")?.value || "-";

    const invoiceDate =
        document.getElementById("invoiceDate")?.value || "-";

    const dueDate =
        document.getElementById("dueDate")?.value || "-";

    const paymentStatus =
        document.getElementById("paymentStatus")?.value || "-";

    const customerName =
        document.getElementById("customerName")?.value || "-";

    const customerPhone =
        document.getElementById("customerPhone")?.value || "-";

    const customerEmail =
        document.getElementById("customerEmail")?.value || "-";

    const customerAddress =
        document.getElementById("customerAddress")?.value || "-";

    const discount =
        document.getElementById("discount")?.value || "0";

    const deliveryFee =
        document.getElementById("deliveryFee")?.value || "0";

    const pickupFee =
        document.getElementById("pickupFee")?.value || "0";

    const downPayment =
        document.getElementById("downPayment")?.value || "0";

    const grandTotal =
        document.getElementById("grandTotal")?.innerText || "Rp 0";

    const items = collectEquipmentItems();

    return `CREATE A PREMIUM CORPORATE MEDICAL EQUIPMENT RENTAL INVOICE

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