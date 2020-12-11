document.addEventListener("DOMContentLoaded", function (event){
    document.querySelector(".item").addEventListener("click", function () {
        var item = null;
        var xttp = new XMLHttpRequest();
        xttp.onreadystatechange = function () {
            if ((this.readyState == 4) && (this.status == 200)) {
                item = this.responseText;
                var xttp = new XMLHttpRequest();
                xttp.onreadystatechange = function () {
                    if ((this.readyState == 4) && (this.status == 200)) {
                        var entry = JSON.parse(this.responseText);
                        item = item.replace(new RegExp("{{name}}", "g", entry.name))
                        item = item.replace(new RegExp("{{description}}", "g", entry.description))

                        document.querySelector("#content").innerHTML = document.querySelector("#content").innerHTML+item;

                    }
                };
                xttp.open("GET", "item.json", true);
                xttp.send(null);
            }
        };
        xttp.open("GET", "item.html", true);
        xttp.send(null);
    });

});



function loadItem() {
    var item = null;
    var xttp = new XMLHttpRequest();
    xttp.onreadystatechange = function () {
        if ((this.readyState == 4) && (this.status == 200)) {
            item = this.responseText;
            var xttp = new XMLHttpRequest();
            xttp.onreadystatechange = function () {
                if ((this.readyState == 4) && (this.status == 200)) {
                    var entry = JSON.parse(this.responseText);
                    item = item.replace(new RegExp("{{name}}", "g", entry.name))
                    item = item.replace(new RegExp("{{description}}", "g", entry.description))

                    document.querySelector("#content").innerHTML = document.querySelector("#content").innerHTML+item;

                }
            };
            xttp.open("GET", "item.json", true);
            xttp.send(null);
        }
    };
    xttp.open("GET", "item.html", true);
    xttp.send(null);
};

