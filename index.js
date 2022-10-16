export default class ImgFallback extends HTMLElement {
    #mutationObserver
    #img

    constructor() {
        super();
        this.style.display = 'contents';
    }

    connectedCallback() {
        this.#setImg(this.firstElementChild);

        this.#mutationObserver = new MutationObserver(this.#onMutation);
        this.#mutationObserver.observe(this, {
            childList: true
        })
    }

    disconnectedCallback() {
        this.#mutationObserver.disconnect();
        this.#setImg(null);
    }

    #onMutation = () => {
        this.#setImg(this.firstElementChild);
    }

    #onImgError = (event) => this.#loadFallback(event.target);

    #setImg(img) {
        if (img === this.#img) return;

        if (this.#img) {
            this.#img.removeEventListener('error', this.#onImgError);
        }

        if (!(img instanceof HTMLImageElement)) {
            this.#img = null;
            return;
        }

        if (img.complete && img.naturalWidth === 0) {
            this.#loadFallback(img);
        }

        img.addEventListener('error', this.#onImgError);

        this.#img = img;
    }

    #loadFallback(img) {
        const fallbackSrc = this.getAttribute('src');
        if (!fallbackSrc) return;

        if (img.src === fallbackSrc) return;

        img.src = fallbackSrc;
    }
}
