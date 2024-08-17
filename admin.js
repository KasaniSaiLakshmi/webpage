// Function to add a new sticky note
function addStickyNote() {
    const noteText = document.getElementById('sticky-note-text').value;
    if (noteText.trim() !== '') {
        const note = {
            type: 'stickyNote',
            message: noteText
        };
        localStorage.setItem('newStickyNote', JSON.stringify(note));
        window.opener.postMessage(note, '*');
        document.getElementById('sticky-note-text').value = '';
    }
}
