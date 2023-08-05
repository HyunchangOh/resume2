document.addEventListener("DOMContentLoaded", function () {
    let docsId = "1I8dT9_IwxtxDiT3jwMqBwuJUppCClcQ2VorDTij3sZM";
    let apiKey = "AIzaSyAGLAwV4t0vj6Fv-yc2uTEfae1-OsTvoA8";
    let sheetId = `simple`;

    const parameter = new URLSearchParams(location.search);
    const page = parseInt(parameter.get("page") ?? 0);

    const nPages = 10;
    let range = `A${page * nPages + 1}:B${page * nPages + nPages}`;
    let url = `https://sheets.googleapis.com/v4/spreadsheets/${docsId}/values/${sheetId}!${range}?key=${apiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((json) => json.values)
        .then((values) => {
            let container = document.getElementById("container");

            if (!values) {
                let div = document.createElement("div");
                div.classList.add("row");
                div.appendChild(document.createTextNode("이 페이지에는 노트가 없어요! "));
                let message = document.createTextNode("3");
                div.appendChild(message);
                div.appendChild(document.createTextNode("초 후 이전 페이지로 이동합니다."));
                container.appendChild(div);

                let secondRemained = 3;
                let intervalId = setInterval(() => {
                    if (--secondRemained === 0) {
                        clearInterval(intervalId);
                        window.history.back();
                    }
                    message.nodeValue = secondRemained;
                }, 1000);

                div = document.createElement("div");
                div.classList.add("row");

                let btn = document.createElement("button");
                btn.classList.add("button-primary");
                btn.appendChild(document.createTextNode("바로 이동"));
                btn.addEventListener("click", function () {
                    window.history.back();
                });

                div.appendChild(btn);
                container.appendChild(div);

                return;
            }

            values.forEach((value) => {
                let dateText = processDate(value[0].trim());
                let text = processMarkdown(value[1]);

                let row = document.createElement("div");
                row.classList.add("row");

                let date = document.createElement("div");
                date.classList.add("two");
                date.classList.add("columns");
                date.appendChild(document.createTextNode(dateText));

                let content = document.createElement("div");
                content.classList.add("ten");
                content.classList.add("columns");
                content.innerHTML = text;
                // content.appendChild(document.createTextNode(text));

                row.appendChild(date);
                row.appendChild(content);
                container.appendChild(row);
            });

            let div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("pagination-holder");

            let left = document.createElement("span");
            left.classList.add("pagination");
            left.appendChild(document.createTextNode("<"));
            left.addEventListener("click", function () {
                window.location = `?page=${page - 1}`;
            });

            let pageElem = document.createElement("span");
            pageElem.appendChild(document.createTextNode("page " + page));

            let right = document.createElement("span");
            right.classList.add("pagination");
            right.appendChild(document.createTextNode(">"));
            right.addEventListener("click", function () {
                window.location = `?page=${page + 1}`;
            });

            div.appendChild(left);
            div.appendChild(pageElem);
            div.appendChild(right);
            container.appendChild(div);

            document.querySelectorAll("pre code").forEach((el) => {
                hljs.highlightElement(el);
            });
        });
});

function processDate(dateText) {
    let dateObj = new Date();
    const todayText = `${dateObj.getFullYear()}. ${dateObj.getMonth() + 1}. ${dateObj.getDate()}.`;
    if (dateText == todayText) {
        dateText = "Today";
    }

    dateObj.setDate(dateObj.getDate() - 1);
    const yesterdayText = `${dateObj.getFullYear()}. ${dateObj.getMonth() + 1}. ${dateObj.getDate()}.`;
    if (dateText == yesterdayText) {
        dateText = "Yesterday";
    }
    return dateText;
}

function processMarkdown(text) {
    // process code
    text = text.replace(/```(\S*)\n([\s\S]*)\n```[^\S\r\n]*(\n(?!>))?/gm, function (match, language, code) {
        code = code.replaceAll("<", "&lt;");
        code = code.replaceAll(">", "&gt;");
        code = code.replaceAll("#", "&#35;");
        code = code.replaceAll("\n", "&#10;");
        code = code.replaceAll(" ", "&nbsp;");
        return `<pre><code class="language-${language ?? "plaintext"}">${code}</code></pre>`;
    });

    // process blockquote
    text = text.replace(/(\n|^)> (.*)[^\S\r\n]*\n?/gm, function (match, _, word) {
        word = word.replaceAll(" ", "&nbsp;");
        return `<blockquote>${word}</blockquote>`;
    });
    text = text.replace("</blockquote><blockquote>", "<br/>");

    // process newline
    text = text.replace(/\n/g, "<br/>");

    // // process tag
    text = text.replace(/\B(\#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-zA-Z_]+)(\b|$|\s)/g, function (match, word) {
        return `<code>${word}</code>`;
    });

    // process image
    text = text.replace(/!\[([^\[]+)\]\((.*)\)/gm, function (match, word, url) {
        word = word.replaceAll(" ", "&nbsp;");
        return `<img src="${url}" alt="${word}">`;
    });

    // process link
    text = text.replace(/\[([^\[]+)\]\((.*)\)/gm, function (match, word, url) {
        word = word.replaceAll(" ", "&nbsp;");
        return `<a href="${url}">${word}</a>`;
    });

    // process bold, italic, underline, highlight, strike
    text = text.replace(/\*\*(((?!\*\*).)*)\*\*/gm, function (match, word) {
        word = word.replaceAll(" ", "&nbsp;");
        return `<strong>${word}</strong>`;
    });
    text = text.replace(/\*([^\*]*)\*/gm, function (match, word) {
        word = word.replaceAll(" ", "&nbsp;");
        return `<em>${word}</em>`;
    });
    text = text.replace(/__(((?!__).)*)__/gm, function (match, word) {
        word = word.replaceAll(" ", "&nbsp;");
        return `<u>${word}</u>`;
    });
    text = text.replace(/==(((?!==).)*)==/gm, function (match, word) {
        word = word.replaceAll(" ", "&nbsp;");
        return `<mark>${word}</mark>`;
    });
    text = text.replace(/~~(((?!~~).)*)~~/gm, function (match, word) {
        word = word.replaceAll(" ", "&nbsp;");
        return `<del>${word}</del>`;
    });

    return text;
}
