// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
function replaceText() {
    const paragraphs = document.querySelectorAll('li');

    paragraphs.forEach(paragraph => {
        paragraph.innerHTML = paragraph.innerHTML
            .replace(/\s*\(at\)\s*/g, '@')
            .replace(/\s*\(dot\)\s*/g, '.');
    });
}

window.addEventListener('load', replaceText);
// @license-end