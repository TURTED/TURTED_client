import TURTED from "./TURTED";

function gid(id) {
    return document.getElementById(id);
}

document.getElementById('start').addEventListener('click', function() {
    var num_clients = parseInt(gid("num_clients").value);
    var num_channels = parseInt(gid("num_channels").value);
    var host = gid("host").value;
    if (!host) {
        alert("Enter host");
        return;
    }

    console.log("Starting client", c);

    var clients = [];

    for (var c = 0; c < num_channels; c++) {
        var t = new TURTED(host);
        t.ident({"username": "loady" + c});
        t.join("channel" + c);
        clients[c] = t;
    }
}, false);

