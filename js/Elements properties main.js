//getting elements
let name_en = document.getElementById('name_en');
let name_ar = document.getElementById('name_ar');
let an = document.getElementById('an');
let am = document.getElementById('am');
let mp = document.getElementById('mp');
let bp = document.getElementById('bp');
let dd = document.getElementById('dd');
let db = document.getElementById('db');
let ec = document.getElementById('ec');
let wi = document.getElementById('wi');
let wia = document.getElementById('wia');

//show data 

function showData(i){
 for(let x = 0; x < database.length ; x++){
    if(i.toLowerCase() == database[x].Symbol.toLowerCase()){
        name_en.innerHTML = database[x].The_name_en
        name_ar.innerHTML = database[x].The_name_ar
        an.innerHTML = database[x].Atomic_number
        am.innerHTML = database[x].Atomic_mass
        mp.innerHTML = database[x].Melting_point
        bp.innerHTML = database[x].Boiling_point
        dd.innerHTML = database[x].Discovery_date
        db.innerHTML = database[x].Discovered_by
        ec.innerHTML = database[x].Element_classification
        wi.innerHTML = `<a target="_blank" href="${database[x].Wikipedia_link}">All Element properties(جميع خصائص العنصر)</a>`
    } 
     if(i == ''){
    name_en.innerHTML = ''
    name_ar.innerHTML = ''
    an.innerHTML = ''
    am.innerHTML = ''
    mp.innerHTML = ''
    bp.innerHTML = ''
    dd.innerHTML = ''
    db.innerHTML = ''
    ec.innerHTML = ''
    wi.innerHTML = ''
 }
 }


}
