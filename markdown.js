const h1 = /^#\s(.*$)/gm
const h2 = /^##\s(.*$)/gm
const h3 = /^###\s(.*$)/gm
const h4 = /^####\s(.*$)/gm
const h5 = /^#####\s(.*$)/gm
const h6 = /^######\s(.*$)/gm

const code = /`(.*?)`/gm

const link = /\[([^\]]+)\]\(([^\)]+)\)/gm
const bold = /\*\*([^\*|\s]+)\*\*/gm
const ib = /\*\*\*([^\*|\s]+)\*\*\*/gm

const li = /- (.*$)/gm
const dli = /- - (.*$)/gm

/**
 * 
 * @param {String} str 
 */
export function parse(str) {
    return str
        .replace(h1, "<h1 id=\"$1\">$1</h1><hr>")
        .replace(h2, "<h2 id=\"$1\">$1</h2>")
        .replace(h3, "<h3 id=\"$1\">$1</h3>")
        .replace(h4, "<h4 id=\"$1\">$1</h4>")
        .replace(h5, "<h5 id=\"$1\">$1</h5>")
        .replace(h6, "<h6 id=\"$1\">$1</h3>")
        .replace(/\n\n/gm, "<br>")
        .replace(dli, "<li class=\"tab\">$1</li>")
        .replace(li, "<li>$1</li>")
        .replace(link, "<a href=\"$2\">$1</a>")
        .replace(code, "<code>$1</code>")
        .replace(ib, "<b><i>$1</i></b>")
        .replace(bold, "<b>$1</b>")
}