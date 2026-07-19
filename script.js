// Charger les cycles entrées / Prends les données du localStorage. Si elles n'existent pas, utilise un tableau vide []."
let cycles = JSON.parse(localStorage.getItem('cycles')) || [];

//Sauvegarder START DATE
function saveStart(){
  const start = document.getElementById('start').value;
         if (start === '') {
             alert("Please entre a start date😊 ");
            return;
    }  

    // POUR ENREGISTRER UN NOUVEAU CYCLE
  
    cycles.push({
        start : start,
        end:''
    });

    localStorage.setItem("cycles", JSON.stringify(cycles));
    alert("Start Date is saved!💗")
}

// Sauvegarder END DATE
function saveEnd() {
 const end= document.getElementById("end").value;
     if(end === ''){
        alert("Please enter an end date😊");
        return;
     }

    if(cycles.length === 0) {
        alert("No cycle found.");
        return;
    }


    cycles[cycles.length -1].end = end ;
    localStorage.setItem("cycles", JSON.stringify(cycles));
    alert("End Date is saved! 💗");


}

// fonction diqplay pour afficer les cycles dans history


function displayHistory() {

    let list = document.getElementById("cycle-list");

    if (!list) {
        return;
    }

    let cycles = JSON.parse(localStorage.getItem("cycles")) || [];

    list.innerHTML = "";

    for (let i = 0; i < cycles.length; i++) {

        list.innerHTML += `
        <div class="cycle-item">
            <strong>🌷 Cycle ${i + 1}</strong><br>
            🌷 Start: ${cycles[i].start}<br>
            🌹 End: ${cycles[i].end}
        </div>
        `;
    }
}

displayHistory();


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}