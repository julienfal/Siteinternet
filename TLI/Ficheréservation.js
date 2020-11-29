function date_maker(date) {
    var new_date = new Date();
    var nb = "";
    var date_list = [];
    for (let i of date) {
        if (i === "-") {
            date_list.push(nb);
            nb = "";
        } else {
            nb += i;
        }
    }
    date_list.push(nb);
    new_date.setFullYear(date_list[0]);
    new_date.setMonth(date_list[1]);
    new_date.setDate(date_list[2]);
    new_date.setHours(0);
    new_date.setMinutes(0);
    new_date.setSeconds(0);
    new_date.setMilliseconds(0);
    return new_date.getTime()
}


function voyageValide(dep, ret) {
    return ((ret - dep) > 0);
}


var id = new URLSearchParams(window.location.search).get("id");
console.log(id)
var dest = destination_array[id];
console.log(dest)
var price = dest._price;
console.log(price)

function change_title() {
    var dest_titre = document.getElementById("blabla");
    dest_titre.innerHTML = "Formulaire de réservation - " + dest._pays;
}


function price_calculator() {
    var adult_nb = parseInt(document.getElementById("adult_number").value);
    var child_nb = parseInt(document.getElementById("child_number").value);
    let Depart = document.getElementById("start_date").value;
    let Retour = document.getElementById("end_date").value;
    Depart = date_maker(Depart);
    Retour = date_maker(Retour);
    now = new Date()
    today = date_maker(now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate())
    console.log(Depart)
    if ((isNaN(Depart)) && (isNaN(Retour))) {
        return window.alert("Date non valide.");
    }
    if ((!voyageValide(today, Depart)) && (!isNaN(Depart))) {
        return window.alert("Départ non valide.");
    }
    if ((!voyageValide(Depart, Retour)) && (!isNaN(Retour)) && (!isNaN(Depart))) {
        return window.alert("Retour non valide.");
    }
    var days_nb = (Retour - Depart) / 86400000;
    var bfast = document.getElementById("included_bfast").checked;
    if (bfast === true) {
        bfast_price = 12;
    } else {
        bfast_price = 0;
    }
    var total = days_nb * (((child_nb * 0.4) + adult_nb) * price + (child_nb + adult_nb) * bfast_price);
    document.getElementById("responsive_price").innerHTML = "" + total + " €";
}


