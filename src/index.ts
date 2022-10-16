export default class ImgFallback extends HTMLElement {
    private mutationObserver?: MutationObserver;
    private img?: HTMLImageElement;

    public constructor() {
        super();
        this.style.display = 'contents';
    }

    public connectedCallback() {
        this.setImg(this.firstElementChild);

        this.mutationObserver = new MutationObserver(this.onMutation);
        this.mutationObserver.observe(this, {
            childList: true
        })
    }

    public disconnectedCallback() {
        this.mutationObserver?.disconnect();
        this.setImg(null);
    }

    private onMutation = () => this.setImg(this.firstElementChild);

    private onImgError = (event: Event) => this.loadFallback(event.target as HTMLImageElement);

    private setImg(img: Element | null) {
        if (img === this.img) return;

        if (this.img) {
            this.img.removeEventListener('error', this.onImgError);
        }

        if (!(img instanceof HTMLImageElement)) {
            this.img = undefined;
            return;
        }

        if (img.complete && img.naturalWidth === 0) {
            this.loadFallback(img);
        }

        img.addEventListener('error', this.onImgError);

        this.img = img;
    }

    private loadFallback(img: HTMLImageElement) {
        const fallbackSrc = this.getAttribute('src');
        if (!fallbackSrc) return;

        if (img.src === fallbackSrc) return;

        img.src = fallbackSrc;
    }
}
