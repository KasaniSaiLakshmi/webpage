// Sample employee data
const employee = {
    name: "John Doe",
    position: "Software Developer",
    department: "Engineering",
    email: "john.doe@example.com",
    phone: "123-456-7890",
};

// Display employee information
const employeeInfo = document.getElementById('employee-info');
employeeInfo.innerHTML = `
    <p><strong>Name:</strong> ${employee.name}</p>
    <p><strong>Position:</strong> ${employee.position}</p>
    <p><strong>Department:</strong> ${employee.department}</p>
    <p><strong>Email:</strong> ${employee.email}</p>
    <p><strong>Phone:</strong> ${employee.phone}</p>
`;

// Retrieve sticky notes from local storage or use an empty array if none exist
let stickyNotes = JSON.parse(localStorage.getItem('stickyNotes')) || [];

// Display existing sticky notes
const stickyNotesContainer = document.getElementById('sticky-notes');
stickyNotes.forEach(note => {
    const noteElement = createStickyNoteElement(note);
    stickyNotesContainer.appendChild(noteElement);
});

// Function to create a new sticky note element
function createStickyNoteElement(note) {
    const noteElement = document.createElement('div');
    noteElement.classList.add('sticky-note');
    noteElement.innerText = note.message;
    return noteElement;
}

// Add event listener for receiving new sticky notes from admin dashboard
window.addEventListener('message', event => {
    if (event.data.type === 'stickyNote') {
        const newNote = {
            message: event.data.message
        };
        stickyNotes.push(newNote);
        localStorage.setItem('stickyNotes', JSON.stringify(stickyNotes));
        const noteElement = createStickyNoteElement(newNote);
        stickyNotesContainer.appendChild(noteElement);
    }
});
