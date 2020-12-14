/* Stampare a schermo un messaggio all'interno di un h1, 
utilizzando i data.
Bonus: Aggiungere un'immagine presa anch'essa da un data. */


// inzializziamo Vue

let app = new Vue ({

    // Option objects

    el: "#root",
    data: {         // oggetto Vue che contiene dati
        titolo: "Il mio primo titolo con Vue",
        immagine: "https://code.visualstudio.com/assets/docs/nodejs/vuejs/welcome-to-vue.png" 

    }

});