const codeEditor = document.getElementById('codeEditor-g2K2Gt');
const lineCounter = document.getElementById('lineCounter-HU1WEJ');

var lineCountCache = 0;
function line_counter() {
    const lineCount = codeEditor.value.split('\n').length;
    const outarr = new Array();
    if (lineCountCache != lineCount) {
        for (var line = 0; line < lineCount; line++) {
            outarr[line] = (line + 1) + '.';
        }
        lineCounter.value = outarr.join('\n');
    }
    lineCountCache = lineCount;
}

codeEditor.addEventListener('scroll', () => {
    lineCounter.scrollTop = codeEditor.scrollTop;
    lineCounter.scrollLeft = codeEditor.scrollLeft;
});

codeEditor.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
        const start = codeEditor.selectionStart
        const end = codeEditor.selectionEnd

        codeEditor.value = codeEditor.value.substring(0, start) + '\t' + codeEditor.value.substring(end)

        event.preventDefault();
    }

    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
    }

});

codeEditor.addEventListener('input', () => {
    line_counter();
});