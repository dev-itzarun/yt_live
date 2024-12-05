# `yt_live`

Easily generate embeddable YouTube Live stream iframes by passing just the **YouTube channel ID**. This lightweight library works seamlessly across modern JavaScript frameworks and browsers, making it simple to embed YouTube Live streams in your projects.

![yt_live](https://img.shields.io/npm/v/yt_live?color=blue&style=flat-square)  
![License](https://img.shields.io/npm/l/yt_live?color=green&style=flat-square)  
![Downloads](https://img.shields.io/npm/dm/yt_live?color=orange&style=flat-square)

---

## Features ✨

- **Quick Integration**: Simply pass the YouTube channel ID.
- **Modern Support**: Works with CommonJS, ES Modules, and UMD.
- **Flexible Attributes**: Options for picture-in-picture, web-share, and fullscreen controls.
- **Lightweight**: No external dependencies.

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

Add this script to your HTML to use the library directly in the browser:
```html
<script src="https://cdn.jsdelivr.net/npm/yt_live/dist/yt_live.umd.js"></script>
```

---

## Usage 🚀

### Import in Your Project

#### CommonJS (Node.js)
```javascript
const { generateIframe } = require('yt_live');

// Replace 'UC8Z-VjXBtDJTvq6aqkIskPg' with your YouTube channel ID
const iframeHTML = generateIframe('UC8Z-VjXBtDJTvq6aqkIskPg', 800, 450);
console.log(iframeHTML);
```

#### ES Modules
```javascript
import { generateIframe } from 'yt_live';

// Replace 'UC8Z-VjXBtDJTvq6aqkIskPg' with your YouTube channel ID
const iframeHTML = generateIframe('UC8Z-VjXBtDJTvq6aqkIskPg', 800, 450);
console.log(iframeHTML);
```

#### Browser (via CDN)
```html
<script src="https://cdn.jsdelivr.net/npm/yt_live/dist/yt_live.umd.js"></script>
<script>
    // Replace 'UC8Z-VjXBtDJTvq6aqkIskPg' with your YouTube channel ID
    const iframeHTML = Ytlive.generateIframe('UC8Z-VjXBtDJTvq6aqkIskPg', 800, 450);
    console.log(iframeHTML);
</script>
```

---

### How to Find Your YouTube Channel ID 🔍

Follow these steps to locate your YouTube Channel ID:

1. **Sign in** to your YouTube account.  
2. Click on your **profile picture** in the top-right corner and select **Settings** from the dropdown menu.  
3. In the left-hand menu, choose **Advanced Settings**.  
4. Your **Channel ID** will be displayed under the "Channel settings" section.  

For more details, visit **[YouTube Advanced Settings](https://www.youtube.com/account_advanced)**.  

Use this Channel ID in the `generateIframe` function to embed your YouTube Live stream! 🎥

---

## API Reference 📖

### `generateIframe(id, width, height, options)`

Generates the HTML string for an iframe to embed a YouTube Live stream.

#### Parameters:

| Parameter  | Type   | Required | Description                                                                             |
|------------|--------|----------|-----------------------------------------------------------------------------------------|
| `id`       | string | Yes      | The YouTube channel ID of the live stream.                                              |
| `width`    | number | Yes      | The width of the iframe.                                                               |
| `height`   | number | Yes      | The height of the iframe.                                                              |
| `options`  | object | No       | Optional attributes for `picture-in-picture`, `web-share`, and `fullscreen` (default: `true`). |

#### Options:

| Option             | Type    | Default | Description                                                    |
|--------------------|---------|---------|----------------------------------------------------------------|
| `pictureInPicture` | boolean | `true`  | Enables or disables picture-in-picture mode.                  |
| `webShare`         | boolean | `true`  | Enables or disables web-sharing capabilities.                 |
| `allowFullscreen`  | boolean | `true`  | Controls whether the iframe allows fullscreen mode.           |

#### Example:

```javascript
const iframeHTML = generateIframe('UC8Z-VjXBtDJTvq6aqkIskPg', 800, 450, {
    pictureInPicture: false,
    webShare: false,
    allowFullscreen: true,
});

console.log(iframeHTML);
```

---

## Framework Examples 🔥

### React Example

```jsx
import React from 'react';
import { generateIframe } from 'yt_live';

const App = () => {
    const iframeHTML = generateIframe('UC8Z-VjXBtDJTvq6aqkIskPg', 800, 450);
    
    return (
        <div dangerouslySetInnerHTML={{ __html: iframeHTML }} />
    );
};

export default App;
```

---

### Svelte Example

```svelte
<script>
import { generateIframe } from 'yt_live/dist/yt_live.esm.js';

    let iframeHTML = generateIframe('UC8Z-VjXBtDJTvq6aqkIskPg', 800, 450);
</script>

{@html iframeHTML}
```

---

### Angular Example

```typescript
import { Component } from '@angular/core';
import { generateIframe } from 'yt_live';

@Component({
  selector: 'app-root',
  template: `<div [innerHTML]="iframeHTML"></div>`,
})
export class AppComponent {
  iframeHTML = generateIframe('UC8Z-VjXBtDJTvq6aqkIskPg', 800, 450);
}
```

---

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
        const iframeHTML = Ytlive.generateIframe('UC8Z-VjXBtDJTvq6aqkIskPg', 800, 450);
        document.getElementById('live-iframe').innerHTML = iframeHTML;
    </script>
</body>
</html>
```

---

## License 📝

This project is licensed under the [MIT License](LICENSE).  
Developed and published by **AhopeZ Innovations**.

---

## Support 💬

If you encounter any issues or have questions, feel free to open an issue on [GitHub](https://github.com/your-username/yt_live/issues).  

---

Enjoy using `yt_live`? Show some ❤️ by starring the repo! 🌟