window.onload=function () {

}

class Destination {
    constructor(id, pays, capital, habitants, superficie, continent, price){
        this._id = id
        this._pays = pays
        this.capital =  capital
        this.habitants = habitants
        this.superficie = superficie
        this.continent = continent
        this._price = price
    }

}




var france = new Destination("0", "France", "Paris", "66,99 millions", "644 000 km²", "europe", 150);
var espagne = new Destination("1", "Espagne", "Madrid", "47 329 981", "505 990 km²", "europe", 140);
var italie = new Destination("2", "Italie", "Rome", "60,32 millions", "301 338 km²", "europe", 130);
var grèce = new Destination("3", "Grèce", "Athènes", "10,63 millions", "131 957 km²", "europe", 80);
var brésil = new Destination("4", "Brésil", "Brasilia", "208,85 millions", "8 514 876 km²", "amérique du sud", 90);
var japon = new Destination("5", "Japon", "Tokyo", "126,17 millions", "377 975 km²", "asie", 135);






var destination_array = new Array();
destination_array[0] = france;
destination_array[1] = espagne;
destination_array[2] = italie;
destination_array[3] = grèce;
destination_array[4] = brésil;
destination_array[5] = japon;



// Destination['france'].fullname();