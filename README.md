# DrawTexture の上にパーティクルエフェクトを描画するサンプル

DrawTexture の描画の上にパーティクルエフェクトを描画するサンプルです。

![screenshot](http://cloud.github.com/downloads/keijiro/unity-fxongui/screenshot.png)

## どのように実現しているか

GUI.DrawTexture は、どのように設定を行っても、すべてのカメラの描画が終了した後に描画が行われます。この制約を回避するために、GUI.DrawTexture ではなく Graphics.DrawTexture を用いています。

Graphics.DrawTexture による描画であれば、通常のゲームオブジェクトの描画と同じく、レイヤーによって描き分けができます。そこで、次のような 3 つのレイヤーとカメラを用意しました。

1. デフォルトレイヤー / メインカメラ
1. GUI レイヤー / GUI カメラ
1. Post GUI レイヤー/ Post GUI カメラ

このサンプルでは、背後に流れている箱（これもパーティクルエフェクトです）はデフォルトレイヤーに置き、メインカメラで描画しています。その上のチェッカー模様の矩形は GUI レイヤーに属する [GUITest](https://github.com/keijiro/unity-fxongui/blob/master/Assets/GUITest.js) が描画しており、これには Graphics.DrawTexture を使っています。最後に、星の飛び散るエフェクトは Post GUI レイヤーに置き、Post GUI カメラで映しています。

なお、GUI をスクリーン座標系上で描画するには、GUI カメラを画面解像度に併せて調節する必要があります。この処理は [GUICamera スクリプト](https://github.com/keijiro/unity-fxongui/blob/master/Assets/GUICamera.js)の中に実装しました。

## ポイント

- それぞれのカメラで描画対象となるレイヤーを設定するには Culling Mask を使います。
- 最背面を描画するカメラ以外は Clear Flags を Don't Clear にします。
