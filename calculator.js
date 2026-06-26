// ======================================
// CALCULATOR.JS
// Invoice AI Designer
// ======================================

function calculateDuration() {

    const startDate =
    document.getElementById("startDate").value;

    const endDate =
    document.getElementById("endDate").value;

    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    const end = new Date(endDate);

    const diff =
    Math.ceil(
    (end - start) /
    (1000 * 60 * 60 * 24)
    ) + 1;

    document.getElementById("durationDays").value =
    diff > 0 ? diff : 0;

    calculateTotals();
}

// ======================================
// HITUNG SUBTOTAL BARIS
// ======================================

function calculateRow(row){

    const qty =
    parseFloat(
    row.querySelector(".qty")?.value || 0
    );

    const price =
    parseFloat(
    row.querySelector(".price")?.value || 0
    );

    const duration =
    parseFloat(
    document.getElementById("durationDays").value || 0
    );

    const subtotal =
    qty * price * duration;

    row.querySelector(".subtotal").value =
    subtotal.toLocaleString("id-ID");

    row.dataset.subtotal = subtotal;

    calculateTotals();
}

// ======================================
// HITUNG GRAND TOTAL
// ======================================

function calculateTotals(){

    let total = 0;

    document
    .querySelectorAll("#equipmentBody tr")
    .forEach(row => {

        total +=
        parseFloat(
        row.dataset.subtotal || 0
        );

    });

    document.getElementById("totalRental").innerText =
    total.toLocaleString("id-ID");

    const discount =
    parseFloat(
    document.getElementById("discount").value || 0
    );

    const delivery =
    parseFloat(
    document.getElementById("deliveryFee").value || 0
    );

    const pickup =
    parseFloat(
    document.getElementById("pickupFee").value || 0
    );

    const grandTotal =
    total
    - discount
    + delivery
    + pickup;

    document.getElementById("grandTotal").innerText =
    grandTotal.toLocaleString("id-ID");

}

// ======================================
// EVENT LISTENER
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const startDate =
    document.getElementById("startDate");

    const endDate =
    document.getElementById("endDate");

    if(startDate){
        startDate.addEventListener(
        "change",
        calculateDuration
        );
    }

    if(endDate){
        endDate.addEventListener(
        "change",
        calculateDuration
        );
    }

    const discount =
    document.getElementById("discount");

    const delivery =
    document.getElementById("deliveryFee");

    const pickup =
    document.getElementById("pickupFee");

    if(discount){
        discount.addEventListener(
        "input",
        calculateTotals
        );
    }

    if(delivery){
        delivery.addEventListener(
        "input",
        calculateTotals
        );
    }

    if(pickup){
        pickup.addEventListener(
        "input",
        calculateTotals
        );
    }

});