var list = []
document.getElementById("submit").addEventListener("click", function () {
    var input = document.getElementById("input").value;
    list.push(input)
    for (var i = 0; i < list.length; i++ ) {

    }

    document.getElementById("display").innerHTML = list;
})
