var stompClient = null;
var gameStage = [ //
[ 3, 4, 5 ],//
[ 6, 7, 8 ],//
[ 9, 10, 11 ] //
];//
var moves = 0;
var isDone = false;
var myPlayer = 'unknown';

function xoWebSocketConnect() {
	// tworzysz polaczenie na endpoint websocketowy
	var socket = new SockJS(
			'/game-XO/XO-websocket');

	// na podstawie tego polaczenia otwierasz STOMP'a czyli taki protokół do
	// komunikacji web-socketowej (przy pomocy JSONA)
	stompClient = Stomp.over(socket);
	// rejestrujesz za pomocą stompa...(connect)
	stompClient.connect({}, function(frame) {
		// subskrybcje topicu xoTopic
		// subscribe(nazwa, fukcja co zrobic z otrzymanym messagem)
		stompClient.subscribe('/topic/xotopic', function(xoevent) {
			xologic(JSON.parse(xoevent.body));
		});
	});
}

function disconnect() {
	if (stompClient != null) {
		stompClient.disconnect();
	}
}

function sendXoPosition(row, col) {
	if (myPlayer == 'unknown') {
		myPlayer = 'X';
	}

	if (gameStage[row][col] > 2 && isMyTurn() && !isDone) {
		stompClient.send("/topic/xotopic", {}, JSON.stringify({
			'row' : row,
			'col' : col,
			'player' : myPlayer
		}));
	}

}

function xologic(event) {
	if (myPlayer == 'unknown') {
		myPlayer = 'O';
	}
	var box = 'cell_' + event.row + '_' + event.col;

	document.getElementById(box).innerHTML = event.player;

	gameStage[event.row][event.col] = (event.player == 'O' ? 1 : 2);

	checkWin();

	moves++;

	console.log('row: ' + event.row + ' col: ' + event.col + ' player: '
			+ event.player);
}
function isMyTurn() {
	if (myPlayer == 'X' && moves % 2 == 0) {
		return true;
	}
	if (myPlayer == 'O' && moves % 2 != 0) {
		return true;
	}
	return false;
}
function checkWin() {

	if (gameStage[0][0] == gameStage[0][1]
			&& gameStage[0][1] == gameStage[0][2]) {
		isDone = true;
		highlightWinBoxes('cell_0_0', 'cell_0_1', 'cell_0_2');
	}
	if (gameStage[1][0] == gameStage[1][1]
			&& gameStage[1][1] == gameStage[1][2]) {
		isDone = true;
		highlightWinBoxes('cell_1_0', 'cell_1_1', 'cell_1_2');
	}
	if (gameStage[2][0] == gameStage[2][1]
			&& gameStage[2][1] == gameStage[2][2]) {
		isDone = true;
		highlightWinBoxes('cell_2_0', 'cell_2_1', 'cell_2_2');
	}
	if (gameStage[0][0] == gameStage[1][0]
			&& gameStage[1][0] == gameStage[2][0]) {
		isDone = true;
		highlightWinBoxes('cell_0_0', 'cell_1_0', 'cell_2_0');
	}
	if (gameStage[0][1] == gameStage[1][1]
			&& gameStage[1][1] == gameStage[2][1]) {
		isDone = true;
		highlightWinBoxes('cell_0_1', 'cell_1_1', 'cell_2_1');
	}
	if (gameStage[0][2] == gameStage[1][2]
			&& gameStage[1][2] == gameStage[2][2]) {
		isDone = true;
		highlightWinBoxes('cell_0_2', 'cell_1_2', 'cell_2_2');
	}
	if (gameStage[0][0] == gameStage[1][1]
			&& gameStage[1][1] == gameStage[2][2]) {
		isDone = true;
		highlightWinBoxes('cell_0_0', 'cell_1_1', 'cell_2_2');
	}
	if (gameStage[0][2] == gameStage[1][1]
			&& gameStage[1][1] == gameStage[2][0]) {
		isDone = true;
		highlightWinBoxes('cell_0_2', 'cell_1_1', 'cell_2_0');
	}

}
function highlightWinBoxes(box1, box2, box3) {
	if (moves % 2 == 0) {
		document.getElementById(box1).className += ' '
				+ (myPlayer == 'X' ? 'winBox' : 'looseBox');
		document.getElementById(box2).className += ' '
				+ (myPlayer == 'X' ? 'winBox' : 'looseBox');
		document.getElementById(box3).className += ' '
				+ (myPlayer == 'X' ? 'winBox' : 'looseBox');
	} else {
		document.getElementById(box1).className += ' '
				+ (myPlayer == 'O' ? 'winBox' : 'looseBox');
		document.getElementById(box2).className += ' '
				+ (myPlayer == 'O' ? 'winBox' : 'looseBox');
		document.getElementById(box3).className += ' '
				+ (myPlayer == 'O' ? 'winBox' : 'looseBox');
	}
}