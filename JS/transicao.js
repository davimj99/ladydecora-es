document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {

        // ignora links externos, âncoras e abas novas
        if (
            this.target === '_blank' ||
            this.href.includes('#') ||
            this.href.startsWith('mailto:')
        ) return;

        e.preventDefault();

        const url = this.href;

        document.body.classList.add('page-leave');

        setTimeout(() => {
            window.location.href = url;
        }, 450);
    });
});
