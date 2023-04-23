function saveText() {
    const textInputArea = document.getElementById("codeEditor-g2K2Gt");
    const textInput = textInputArea.value;

    if (textInput == "") {
        alert("Nothing to save!");
        return;
    }

    const navbarSaveItem = document.getElementById("save-1Y5dVO");
    navbarSaveItem.href = "data:text/plain;charset=utf-8," + encodeURIComponent(textInput);

    if (!navbarSaveItem.download) {
        navbarSaveItem.download = "untitled.txt";
    }

}

function textFileExtension(fileExtension) {
    const navbarSaveItem = document.getElementById("save-1Y5dVO");
    navbarSaveItem.download = `untitled${fileExtension}`;
    alert(`File extension changed to ${fileExtension}`);
}