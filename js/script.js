document.getElementById("start").addEventListener("click", function () {
    document.getElementById('min').innerText = '0';
    let sec = 0;
    let min = 0;
    const numberInterval = setInterval(() => {
        let num = document.getElementById("sec");
        num.innerText = sec++;
        if(num.innerText === '60'){
            min = min + 1;
            sec = 0;
            document.getElementById('min').innerText = min;
        }
    }, 1000);
    stopInterval(numberInterval);
    document.getElementById('start').setAttribute('disabled','disabled')
    document.getElementById('stop').removeAttribute('disabled','disabled')
});

const stopInterval = (id) => {
  document.getElementById("stop").addEventListener("click", function () {
    clearInterval(id);
    document.getElementById('start').removeAttribute('disabled','disabled')
    document.getElementById('stop').setAttribute('disabled','disabled')
  });
};
