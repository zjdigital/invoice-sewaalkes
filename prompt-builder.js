// ==========================================
// PROMPT BUILDER
// Invoice AI Designer V1
// ==========================================

function collectEquipmentItems() {

    const rows =
    document.querySelectorAll(
    "#equipmentBody tr"
    );

    let items = [];

    rows.forEach((row,index)=>{

        const name =
        row.querySelector(".equipment-name")
        ?.value || "";

        const qty =
        row.querySelector(".qty")
        ?.value || 0;

        const price =
        row.querySelector(".price")
        ?.value || 0;

        if(name){

            items.push(
            `${index+1}. ${name}
Qty: ${qty}
Price Per Day: ${price}`
            );

        }

    });

    return items.join("\n\n");

}

// ==========================================
// BUILD PROMPT
// ==========================================

function buildPrompt(){

    const companyName =
    document.getElementById("companyName").value;

    const website =
    document.getElementById("website").value;

    const email =
    document.getElementById("email").value;

    const phone =
    document.getElementById("phone").value;

    const companyAddress =
    document.getElementById("companyAddress").value;

    const invoiceNumber =
    document.getElementById("invoiceNumber").value;

    const invoiceDate =
    document.getElementById("invoiceDate").value;

    const dueDate =
    document.getElementById("dueDate").value;

    const paymentStatus =
    document.getElementById("paymentStatus").value;

    const customerName =
    document.getElementById("customerName").value;

    const customerPhone =
    document.getElementById("customerPhone").value;

    const customerEmail =
    document.getElementById("customerEmail").value;

    const customerAddress =
    document.getElementById("customerAddress").value;

    const startDate =
    document.getElementById("startDate").value;

    const endDate =
    document.getElementById("endDate").value;

    const durationDays =
    document.getElementById("durationDays").value;

    const discount =
    document.getElementById("discount").value;

    const deliveryFee =
    document.getElementById("deliveryFee").value;

    const pickupFee =
    document.getElementById("pickupFee").value;

    const dpAmount =
    document.getElementById("dpAmount").value;

    const totalRental =
    document.getElementById("totalRental").innerText;

    const grandTotal =
    document.getElementById("grandTotal").innerText;

    const templateStyle =
    document.getElementById("templateStyle").value;

    const items =
    collectEquipmentItems();

    return `
CREATE A PREMIUM CORPORATE MEDICAL EQUIPMENT RENTAL INVOICE

COMPANY

${companyName}

Website:
${website}

Email:
${email}

Phone:
${phone}

Address:
${companyAddress}


INVOICE INFORMATION

Invoice Number:
${invoiceNumber}

Invoice Date:
${invoiceDate}

Due Date:
${dueDate}

Payment Status:
${paymentStatus}


CUSTOMER INFORMATION

Customer:
${customerName}

Phone:
${customerPhone}

Email:
${customerEmail}

Address:
${customerAddress}


RENTAL INFORMATION

Rental Start:
${startDate}

Rental End:
${endDate}

Duration:
${durationDays} Days


RENTAL ITEMS

${items}


PAYMENT SUMMARY

Total Rental:
Rp ${totalRental}

Discount:
Rp ${discount}

Delivery Fee:
Rp ${deliveryFee}

Pickup Fee:
Rp ${pickupFee}

Down Payment:
Rp ${dpAmount}

Grand Total:
Rp ${grandTotal}


VISUAL STYLE

Template:
${templateStyle}

Theme:
Premium Corporate Blue Medical

Canvas:
A4 Portrait

Layout:

Header:
Company logo on left
Invoice title in center
WhatsApp QR on right

Customer Information Card

Rental Information Card

Equipment Table:
Professional Grid Layout

Payment Summary:
Highlighted Grand Total

Bank Account Section

QRIS Payment Section

Signature Area

Customer Signature

Admin Signature

Company Stamp

Footer:
Professional • Aman • Terpercaya


DESIGN STYLE

Photorealistic

Ultra Detailed

Medical Corporate Branding

Premium Invoice Design

Modern Blue Gradient

Clean White Background

Professional Typography

Print Ready

A4 Portrait

High Quality Business Document
`;
}