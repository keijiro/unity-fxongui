#pragma strict

function Start() {
	transform.position.x = Screen.width / 2;
	transform.position.y = Screen.height / 2;
	camera.orthographicSize = Screen.height / 2;
}
