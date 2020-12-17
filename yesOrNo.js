const answer = document.querySelector('h2');
const conch_sound = new Audio();

conch_sound.src = "conch.wav";
conch_sound.playbackRate = 1.5;

function getAnswer() {
    answer.innerText = "";
    
    conch_sound.play();

    setTimeout(function() {
        random = Math.floor(Math.random() * 4)
            if(random == 0) {
                answer.innerText = "그럼.";
            } else if(random == 1) {
                answer.innerText = "안 돼.";
            } else if(random == 2) {
                answer.innerText = "언젠가는.";
            } else if(random == 3) {
                answer.innerText = "가만히 있어.";
            }
        }
    , 3000);
}