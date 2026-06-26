// app.js - Logika Utama
document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generateBtn");
    const copyBtn = document.getElementById("copyBtn");
    const promptOutput = document.getElementById("promptOutput");

    // Fungsi Generate Prompt
    if (generateBtn) {
        generateBtn.addEventListener("click", () => {
            const promptText = buildPrompt(); // Memanggil fungsi dari prompt-builder.js
            promptOutput.value = promptText;
            
            // Simpan ke History (LocalStorage)
            saveToHistory(promptText);
            alert("Prompt Berhasil Dibuat!");
        });
    }

    // Fungsi Copy ke Clipboard
    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            promptOutput.select();
            document.execCommand("copy");
            alert("Prompt berhasil disalin ke clipboard!");
        });
    }
});

function saveToHistory(prompt) {
    const history = JSON.parse(localStorage.getItem("invoiceHistory") || "[]");
    const newEntry = {
        date: new Date().toLocaleString('id-ID'),
        prompt: prompt
    };
    history.unshift(newEntry); // Tambah ke paling atas
    localStorage.setItem("invoiceHistory", JSON.stringify(history.slice(0, 20))); // Simpan 20 terakhir
}
