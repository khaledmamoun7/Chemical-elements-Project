//getting elements
let container = document.getElementById('container')
let tbody = document.getElementById('tbody')
let search = document.getElementById('search')
let nSearch = document.getElementById('nSearch')
let sSearch = document.getElementById('sSearch')
let enSearch = document.getElementById('esSearch')
let arSearch = document.getElementById('arSearch')

//show elements


function showdata(){
    let table = '';
    for(let i = 0 ; i < database.length ; i++){
        table += `
        <tr>
        <td>${database[i].Atomic_number}</td>
        <td>${database[i].Symbol}</td>
        <td>${database[i].The_name_en}</td>
        <td>${database[i].The_name_ar}</td>
        </tr>
        `
    }
    tbody.innerHTML = table;
}
showdata()

//search

let searchMod = 'ar'

function modType(id){
    if(id == 'nSearch'){
        searchMod = 'n'
        search.placeholder = 'Search by atomic number(البحث بالعدد الذري)'
    }
    else if(id == 'sSearch'){
        searchMod = 's'
        search.placeholder = 'Search by symbol(البحث بالرمز)'
    }
    else if(id == 'enSearch'){
        searchMod = 'en'
        search.placeholder = 'Search by name in English(البحث بواسطة الاسم في الانجليزية)'
    }
    else{
        searchMod = 'ar'
        search.placeholder = 'Search by name in Arabic(البحث بواسطة الاسم في العربية)'
    }
    search.focus();
    search.value = '';
    showdata();
}


function searchData(value){
    let table = '';
    if(searchMod == 'n'){
        for(let i = 0; i < database.length ; i++){
            if(database[i].Atomic_number.includes(value)){
                table += `
                <tr>
                <td>${database[i].Atomic_number}</td>
                <td>${database[i].Symbol}</td>
                <td>${database[i].The_name_en}</td>
                <td>${database[i].The_name_ar}</td>
                </tr>
                `
            }
        }
    }
    else if(searchMod == 's'){
        for(let i = 0; i < database.length ; i++){
            if(database[i].Symbol.toLowerCase().includes(value.toLowerCase())){
                table += `
                <tr>
                <td>${database[i].Atomic_number}</td>
                <td>${database[i].Symbol}</td>
                <td>${database[i].The_name_en}</td>
                <td>${database[i].The_name_ar}</td>
                </tr>
                `
            }
        }
    }
    else if(searchMod == 'en'){
        for(let i = 0; i < database.length ; i++){
            if(database[i].The_name_en.toLowerCase().includes(value.toLowerCase())){
                table += `
                <tr>
                <td>${database[i].Atomic_number}</td>
                <td>${database[i].Symbol}</td>
                <td>${database[i].The_name_en}</td>
                <td>${database[i].The_name_ar}</td>
                </tr>
                `
            }
        }
    }
    else{
        for(let i = 0; i < database.length ; i++){
            if(database[i].The_name_ar.includes(value)){
                table += `
                <tr>
                <td>${database[i].Atomic_number}</td>
                <td>${database[i].Symbol}</td>
                <td>${database[i].The_name_en}</td>
                <td>${database[i].The_name_ar}</td>
                </tr>
                `
            }
        }
    }
    tbody.innerHTML = table;
}