// ======================================
// CALCULATOR.JS
// Invoice AI Designer
// Hitung subtotal dan grand total
// ======================================

// ======================================
// HITUNG SUBTOTAL BARIS
// ======================================

function calculateRow(row) {

    const qty = Number(
        row.querySelector(".item-qty")?.value || 0
    );

    const price = Number(
        row.querySelector(".item-price")?.value || 0
    );

    const duration = Number(
        row.querySelector(".item-duration")?.value || 0
    );

    const subtotal = qty * price * duration;

    const subtotalInput = row.querySelector(".item-subtotal");
    if (subtotalInput) {
        subtotalInput.value = subtotal.toLocaleString("id-ID");
    }

    row.dataset.subtotal = subtotal;

    calculateGrandTotal();
}

// ======================================
// GRAND TOTAL
// ======================================

function calculateGrandTotal() {

    let total = 0;

    document.querySelectorAll("#itemTableBody tr").forEach(row => {
        total += Number(row.dataset.subtotal || 0);
    });

    const discount = Number(
        document.getElementById("discount")?.value || 0
    );

    const delivery = Number(
        document.getElementById("deliveryFee")?.value || 0
    );

    const pickup = Number(
        document.getElementById("pickupFee")?.value || 0
    );

    const grandTotal = total - discount + delivery + pickup;

    const grandTotalEl = document.getElementById("grandTotal");
    if (grandTotalEl) {
        grandTotalEl.innerHTML =
            "Grand Total : Rp " + grandTotal.toLocaleString("id-ID");
    }

    // Also update live prompt
    if (typeof buildPrompt === "function") {
        const output = document.getElementById("promptOutput");
        if (output) output.value = buildPrompt();
    }
}

// ======================================
// EVENT LISTENER — Biaya fields
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    ["discount", "deliveryFee", "pickupFee", "downPayment"].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("input", calculateGrandTotal);
        }
    });

});