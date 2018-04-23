
function update() {
    document.getElementById('text').value = ciastka;
    document.title = ciastka + " cookies!!";
    //clicker
    document.getElementById('iloscAutoClick').innerHTML = "You have " + autoclick + " auto clickers!!!"
    document.getElementById('kosztAutoClick').innerHTML = ((autoclick + 1) * 12) + " cookies to next level";
    //farmy
    document.getElementById('iloscfarm').innerHTML = "You have " + farm + " farms!!!"
    document.getElementById('kosztfarm').innerHTML = ((farm + 1) * 24) + " cookies to next level";
    //babcie
    document.getElementById('iloscbabc').innerHTML = "You have " + babcia + " grandmas!!!"
    document.getElementById('kosztbabc').innerHTML = ((babcia + 1) * 48) + " cookies to next level";
    //fabryka
    document.getElementById('iloscfabryk').innerHTML = "You have " + fabryka + " factories!!!"
    document.getElementById('kosztfabryk').innerHTML = ((fabryka + 1) * 96) + " cookies to next level";
    //kopalnia
    document.getElementById('ilosckopalnia').innerHTML = "You have " + kopalnia + " mines!!!"
    document.getElementById('kosztkopalnia').innerHTML = ((kopalnia + 1) * 192) + " cookies to next level";
    //ciastka na sec
    document.getElementById('ciastkasec').innerHTML = "U are gaining " + ((autoclick) + (farm * 2) + (babcia * 4) + (fabryka * 8) + (kopalnia * 16)) + " Cookies per/s";
}
//itemy
var ciastka = Number(localStorage.getItem("ilosc_ciastek"));
var autoclick = Number(localStorage.getItem("ilosc_clickerow"));
var farm = Number(localStorage.getItem("ilosc_farm"));
var babcia = Number(localStorage.getItem("ilosc_babc"));
var fabryka = Number(localStorage.getItem("ilosc_fabryk"));
var kopalnia = Number(localStorage.getItem("ilosc_kopalnia"));
//    console.log(ciastka)
//latwo dodac nowe
function timer() {
    //        console.log(ciastka)
    ciastka = ciastka + autoclick + farm * 2 + babcia * 4 + fabryka * 8 + kopalnia * 16;

    update();
    myTimer();
}
setInterval(timer, 1000)
//klikanie i dodawanie
function add() {
    ciastka += 1
    update();
}
function kupnoAutoClick() {
    if (ciastka >= ((autoclick + 1) * 12)) {
        ciastka -= ((autoclick + 1) * 12);
        autoclick += 1;
        update()
    }
}
function kupnofarm() {
    if (ciastka >= ((farm + 1) * 24)) {
        ciastka = ciastka - ((farm + 1) * 24);
        farm = farm + 1;
        update()
    }
}
function kupnobabc() {
    if (ciastka >= ((babcia + 1) * 48)) {
        ciastka = ciastka - ((babcia + 1) * 48);
        babcia = babcia + 1;
        update()
    }
}
function kupnofabryk() {
    if (ciastka >= ((fabryka + 1) * 96)) {
        ciastka = ciastka - ((fabryka + 1) * 96);
        fabryka = fabryka + 1;
        update()
    }
}
function kupnokopalnia() {
    if (ciastka >= ((kopalnia + 1) * 96)) {
        ciastka = ciastka - ((kopalnia + 1) * 96);
        kopalnia = kopalnia + 1;
        update()
    }
}
function myTimer() {
    console.log(ciastka)
    localStorage.setItem("ilosc_ciastek", ciastka);
    localStorage.setItem("ilosc_clickerow", autoclick);
    localStorage.setItem("ilosc_farm", farm);
    localStorage.setItem("ilosc_babc", babcia);
    localStorage.setItem("ilosc_fabryk", fabryka);
    localStorage.setItem("ilosc_kopalnia", kopalnia);
}
