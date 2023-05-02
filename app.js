console.log('benvenuti in confettini')

function firstTest(){
    confetti({
        particleCount: 36,
        spread: 360,
        origin: { y: 0.5 },
        shapes: ['star'],
        colors: ['#d4af37'],

      });
}

const pippo = document.getElementById('pippo');

const p = document.createElement('p');

const text = document.createTextNode('ciao');

p.appendChild(text);

pippo.appendChild(p);


$('#pippo').append($('<p>').text('ciao jquery'));

const plutoCollection = document.getElementsByClassName('pluto');

const firstPluto = plutoCollection[0];

console.log(firstPluto);

const pluto2 = $('.pluto')[0];

