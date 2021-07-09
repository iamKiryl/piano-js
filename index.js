const piano = document.querySelector('.piano'),
        whiteKeys = document.querySelectorAll('.key.white'),
        note = document.querySelector('.note'),
        blackKeys = document.querySelectorAll('.key.black');

piano.addEventListener('click', (e) => {
    if(e.target.classList.contains('key')){   
        const nodeAudio = document.getElementById(e.target.dataset.note)
        nodeAudio.currentTime = 0;
        e.target.classList.add('active');
        nodeAudio.play();
        note.textContent = nodeAudio.id;
        nodeAudio.addEventListener('ended', () => {
            e.target.classList.remove('active');
            note.textContent = ''
        })
    }
});
