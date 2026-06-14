# 池田美装 コーポレートサイト

会社紹介用の1ページ（縦スクロール）コーポレートサイトです。素の HTML / CSS / 最小限の JavaScript で作られており、サーバーを選ばず公開できます。

---

## 1. ローカルで表示確認する

`index.html` を **ダブルクリック**すればブラウザで開けます。
（編集後に表示が変わらないときは、ブラウザの再読み込み `⌘R` を押してください。）

---

## 2. 文章の編集箇所

文章はすべて `index.html` の中にあります。下書きなので、自由に書き換えてください。

| セクション | 場所（HTMLのコメント目印） |
|---|---|
| キャッチコピー | `<!-- ② ヒーロー -->` |
| 代表メッセージ | `<!-- ③ 想い・代表メッセージ -->` |
| 事業内容の説明 | `<!-- ④ 事業内容 -->` |
| 選ばれる理由 | `<!-- ⑤ 選ばれる理由 -->` |
| 会社概要 | `<!-- ⑥ 会社概要 -->` |
| 連絡先・SNS | `<!-- ⑦ お問い合わせ -->` |

---

## 3. 画像の差し替え手順

画像は `assets/` フォルダにまとめてください。幅 1600px 以下、できれば WebP か軽量な JPG にすると表示が速くなります。

### ヒーロー画像（トップの大きな背景）
1. 画像を `assets/hero.jpg` として保存。
2. `css/style.css` の `.hero` にある下記コメントを外して有効化し、その下のグラデーション行を削除（またはコメントアウト）。
   ```css
   background: url("../assets/hero.jpg") center / cover no-repeat;
   ```

### 各サービスの写真（4枚）
1. `assets/service-1.jpg` 〜 `assets/service-4.jpg` を用意。
2. `index.html` の各 `<div class="service-thumb">` を、画像タグに置き換え。
   ```html
   <img class="service-thumb" src="assets/service-1.jpg" alt="新築美装" />
   ```
   （差し替えると「写真【要差し替え】」のプレースホルダーは消えます。）

### 代表者の写真
`<!-- ③ 想い -->` 内のコメント位置に
`<img src="assets/representative.jpg" alt="代表 池田 徹郎" />` を追加。

### ロゴ画像（任意）
用意できれば `assets/logo.svg` を置き、`index.html` 上部の `<a class="logo">池田美装</a>` を
`<a class="logo"><img src="assets/logo.svg" alt="池田美装"></a>` に変更。なければテキストロゴのままで構いません。

---

## 4. 「【要記入】」を埋める

公開前に、以下を実際の情報に差し替えてください（`index.html` 内を「要記入」で検索すると見つかります）。

- 会社概要：所在地（番地）・設立・電話番号・メール
- お問い合わせ：電話番号・メール・対応時間（`tel:` `mailto:` の href も忘れずに）
- SNS：Instagram / YouTube の URL（`<!-- ⑦ お問い合わせ -->` の `sns-link` の href）
- フッターの所在地

> **法人化（合同会社池田美装）後**は、会社概要の「屋号」→「社名」、「代表者」→「代表社員」に差し替えてください（該当箇所に HTML コメントを残しています）。

---

## 5. ブランドカラーの変更

色は `css/style.css` の先頭 `:root` にまとまっています。`--brand` を変えれば全体の色が一括で変わります。

```css
:root {
  --brand: #0fa891;  /* ここを変えるだけ */
}
```

---

## 6. 公開（デプロイ）方法

お好きな方法をひとつ選んでください。いずれも無料で公開できます。

### A. GitHub Pages（おすすめ）
1. GitHub にリポジトリを作り、このフォルダ一式を push。
2. リポジトリの **Settings → Pages** で、Branch を `main` / フォルダを `/ (root)` に設定して保存。
3. 数分後に `https://（ユーザー名）.github.io/（リポジトリ名）/` で公開されます。

### B. Netlify / Cloudflare Pages（ドラッグ&ドロップ）
1. [Netlify](https://app.netlify.com/drop) または Cloudflare Pages にログイン。
2. この `ikeda-biso-site` フォルダをブラウザにドラッグ&ドロップするだけで公開。

### C. 既存のレンタルサーバー（FTP）
FTP ソフトで、`index.html`・`css/`・`js/`・`assets/` をまとめて公開フォルダ（`public_html` など）にアップロード。

### 独自ドメイン（例：ikeda-biso.jp など）を使う場合
- **GitHub Pages**：Settings → Pages の「Custom domain」にドメインを入力し、ドメイン側の DNS で CNAME（または A レコード）を GitHub に向ける。
- **Netlify / Cloudflare Pages**：管理画面の「Domain settings」からドメインを追加し、表示される DNS 設定をドメイン会社側で登録。
- ドメインは「お名前.com」「ムームードメイン」などで取得できます。

---

## ファイル構成

```
ikeda-biso-site/
├── index.html        メインページ（文章はここ）
├── css/style.css     デザイン（色は :root で管理）
├── js/main.js        メニュー開閉・フェードイン
├── assets/           画像置き場（hero.jpg / service-*.jpg など）
└── README.md         このファイル
```
