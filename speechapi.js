window.addEventListener('DOMContentLoaded', function () {
    (() => {
        const recBtn = document.querySelector('#btn_rec');
        const output = document.querySelector('#output');
        let recording = false;
        let transcricao = '';
        let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new speechRecognition();

        recognition.interimResults = false;
        recognition.lang = "pt-BR";
        recognition.continuous = true;

        recognition.onstart = function () {
            recording = true;
            recBtn.innerHTML = 'gravando!';
        };

        recognition.onend = function () {
            recording = false;
            recBtn.innerHTML = 'gravar?';
        };

        recognition.onresult = function (event) {
            transcricao = event.results[0][0].transcript;
            console.log(transcricao);
            let ss = document.querySelector('#busca');
            ss.value = transcricao;
        };

        recBtn.addEventListener('click', function (e) {
            if (recording) {
                recognition.stop();
                return;
            }
            recognition.start();
        }, false);
    })();
}, false);
