Here's an **awesome README** template for your `yt_live` library. It includes all the essential sections to make your library stand out and be easy to use for developers.

---

# `yt_live`

Easily generate embeddable YouTube Live stream iframes with full control over attributes like `picture-in-picture`, `web-share`, and `fullscreen`. This lightweight library works seamlessly across modern JavaScript frameworks and is also available via a CDN.

![yt_live](https://img.shields.io/npm/v/yt_live?color=blue&style=flat-square)  
![License](https://img.shields.io/npm/l/yt_live?color=green&style=flat-square)  
![Downloads](https://img.shields.io/npm/dm/yt_live?color=orange&style=flat-square)

---

## Features ✨

- **Flexible Iframe Attributes**: Customize `picture-in-picture`, `web-share`, and `fullscreen` options.
- **Modern Support**: Works with CommonJS, ES Modules, and UMD for browser usage.
- **Lightweight**: Minimal footprint with no external dependencies.
- **Framework Agnostic**: Use with React, Angular, Vue, or plain JavaScript.

---

## Installation 📦

### Via npm/yarn

```bash
# npm
npm install yt_live

# yarn
yarn add yt_live
```

### Via CDN

Add the following script to your HTML:
```html
<script src="https://cdn.jsdelivr.net/npm/yt_live/dist/yt_live.umd.js"></script>
```

---

## Usage 🚀

### Import in Your Project

#### CommonJS (Node.js)
```javascript
const { generateIframe } = require('yt_live');

const iframeHTML = generateIframe('UC_x5XG1OV2P6uZZ5FSM9Ttw', 800, 450);
console.log(iframeHTML);
```

#### ES Modules
```javascript
import { generateIframe } from 'yt_live';

const iframeHTML = generateIframe('UC_x5XG1OV2P6uZZ5FSM9Ttw', 800, 450);
console.log(iframeHTML);
```

#### Browser (via CDN)
```html
<script src="https://cdn.jsdelivr.net/npm/yt_live/dist/yt_live.umd.js"></script>
<script>
    const iframeHTML = Ytlive.generateIframe('UC_x5XG1OV2P6uZZ5FSM9Ttw', 800, 450);
    console.log(iframeHTML);
</script>
```

---

## API Reference 📖

### `generateIframe(id, width, height, options)`

Generates the HTML string for an iframe that embeds a YouTube Live stream.

#### Parameters:

| Parameter  | Type   | Required | Description                                                                                 |
|------------|--------|----------|---------------------------------------------------------------------------------------------|
| `id`       | string | Yes      | The YouTube channel ID of the live stream.                                                 |
| `width`    | number | Yes      | The width of the iframe.                                                                   |
| `height`   | number | Yes      | The height of the iframe.                                                                  |
| `options`  | object | No       | Optional attributes for `picture-in-picture`, `web-share`, and `fullscreen` (default: `true`). |

#### Options:

| Option             | Type    | Default | Description                                                                 |
|--------------------|---------|---------|-----------------------------------------------------------------------------|
| `pictureInPicture` | boolean | `true`  | Enables or disables picture-in-picture mode.                               |
| `webShare`         | boolean | `true`  | Enables or disables web-sharing capabilities.                              |
| `allowFullscreen`  | boolean | `true`  | Controls whether the iframe allows fullscreen mode.                        |

#### Example:

```javascript
const iframeHTML = generateIframe('UC_x5XG1OV2P6uZZ5FSM9Ttw', 800, 450, {
    pictureInPicture: false,
    webShare: false,
    allowFullscreen: true,
});

console.log(iframeHTML);
```

---

## Examples 🔥

### React Example

```jsx
import React from 'react';
import { generateIframe } from 'yt_live';

const App = () => {
    const iframeHTML = generateIframe('UC_x5XG1OV2P6uZZ5FSM9Ttw', 800, 450);
    
    return (
        <div dangerouslySetInnerHTML={{ __html: iframeHTML }} />
    );
};

export default App;
```

### Plain HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/yt_live/dist/yt_live.umd.js"></script>
</head>
<body>
    <div id="live-iframe"></div>

    <script>
        const iframeHTML = Ytlive.generateIframe('UC_x5XG1OV2P6uZZ5FSM9Ttw', 800, 450);
        document.getElementById('live-iframe').innerHTML = iframeHTML;
    </script>
</body>
</html>
```

---

## License 📝

This project is licensed under the [MIT License](LICENSE).

---

## Contributing 🤝

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

---

## Support 💬

If you encounter any issues or have questions, feel free to open an issue on [GitHub](https://github.com/your-username/yt_live/issues).

---

Enjoy using `yt_live`? Show some ❤️ by starring the repo! 🌟