export default {
    methods: {
        onScrollEnd() {
            console.warn("You mast override onScrollEnd");
        },
        onScroll() {
            const modalBody = event.target;
            if (modalBody.clientHeight + modalBody.scrollTop >= modalBody.scrollHeight) {
                this.onScrollEnd();
            }
        }
    }
}