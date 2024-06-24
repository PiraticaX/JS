let w;

function startWorker() {
    if (typeof(w) == "undefined") {
        w = new Worker("counter.js");
    }
    w.onmessage = function(event) {
        document.getElementById("result").textContent = event.data;
    };
}

function stopWorker() { 
    if (w) {
        w.terminate();
        w = undefined;
    }
}
