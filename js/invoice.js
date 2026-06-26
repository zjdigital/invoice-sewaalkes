// ======================================
// INVOICE.JS
// Dynamic Equipment Table
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const addBtn =
    document.getElementById("addItemBtn");

    if(addBtn){

        addBtn.addEventListener(
            "click",
            addItemRow
        );

    }

    // tambah 1 baris awal
    addItemRow();

});

// ======================================
// FORMAT RUPIAH
// ======================================

function formatRupiah(number){

    return Number(number || 0)
    .toLocaleString("id-ID");

}

// ======================================
// TAMBAH BARIS
// ======================================

function addItemRow(){

    const tbody =
    document.getElementById(
    "itemTableBody"
    );

    const row =
    document.createElement("tr");

    row.innerHTML = `

        <td>

            <input
            type="text"
            class="item-name"
            placeholder="Nama Alat">

        </td>

        <td>

            <input
            type="number"
            class="item-qty"
            value="1">

        </td>

        <td>

            <input
            type="number"
            class="item-price"
            value="0">

        </td>

        <td>

            <input
            type="number"
            class="item-duration"
            value="1">

        </td>

        <td>

            <input
            type="text"
            class="item-subtotal"
            value="0"
            readonly>

        </td>

        <td>

            <button
            class="btn-delete">

            Hapus

            </button>

        </td>

    `;

    tbody.appendChild(row);

    bindRowEvents(row);

    calculateGrandTotal();

}

// ======================================
// EVENT BARIS
// ======================================

function bindRowEvents(row){

    const qty =
    row.querySelector(".item-qty");

    const price =
    row.querySelector(".item-price");

    const duration =
    row.querySelector(".item-duration");

    qty.addEventListener(
        "input",
        () => calculateRow(row)
    );

    price.addEventListener(
        "input",
        () => calculateRow(row)
    );

    duration.addEventListener(
        "input",
        () => calculateRow(row)
    );

    row
    .querySelector(".btn-delete")
    .addEventListener("click", () => {

        row.remove();

        calculateGrandTotal();

    });

}

// ======================================
// HITUNG BARIS
// ======================================

// Cari fungsi calculateRow di invoice.js dan ganti menjadi ini:
// Cari fungsi calculateRow di invoice.js dan ganti menjadi ini:
function calculateRow(row){
    const qty = Number(row.querySelector(".item-qty").value || 0);
    const price = Number(row.querySelector(".item-price").value || 0);
    
    // Durasi tetap diambil tapi tidak dikalikan ke subtotal (sesuai poin 2)
    const subtotal = qty * price; 

    row.querySelector(".item-subtotal").value = formatRupiah(subtotal);
    row.dataset.subtotal = subtotal;

    calculateGrandTotal();
}

// ======================================
// GRAND TOTAL
// ======================================

function calculateGrandTotal(){

    let total = 0;

    document
    .querySelectorAll(
    "#itemTableBody tr"
    )
    .forEach(row => {

        total += Number(
            row.dataset.subtotal || 0
        );

    });

    const discount =
    Number(
        document.getElementById(
        "discount"
        )?.value || 0
    );

    const delivery =
    Number(
        document.getElementById(
        "deliveryFee"
        )?.value || 0
    );

    const pickup =
    Number(
        document.getElementById(
        "pickupFee"
        )?.value || 0
    );

    const grandTotal =
    total
    - discount
    + delivery
    + pickup;

    document.getElementById(
    "grandTotal"
    ).innerHTML =
    "Grand Total : Rp " +
    formatRupiah(grandTotal);

}

// ======================================
// AUTO UPDATE BIAYA
// ======================================

document.addEventListener(
"input",
(e)=>{

    if(
        e.target.id==="discount" ||
        e.target.id==="deliveryFee" ||
        e.target.id==="pickupFee"
    ){

        calculateGrandTotal();

    }

});
