#pragma strict

var texture : Texture2D;

function OnRenderObject() {
	var sw = Screen.width;
	var sh = Screen.height;
	Graphics.DrawTexture(Rect(0.1 * sw, 0.5 * sh - 0.4 * sw, 0.8 * sw, 0.8 * sw), texture);
}
