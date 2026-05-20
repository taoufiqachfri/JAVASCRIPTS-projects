function ajoute(){
    let body=document.querySelector('#body')
    let NomComplet = document.querySelector('#Nmc').value;
    let ville = document.querySelector('#ville').value;
    let compétance = document.querySelector('#compt').value;
    let disponibilités = document.querySelector('#dispo').value;
    let missionsSouhaitées = document.querySelector('#mission').value;
    let tr = document.createElement('tr');
    if(NomComplet=="" || ville=="" || compétance=="" || disponibilités=="" || missionsSouhaitées==""){
        alert("remplir les informations")
        return;
    }else{
        tr.innerHTML = `<td>${NomComplet}</td><td>${ville}</td><td>${compétance}</td><td>${disponibilités}</td><td>${missionsSouhaitées}</td><td><button  type="button" class="btn btn-danger" onclick="supprimer(this)">supprimer</button></td>`
        body.appendChild(tr)
    }
    
}


function supprimer(btn){
    if(confirm("are you sure you wanna  delete !!!")){
        let tr = btn.parentElement.parentElement;
        tr.remove();
    }
}
