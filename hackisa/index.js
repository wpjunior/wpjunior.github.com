var buf = document.getElementById('buf'),
    player = document.getElementById('player');


var actions = [
    {type: 'write', text: 'Olá Isabella, tudo bem ?'},
    {type: 'write', text: 'Hoje é uma data comum para muitos, mas me lembrei de uma coisa ..'},
    {type: 'write', text: '4 anos atrás era o dia de sua crisma, o dia que comecei a conversar com você'},
    {type: 'write', text: 'Realmente tinhamos um coração de criança...'},
    {type: 'write', text: 'Como essa música ..'},
    {type: 'audio'},
    {type: 'write', text: 'Sonhavamos com um mundo mágico, e não conheciamos as fronteiras de nossas dores.'},
    {type: 'write', text: 'Hoje esta música faz mais sentido do que antes.'},
    {type: 'write', text: 'Just thank you'},
    {type: 'colorize'},
    {type: 'sleep', time: 6000},
];

var currentAction = 0;
function tickAction() {
    var action = actions[currentAction];

    if (!action) {
        // when finished
        return;
    }

    if (action.type == 'write') {
        tickWrite(action.text);
    } else if (action.type == 'audio') {
        tickAudio();
    } else if (action.type == 'colorize') {
        tickColorize();
    } else if (action.type == 'sleep') {
        tickSleep(action.time);
    } else if (action.type == 'wall') {
        tickWall();
    }
}

function tickWrite(text) {
    var currentPos = 0;
    function write() {
        if (currentPos > text.length) {
            setTimeout(function () {
                currentAction++;
                tickAction();
            }, 2000);
            return;
        }
        setTimeout(function () {
            buf.textContent = text.slice(0, currentPos) + '_';
            currentPos++;
            write();
        }, 100);
    }
    write();
}

function tickAudio() {
    player.play();
    currentAction++;
    tickAction();
}

function tickColorize() {
    document.body.className = 'color';
    currentAction++;
    tickAction();
}

function tickWall() {
    buf.textContent = '';
    document.body.className = 'wall';
    currentAction++;
    tickAction();
}

function tickSleep(time) {
    setTimeout(function () {
        currentAction++;
        tickAction();
    }, time);
}

tickAction();
