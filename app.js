<!DOCTYPE html>
<html lang="id">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Prompt History</title>

<link rel="stylesheet" href="css/style.css">

</head>

<body>

<div class="container">

    <header class="hero">

        <h1>Prompt History</h1>

        <p>Invoice AI Designer</p>

    </header>

    <section class="card">

        <button onclick="window.location.href='index.html'">
            ← Kembali ke Dashboard
        </button>

        <button onclick="clearHistory()">
            Hapus Semua History
        </button>

    </section>

    <section class="card">

        <div id="historyContainer"></div>

    </section>

</div>

<script>

function loadHistory(){

    const container =
    document.getElementById(
    "historyContainer"
    );

    const history =
    JSON.parse(
    localStorage.getItem(
    "invoiceHistory"
    ) || "[]"
    );

    if(history.length===0){

        container.innerHTML=
        `
        <p>
        Belum ada history prompt
        </p>
        `;

        return;
    }

    let html="";

    history.forEach((item,index)=>{

        html += `
        <div class="history-card">

            <h3>
                Prompt #${index+1}
            </h3>

            <small>
                ${item.date}
            </small>

            <textarea rows="10">
${item.prompt}
            </textarea>

            <br><br>

            <button onclick="copyPrompt(${index})">
                Copy Prompt
            </button>

        </div>

        <hr>
        `;

    });

    container.innerHTML = html;

}

function copyPrompt(index){

    const history =
    JSON.parse(
    localStorage.getItem(
    "invoiceHistory"
    ) || "[]"
    );

    navigator.clipboard.writeText(
    history[index].prompt
    );

    alert(
    "Prompt berhasil dicopy"
    );

}

function clearHistory(){

    if(
        confirm(
        "Hapus semua history?"
        )
    ){

        localStorage.removeItem(
        "invoiceHistory"
        );

        loadHistory();

    }

}

loadHistory();

</script>

</body>
</html>