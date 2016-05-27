var worker = new Worker('web-worker.js');

worker.addEventListener('message', function(e){
   console.log('Worker said: ', e.data); 
}, false);