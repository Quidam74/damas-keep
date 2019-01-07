var listeDesTrucPossible = [{"Text": "Munch on tasand stare hopped up on catnip, but sit in box and bite off hbox hit you unexpectedly for hide when guests come over. If human is on laptop sit on the keyboard pee in the shoe. Meow meow, i tell my human lounge in doorway hunt anything that moves. Run up and down stairs. Sniff all the things. Tuxedo cats always looking dapper pee in the shoe and flex claws on the human's belly and purr like a lawnmower poop in litter box, scratch the walls for woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now leave hair on owner's clothes."},
    {"Text": "Hunt by meowing loudly at 5am next to human slave food dispensert was chasing the moupurr purr yawn and chew the plant so meow meow mama chew foot."},
    {"Text": "My cat stared at me he was sipping his tea"},
    {"Text": "Catch mouse and gave it as a present stare at the wall, play with food and get confused by dust so no, you can't close the door"}]
var listDesTruc = [{"Text": "aaa"}, {"Text": "aaa"}];
for (var u = 0; u < 80; u++) {
    listDesTruc[u] = listeDesTrucPossible[parseInt(Math.random() * 4)]

}
document.addEventListener("DOMContentLoaded", () => {
    insertNumberRow();
    repartirPenseBete();
    bindevent();
});

var taileMaxChaine = 300;

function insertNumberRow() {

    var nbCol = parseInt(window.innerWidth / 200);

    var ref = document.querySelector(".list");
    ref.style.width = 200 * nbCol + "px";
    for (var i = 0; i <= nbCol - 1; i++) {
        var elem = "<section class=\"sous-list\">  </section>";

        ref.innerHTML += elem;
    }

}

function repartirPenseBete() {

//<div class=\"list-elem\"><p>"+listeDesTrucPossible[parseInt(Math.random()*4)].Text+"</p></div>
    var lesCol = document.querySelectorAll(".sous-list")
    var i = 0;
    var heightCol = 0;
    for (var u = 0; u <= lesCol.length - 1; u++) {
        heightCol = getInnerHeight(lesCol[u]);
        while (window.innerHeight - 300 > heightCol && i < listDesTruc.length - 1) {
            var tailleChaine = listDesTruc[i].Text.length
            if (tailleChaine >= taileMaxChaine)
                lesCol[u].innerHTML += "<div data-nombre=" + i + " class=\"list-elem tiny-elem\"><p>" + listDesTruc[i].Text.substr(0, taileMaxChaine) + " ..." + "</p></div>"
            else {
                lesCol[u].innerHTML += "<div data-nombre=" + i + " class=\"list-elem\"><p>" + listDesTruc[i].Text + "</p></div>"
            }
            heightCol = getInnerHeight(lesCol[u]) + estimeHeight(listDesTruc[i + 1].Text);
            i++
        }
    }


}

function getInnerHeight(elem) {
    var height = 0;
    if (elem != undefined) {
        for (u = elem.childNodes.length - 1; u !== 0; u--) {
            height += elem.childNodes[u].offsetHeight;
        }
    }
    return height;
}

function estimeHeight(chaine) {
    var hauteurEstimer = 0;
    if (chaine.length < taileMaxChaine)
        hauteurEstimer = chaine.length / 28 * 18;
    else
        hauteurEstimer = taileMaxChaine / 28 * 18;


    return hauteurEstimer;


}

function bindevent() {
    bindClickValidForm();
    bindClickEdit();
    bindPopUp();
}

function bindClickValidForm() {
    document.querySelector(".new-button").addEventListener("click", () => {
        var text = document.querySelector(".new-input").value
        if (text.length > 0) {
            console.log(document.querySelector(".new-input").value)
        }
    })
}

function bindClickEdit() {
var popUpText =  document.querySelector(".PopUp-text")
    var popUp =  document.querySelector(".PopUp")
    var notes = document.querySelectorAll(".list-elem");
    notes.forEach((elem,index) => {
        elem.addEventListener("click", (e) => {
            var idDemander = e.currentTarget.dataset.nombre;
            popUpText.innerHTML = listDesTruc[idDemander].Text;
            popUp.classList.remove("hide");
            popUp.dataset.nombre = idDemander
        })

    })


}

function bindPopUp() {

    var popUpText =  document.querySelector(".PopUp-text")
    var popUp =  document.querySelector(".PopUp")
    document.querySelector(".PopUp-bg").addEventListener("click", () => {
        var newText = popUpText.value;
        update(newText, popUp.dataset.nombre);
        popUp.dataset.nombre = ""
        popUpText.innerHTML = "";
        popUp.classList.add("hide");
    })

}
