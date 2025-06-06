const table = document.getElementById("results");
const input = document.getElementById("searchbar");
const selector = document.getElementById("selector");

// document.getElementById("mainPageBtn").addEventListener("click", () => window.open("index.html", "_self")); // volver a index

window.addEventListener("load", () => {
    loadTable();
    input.focus();
});
input.addEventListener("keyup", () => loadTable());
selector.addEventListener("mousedown", () => input.focus());

function loadTable() {
    table.innerHTML = "";

    // Filtro basado en el valor actual del selector (campo que se va a buscar)
    const searchField = selector.value;
    const searchTerm = input.value.trim().toLowerCase();

    const filteredEntries = searchTerm !== ""
        ? entries.filter(entry => {
            const fieldValue = (entry[searchField] || "").toString().toLowerCase();
            return fieldValue.startsWith(searchTerm);
        })
        : entries;

    // Orden alfabético por el campo "card" (el nombre de la carta)
    filteredEntries.sort((entry1, entry2) => entry1.card.localeCompare(entry2.card, "es"));

    if (filteredEntries.length === 0) {
        table.insertRow().insertCell().innerHTML = `No se encontraron entradas que coincidan con "${input.value.trim()}".`;
    } else {
        filteredEntries.forEach(entry => {
            table.insertRow().insertCell().innerHTML = format(entry);
        });
    }
}

function format(entry) {
    const format = document.createElement("div");

    addElement("h3", capitalizeFirst(entry.card), format);

    if (entry.major !== null) {
        addElement("p", `Arcano Mayor — Número: ${entry.major}`, format);
    } else {
        addElement("p", `Arcano Menor — Palo: ${entry.suit}, Número: ${entry.minor}`, format);
    }

    addElement("p", capitalizeFirst(entry.meaning), format);
    addElement("b", "Significado invertido: ", format);
    addElement("i", entry.alt, format);

    format.appendChild(document.createElement("br"));
    format.appendChild(document.createElement("br"));

    return format.innerHTML;
}

function capitalizeFirst(str) {
    try {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } catch (error) {
        return "";
    }
}

function addElement(element, textContent, dest) {
    const child = document.createElement(element);
    child.textContent = textContent;
    dest.appendChild(child);
}