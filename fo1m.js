let modDate = new Date('2020 07 20');
console.log('date', modDate );
console.log('local time', modDate.toLocaleString());
let input= document.getElementById('button');
input.addEventListener('click', function () {
    
    let newDate2 = new Date(document.getElementById('inform').value);
    console.log("newDate2",newDate2);
    let enlapsedTime= modDate - newDate2;
    console.log(enlapsedTime );
    let calc = enlapsedTime /1000/60/60/24;
    calc.innerHTML;
})
