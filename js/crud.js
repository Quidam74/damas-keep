function create(chaine) {
    $.post("/note/create/" + chaine, function (data) {
        console.log(data)
    }, "json");

}

function readAll() {
    new Promise ((resolve,reject) =>{
    $.get("/note/readAll", function (data) {
         resolve(data);

    }, "json");
    }).then(function(result){
        listDesTruc = result;
        insertNumberRow();
        repartirPenseBete();
        bindevent();
    })

}

function update(chaine, id) {
    $.get("/note/update/"+id+"/"+chaine, function (data) {
        resolve(data);

    }, "json");
}

function delet(id) {

}