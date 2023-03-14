const addButton = document.getElementById("add-row") 
const moveUpButton = document.getElementById("move-row-up")
const moveDownButton = document.getElementById("move-row-down")
const deleteButton = document.getElementById("delete-row")
const refreshButton = document.getElementById("refresh-data")
const saveButton = document.getElementById("save-data")

const chemicalData = [
    {
        id: 1,
        name: "Acetic Acid",
        vendor: "ABC Chemicals",
        density: 1.049,
        viscosity: 1.22,
        packaging: "Glass Bottle",
        packSize: 500,
        unit: "ml",
        quantity: 10,
    },
    {
        id: 29,
        name: "Ammonia Solution",
        vendor: "XYZ Chemicals",
        density: 0.91,
        viscosity: 0.8,
        packaging: "Plastic Bottle",
        packSize: 1000,
        unit: "ml",
        quantity: 5,
    },
    {
        id: 15,
        name: "Sodium Chloride",
        vendor: "PQR Chemicals",
        density: 2.165,
        viscosity: 1.5,
        packaging: "Plastic Bottle",
        packSize: 100,
        unit: "g",
        quantity: 25,
    },
];

// Function to generate table rows

function generateTableRows(data) {
    let rows = "";
    data.forEach((item) => {
        rows += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.vendor}</td>
                <td>${item.density}</td>
                <td>${item.viscosity}</td>
                <td>${item.packaging}</td>
                <td>${item.packSize}</td>
                <td>${item.unit}</td>
                <td>${item.quantity}</td>
            </tr>
        `;
    });
    return rows;
}

function renderTable(data) {
    const table = document.querySelector("#chemicals-table tbody");
    table.innerHTML = generateTableRows(data);
}

renderTable(chemicalData);

addButton.addEventListener('click', () => {
    let rows = {
        id: "",
        name: "",
        vendor: "",
        density: "",
        viscosity: "",
        packaging: "",
        packSize: "",
        unit: "",
        quantity: "",
    };
    chemicalData.push(rows);
    renderTable(chemicalData);
})

function saveData() {
    const chemicalData = JSON.stringify(chemicalData);
    localStorage.setItem("chemicalData", chemicalData);
}

function getDataFromStorage() {
    const chemicalData = localStorage.getItem("chemicalData");
    chemicalData = JSON.parse(chemicalData) ? JSON.parse(chemicalData) : chemicalData;
    return chemicalData;
}
