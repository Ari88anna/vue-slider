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
            ],
        },
        
        methods: {
            nextImg() {
                //salviamo l'immagine seguente in una costante che sarà uguale all'immagine attiva + 1
                const followingImg = this.currentImg + 1;

                // Se ci troviamo alla fine dell'array 
                //Ovvero se (l'indice) la prossima immagine è maggiore della lunghezza dell'array delle immagini -1
                if (followingImg > this.sliderImg.length - 1) {

                    //allora l'immagine attiva sarà quella con indice 0, così ricomincia dall'inizio
                    this.currentImg = 0;

                    //se non ci troviamo alla fine dell'array e c'è ancora un'immagine seguente
                } else  {
                    //l'immagine attiva sarà l'immagine seguente(followingImg)
                    this.currentImg = followingImg;
                }
            },

            prevImg() {
                //salviamo l'immagine precedente in una costante che sarà uguale all'immagine attiva - 1 
                const prevImgIndex = this.currentImg - 1;
                // Se ci troviamo all'inizio' dell'array 
                //Ovvero se  la precedente immagine ha indice < 0
                if (prevImgIndex <  0) {

                    //allora l'immagine attiva sarà uguale alla lunghezza dell'array - 1 (l'ultima immagine) 
                    this.currentImg = this.sliderImg.length - 1;

                    //se non ci troviamo all'inizio' dell'array e c'è ancora un'immagine precedente
                } else  {
                    //l'immagine attiva sarà l'immagine precedente(prevImgIndex)
                    this.currentImg = prevImgIndex;
                }
            }
        },

    }
    
)