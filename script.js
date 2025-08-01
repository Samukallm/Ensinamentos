function AtivaCSS() {
    // Verifica se o CSS já está ativado
    if (!document.getElementById('css-dinamico')) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'style.css';
        link.id = 'css-dinamico';
        document.head.appendChild(link);
    }
}
