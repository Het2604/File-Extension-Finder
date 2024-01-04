function getFileExtension() {
    const filenameInput = document.getElementById('filename');
    const resultDiv = document.getElementById('result');

    const filename = filenameInput.value.trim();

    if (filename === '') {
        resultDiv.textContent = 'Please enter a filename.';
    } else {
        const fileExtension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
        resultDiv.textContent = `File extension: ${fileExtension}`;
    }
}