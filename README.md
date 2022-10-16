`<img-fallback>` is a web component that wraps an `<img>` element. 
It takes a `src` attribute. 
If the wrapped image fails to load, the component will attempt to have the `<img>` fallback to the image specified in the component's `src`.

`<img-fallback>` uses `display: contents` in order to not act as a block around the image it wraps. 
This allows the component to act as a pure decorator for the `<img>` within, so users can continue to develop with the `<img>` as they normally would.

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

## Features



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