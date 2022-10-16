const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
        display: contents;
    }
</style>
<slot></slot>
`;

export class ImgFallback extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const img = this.querySelector('img');
        if (!img) return;

        if (img.complete) {
            if (img.naturalWidth === 0) {
                this.#loadFallback(img);
            }
        } else {
            img.addEventListener('error', this.#onError);
        }
    }

    #onError = (event) => this.#loadFallback(event.target);

    #loadFallback(img) {
        const fallbackSrc = this.getAttribute('src');
        if (!fallbackSrc) return;

        if (img.src === fallbackSrc) return;

        img.src = fallbackSrc;
    }
}
