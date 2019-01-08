function create(chaine) {
    $.post("/note/create/" + chaine, function (data) {
        console.log(data)
    }, "json");

}

function readAll() {
    new Promise((resolve, reject) => {
        $.get("/note/readAll", function (data) {
            resolve(data);

        }, "json");
    }).then(function (result) {
        listDesTruc = result;
        insertNumberRow();
        repartirPenseBete();
        bindevent();
    })

}

function update(chaine, id) {
    if (chaine.length != 0) {
        $.get("/note/update/" + id + "/" + chaine, function (data) {
        }, "json");
    } else {
        delet(id)
    }
}

function delet(id) {
    $.get("/note/delet/" + id + "/", function (data) {
    }, "json");
}

function initBase() {
  setInterval(function () {
      if(u<80){
          var chaine = listeDesTrucPossible[parseInt(Math.random() * 4)]

          $.post("/note/create/" + chaine.Text, function (data) {
              console.log(data)
          }, "json");
          u++
      }

  },50)



}