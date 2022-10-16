## Usage
```javascript
import ImgFallback from 'path/to/module';
window.customElements.define('img-fallback', ImgFallback);
```
```html
<img-fallback src="https://example.com/fallback-image.png">
    <img src="https://example.com/intended-image.png">
</img-fallback>
```

## Installation
### Install via NPM:
```shell
npm i @mschreiber68/img-fallback
```

### Download via CDN:
```html
<script type="module">
    import ImgFallback from 'https://unpkg.com/@mschreiber68/img-fallback@0.0.2/index.js'
    window.customElements.define('img-fallback', ImgFallback);
</script>
```

With either installation method, you must register the component as a custom element.
This allows you to customize the name of the element.

## Features
* Custom element name is defined by user
* Supports mutations (add/modify/remove) of wrapped `<img>` element
* Uses `display: contents;` so the `<img>` can be treated by layout styles as if the `<img-fallback>` isn't there.
* As a web component that doesn't modify its internal DOM, `<img-fallback>` is compatible with any frontend framework.

## Demo
https://mschreiber68.github.io/img-fallback/demo.html