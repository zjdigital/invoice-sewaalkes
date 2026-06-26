// ==========================================
// PROMPT BUILDER - REVISED V2
// ==========================================

function collectEquipmentItems() {
    const rows = document.querySelectorAll("#itemTableBody tr");
    let items = [];

    rows.forEach((row, index) => {
        const name = row.querySelector(".item-name")?.value || "";
        const qty = row.querySelector(".item-qty")?.value || 0;
        const price = row.querySelector(".item-price")?.value || 0;
        const duration = row.querySelector(".item-duration")?.value || 1;
        
        // Subtotal di sini hanya Qty x Harga (Sesuai Revisi Poin 2)
        const subtotalValue = Number(qty) * Number(price);
        const subtotalText = subtotalValue.toLocaleString("id-ID");

        if (name) {
            // "Harga/Hari" diubah jadi "Harga" saja (Sesuai Revisi Poin 1)
            items.push(
                `${index + 1}. ${name} | Qty: ${qty} | Harga: Rp ${Number(price).toLocaleString("id-ID")} | Durasi: ${duration} hari | Subtotal: Rp ${subtotalText}`
            );
        }
    });

    return items.length > 0 ? items.join("\n") : "(Belum ada item)";
}

function buildPrompt() {
    // MENGAMBIL DATA DARI INPUT (WAJIB ADA AGAR TIDAK ERROR)
    const companyName = document.getElementById("companyName")?.value || "";
    const website = document.getElementById("website")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const phone = document.getElementById("phone")?.value || "";
    const address = document.getElementById("address")?.value || "";
    const invoiceNumber = document.getElementById("invoiceNumber")?.value || "";
    const invoiceDate = document.getElementById("invoiceDate")?.value || "";
    const dueDate = document.getElementById("dueDate")?.value || "";
    const paymentStatus = document.getElementById("paymentStatus")?.value || "";
    const customerName = document.getElementById("customerName")?.value || "";
    const customerPhone = document.getElementById("customerPhone")?.value || "";
    const customerEmail = document.getElementById("customerEmail")?.value || "";
    const customerAddress = document.getElementById("customerAddress")?.value || "";
    
    const discount = document.getElementById("discount")?.value || 0;
    const deliveryFee = document.getElementById("deliveryFee")?.value || 0;
    const pickupFee = document.getElementById("pickupFee")?.value || 0;
    const downPayment = document.getElementById("downPayment")?.value || 0;
    const grandTotal = document.getElementById("grandTotal")?.innerText || "Rp 0";

    const items = collectEquipmentItems();

    // RETURN HANYA BOLEH SATU KALI DI AKHIR FUNGSI
    return `
CREATE A PROFESSIONAL MEDICAL EQUIPMENT RENTAL INVOICE - FINAL REVISED

[HEADER SECTION - ALIGNED TOP]
- TOP LEFT: Official Logo of "Sewaalkes.com".
- TOP CENTER: Text "INVOICE SEWA ALAT KESEHATAN" and sub-text "TERIMA KASIH ATAS KEPERCAYAAN ANDA" must be aligned horizontally (TOP ALIGNED) with the logo.
- TOP RIGHT: WhatsApp QR Code with "HUBUNGI KAMI VIA WHATSAPP" label.

[INFORMATION DATA]
COMPANY: ${companyName} | ${website} | ${email} | ${phone} | ${address}
INVOICE: ${invoiceNumber} | Date: ${invoiceDate} | Due: ${dueDate} | Status: ${paymentStatus}
CUSTOMER: ${customerName} | ${customerPhone} | ${customerEmail} | ${customerAddress}

[RENTAL ITEMS TABLE]
Format: NO | NAMA ALAT | QTY | HARGA | DURASI | SUBTOTAL
Items List:
${items}

[PAYMENT SUMMARY]
Diskon: Rp ${Number(discount).toLocaleString("id-ID")}
Biaya Antar: Rp ${Number(deliveryFee).toLocaleString("id-ID")}
Biaya Ambil: Rp ${Number(pickupFee).toLocaleString("id-ID")}
DP / Uang Muka: Rp ${Number(downPayment).toLocaleString("id-ID")}
TOTAL AKHIR: ${grandTotal}

[ADDITIONAL ASSETS - PERMANENT]
- QRIS: Display permanent QRIS barcode box on the right.
- BANK: Display BCA, Mandiri, and BRI logos with account details.
- NOTES: 2 check-marked terms of service.

[SIGNATURE AREA - REVISED]
- LEFT: "Penyewa" area - LEAVE BLANK/EMPTY SIGNATURE (Only show name "${customerName}" in brackets).
- CENTER: "Admin" area - Include handwritten signature "Juli" with "Admin" label.
- RIGHT: "Stempel Perusahaan" - Green circular company stamp of Sewaalkes.

[VISUAL STYLE]
- Theme: Premium Corporate Medical Blue & Green.
- Layout: A4 Portrait, Photorealistic, Ultra Detailed, Print Ready.
- Footer: Icons for PROFESSIONAL, AMAN, TERPERCAYA.
`;
}
