
let w;

function startWorker() {
  if(typeof(w) == "undefined") {
    w = new Worker("counter.js");
  }
  w.onmessage = function(event) {
    document.getElementById("p1").innerHTML = event.data;
  };
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}