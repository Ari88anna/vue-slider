// Slider. Al click sulla sulle frecce rendiamo visibile l'immagine successiva o precedente (in base alla freccia sulla quale ho cliccato).
// Lo slider non deve mai rompersi, ma se l'immagine visibile è l'ultima e clicco sulla freccia a destra lo slider mostra la prima.
// Se l'immagine visibile è la prima e clicco sulla freccia a sinistra, lo slider mostra l'ultima.

// Bonus:
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.


var app = new Vue(
    {
        el: '#root',
    
        data: {
            //Indice img attiva in questo momenti
            currentImg: 0,
            //array di immgini da inserire nello slider
            sliderImg: [
                'img/campagna.jpg',
                'img/cascate.webp',
                'img/fiori.jpeg',
                'img/montagne.webp',                
            ]
            


        },
        
        methods: {

        }

    }
    
)