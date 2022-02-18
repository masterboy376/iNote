// message STUFF  
const messageClose = document.getElementById('message-close');
messageClose.addEventListener('click', (e) => {
  let message = document.getElementById('message');
  message.classList.remove('success');
  message.classList.remove('failure');
})

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

// MODAL STUFF

// Get the modal
var typedModal = document.getElementById("myTypedModal");
// Get the button that opens the modal
var typed_btn = document.getElementById("add-typed-note");
var add_typed_btn = document.getElementById("add-typed-note-btn");
// Get the <span> element that closes the modal
var cancel_typed = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
typed_btn.onclick = function () {
  typedModal.style.display = "block";
}
// on adding eritten note
add_typed_btn.onclick = function () {
  typedModal.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
cancel_typed.onclick = function () {
  typedModal.style.display = "none";
}
//--------------------------------------------------------------------------------------------------------------------
var writtenModal = document.getElementById("myWrittenModal");
// Get the button that opens the modal
var written_btn = document.getElementById("add-written-note");
var add_written_btn = document.getElementById("add-written-note-btn");
// Get the <span> element that closes the modal
var cancel_written = document.getElementsByClassName("close")[1];
// When the user clicks on the button, open the modal
written_btn.onclick = function () {
  writtenModal.style.display = "block";
}
// on adding eritten note
add_written_btn.onclick = function () {
  writtenModal.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
cancel_written.onclick = function () {
  writtenModal.style.display = "none";
}
//--------------------------------------------------------------------------------------------------------------------
// When the user clicks anywhere outside of the modal, close it(for all three modals)
window.onclick = function (event) {
  if ((event.target == typedModal) || (event.target == writtenModal) || (event.target == editModal)) {
    typedModal.style.display = "none";
    writtenModal.style.display = "none";
    editModal.style.display = "none";
  }
}

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

// note STUFF  
class noteObj {
  constructor(title, content, date, isStarred) {
    this.note = {
      title: title,
      content: content,
      date: date,
      isStarred: isStarred
    }
  }
  validateNote() {
    let flag;
    if (this.note.title == null || this.note.content == null) {
      flag = false;
    }
    else if (this.note.title.length < 2 || this.note.content.length < 2) {
      flag = false;
    }
    else {
      flag = true;
    }
    return flag;
  }
  saveNote() {
    let storedNotes = localStorage.getItem('storedNotes');
    let storedNotesArr;
    if (storedNotes == null) {
      storedNotesArr = [];
    }
    else {
      storedNotesArr = JSON.parse(storedNotes);
    }
    storedNotesArr.push(this.note);
    localStorage.setItem('storedNotes', JSON.stringify(storedNotesArr));
  }
  static displayNotes() {
    let savedNotes = document.getElementById('saved-notes');
    savedNotes.innerHTML = ``;
    let uiString = ``;
    let storedNotes = localStorage.getItem('storedNotes');
    if(storedNotes == null){
      uiString = `<p class="text-center">No note here so far!</p>`;
      savedNotes.innerHTML = uiString;
    }
    else if (JSON.parse(storedNotes).length == 0){
      uiString = `<p class="text-center">No note here so far!</p>`;
      savedNotes.innerHTML = uiString;
    }
    else {
      JSON.parse(storedNotes).forEach((element, index) => {
        if (element.isStarred == true) {
          uiString +=
            `
          <div class="note" id="note-${index + 1}">
          <div class="note-stuff" id="note-stuff-${index + 1}">
                  <div class="note-title">
                      <p class="text-bold">Title</p>
                      <p class="text note-title-value" id="note-inner-title-${index + 1}">${element.title}</p>
                  </div>
                  <div class="note-date">
                      <p class="text-bold">Date</p>
                      <p class="text note-date-value">${element.date}</p>
                  </div>
                  <div class="note-option">
                  <p onclick="displayContent(${index + 1})" class="content-toggle" id="content-toggle-${index + 1}">Content <i id="content-toggle-arrow-${index + 1}" class="arrow down"></i></p>
                      <span class="star note-starred-value" id="star-${index + 1}">★</span>
                      <div class="dropdown">
                          <button class="dropbtn" onclick="dropDown(${index + 1})" id="drop-btn-${index + 1}"> &#8942</button>
                          <div style="display: none;" id="dropdown-${index + 1}" class="dropdown-content">
                              <button type="button" onclick="editNote(${index + 1})" class="dropdown-btn"
                                  id="note-edit-${index + 1}">Edit</button>
                              <button type="button" onclick="deleteNote(${index})" class="dropdown-btn"
                                  id="note-delete-${index + 1}">Delete</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="note-content" style="display: none;" id="note-content-${index + 1}">
                  <p class="text-bold">Content</p>
                  <p class="text note-content-value" id="note-inner-content-${index + 1}">${element.content}</p>
              </div>
          </div>
          `;
        }
        else {
          uiString +=
            `
            <div class="note" id="note-${index + 1}">
            <div class="note-stuff" id="note-stuff-${index + 1}">
                    <div class="note-title">
                        <p class="text-bold">Title</p>
                        <p class="text note-title-value" id="note-inner-title-${index + 1}">${element.title}</p>
                    </div>
                    <div class="note-date">
                        <p class="text-bold">Date</p>
                        <p class="text note-date-value">${element.date}</p>
                    </div>
                    <div class="note-option">
                    <p onclick="displayContent(${index + 1})" class="content-toggle" id="content-toggle-${index + 1}">Content <i id="content-toggle-arrow-${index + 1}" class="arrow down"></i></p>
                        <span class="star-hide note-starred-value" id="star-${index + 1}">★</span>
                        <div class="dropdown">
                            <button class="dropbtn" onclick="dropDown(${index + 1})" id="drop-btn-${index + 1}"> &#8942</button>
                            <div style="display: none;" id="dropdown-${index + 1}" class="dropdown-content">
                                <button type="button" onclick="editNote(${index + 1})" class="dropdown-btn"
                                    id="note-edit-${index + 1}">Edit</button>
                                <button type="button" onclick="deleteNote(${index})" class="dropdown-btn"
                                    id="note-delete-${index + 1}">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display: none;" class="note-content" id="note-content-${index + 1}">
                    <p class="text-bold">Content</p>
                    <p class="text note-content-value" id="note-inner-content-${index + 1}">${element.content}</p>
                </div>
            </div>
          `;
        }
      });
      savedNotes.innerHTML = uiString;
    }
  }
  static reverseDisplayNotes() {
    let savedNotes = document.getElementById('saved-notes');
    savedNotes.innerHTML = ``;
    let uiString = ``;
    let storedNotes = localStorage.getItem('storedNotes');
    if(storedNotes == null){
      uiString = `<p class="text-center">No note here so far!</p>`;
      savedNotes.innerHTML = uiString;
    }
    else if (JSON.parse(storedNotes).length == 0){
      uiString = `<p class="text-center">No note here so far!</p>`;
      savedNotes.innerHTML = uiString;
    }
    else {
      JSON.parse(storedNotes).reverse().forEach((element, index) => {
        if (element.isStarred == true) {
          uiString +=
            `
          <div class="note" id="note-${index + 1}">
          <div class="note-stuff" id="note-stuff-${index + 1}">
                  <div class="note-title">
                      <p class="text-bold">Title</p>
                      <p class="text note-title-value" id="note-inner-title-${index + 1}">${element.title}</p>
                  </div>
                  <div class="note-date">
                      <p class="text-bold">Date</p>
                      <p class="text">${element.date}</p>
                  </div>
                  <div class="note-option">
                  <p onclick="displayContent(${index + 1})" class="content-toggle" id="content-toggle-${index + 1}">Content <i id="content-toggle-arrow-${index + 1}" class="arrow down"></i></p>
                      <span class="star note-starred-value" id="star-${index + 1}">★</span>
                      <div class="dropdown">
                          <button class="dropbtn" onclick="dropDown(${index + 1})" id="drop-btn-${index + 1}"> &#8942</button>
                          <div style="display: none;" id="dropdown-${index + 1}" class="dropdown-content">
                              <button type="button" onclick="editNote(${index + 1})" class="dropdown-btn"
                                  id="note-edit-${index + 1}">Edit</button>
                              <button type="button" onclick="deleteNote(${index})" class="dropdown-btn"
                                  id="note-delete-${index + 1}">Delete</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="note-content" style="display: none;" id="note-content-${index + 1}">
                  <p class="text-bold">Content</p>
                  <p class="text note-content-value" id="note-inner-content-${index + 1}">${element.content}</p>
              </div>
          </div>
          `;
        }
        else {
          uiString +=
            `
            <div class="note" id="note-${index + 1}">
            <div class="note-stuff" id="note-stuff-${index + 1}">
                    <div class="note-title">
                        <p class="text-bold">Title</p>
                        <p class="text note-title-value" id="note-inner-title-${index + 1}">${element.title}</p>
                    </div>
                    <div class="note-date">
                        <p class="text-bold">Date</p>
                        <p class="text">${element.date}</p>
                    </div>
                    <div class="note-option">
                    <p onclick="displayContent(${index + 1})" class="content-toggle" id="content-toggle-${index + 1}">Content <i id="content-toggle-arrow-${index + 1}" class="arrow down"></i></p>
                        <span class="star-hide note-starred-value" id="star-${index + 1}">★</span>
                        <div class="dropdown">
                            <button class="dropbtn" onclick="dropDown(${index + 1})" id="drop-btn-${index + 1}"> &#8942</button>
                            <div style="display: none;" id="dropdown-${index + 1}" class="dropdown-content">
                                <button type="button" onclick="editNote(${index + 1})" class="dropdown-btn"
                                    id="note-edit-${index + 1}">Edit</button>
                                <button type="button" onclick="deleteNote(${index})" class="dropdown-btn"
                                    id="note-delete-${index + 1}">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display: none;" class="note-content" id="note-content-${index + 1}">
                    <p class="text-bold">Content</p>
                    <p class="text note-content-value" id="note-inner-content-${index + 1}">${element.content}</p>
                </div>
            </div>
          `;
        }
      });
      savedNotes.innerHTML = uiString;
    }
  }
  static clear() {
    let typedForm = document.getElementById('typed-form');
    typedForm.reset();
  }
  static showSuccess() {
    let message = document.getElementById('message');
    let messageText = document.getElementById('message-text');
    message.classList.remove('failure');
    message.classList.add('success');
    messageText.innerHTML = `<strong>Success!</strong> Your note has been successfully added.`;
    setTimeout(() => {
      message.classList.remove('success');
    }, 2000);
  }
  static showFailure() {
    let message = document.getElementById('message');
    let messageText = document.getElementById('message-text');
    message.classList.remove('success');
    message.classList.add('failure');
    messageText.innerHTML = `<strong>Failed!</strong> You have entered an invalid note content.`;
    setTimeout(() => {
      message.classList.remove('failure');
    }, 2000);
  }
}

noteObj.displayNotes();

let addTypedNoteBtn = document.getElementById('add-typed-note-btn');
addTypedNoteBtn.addEventListener('click', addNote);

function addNote(e) {
  e.preventDefault();
  let date = new Date();
  let typedDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  let typedTitle = document.getElementById('typed-title').value;
  let typedContent = document.getElementById('typed-content').value;
  let typedStarred;
  if (document.getElementById('typed-starred').checked) {
    typedStarred = true;
  }
  else {
    typedStarred = false;
  }
  let note = new noteObj(typedTitle, typedContent, typedDate, typedStarred);
  if (note.validateNote()) {
    note.saveNote();
    noteObj.displayNotes();
    noteObj.clear();
    noteObj.showSuccess();
  }
  else {
    noteObj.showFailure();
  }
  console.log(note);

}

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

// dropdown STUFF

function dropDown(id) {
  const dropdown = document.getElementById(`dropdown-${id}`);
  if (dropdown.style.display == 'none') {
    dropdown.style.display = 'flex';
    dropdown.style.flexDirection = 'column';
    dropdown.style.justifyContent = 'center';
    dropdown.style.alignItems = 'center';
  }
  else {
    dropdown.style.display = 'none';
  }
}

function displayContent(id) {
  let noteContent = document.getElementById(`note-content-${id}`);
  let contentToggle = document.getElementById(`content-toggle-arrow-${id}`);
  if (noteContent.style.display == 'none') {
    noteContent.style.display = 'block';
    contentToggle.classList.remove('down');
    contentToggle.classList.add('up');
  }
  else {
    noteContent.style.display = 'none';
    contentToggle.classList.remove('up');
    contentToggle.classList.add('down');
  }
}

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

// edit STUFF
function deleteNote(id) {
  let storedNotes = localStorage.getItem('storedNotes');
  let storedNotesArr;
  if (storedNotes == null) {
    storedNotesArr = [];
  }
  else {
    storedNotesArr = JSON.parse(storedNotes);
  }
  storedNotesArr.splice(id, 1);
  localStorage.setItem('storedNotes', JSON.stringify(storedNotesArr));
  noteObj.displayNotes();
}


const editModal = document.getElementById("myEditModal");
const edit_typed_btn = document.getElementById("edit-typed-note-btn");
function editNote(id) {
  editModal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  var cancel_edit = document.getElementsByClassName("close")[2];
  cancel_edit.onclick = function () {
    editModal.style.display = "none";
  }
  //------------------------------------------------------------------

   //modal values
   let oldTypedTitle = document.getElementById('edit-typed-title');
   let oldTypedContent = document.getElementById('edit-typed-content');
   let oldTypedStarred = document.getElementById('edit-typed-starred');
   oldTypedTitle.value = document.getElementById(`note-inner-title-${id}`).innerText;
   oldTypedContent.value = document.getElementById(`note-inner-content-${id}`).innerText;
   if ((document.getElementById(`star-${id}`)).classList.contains('star')) {
     oldTypedStarred.checked = true;
   }
   else {
     oldTypedStarred.checked = false;
   }
   //------------------------------------------------------------------

  //updating values

  edit_typed_btn.addEventListener('click', (e) => {
    e.preventDefault();

    let date = new Date();
    let newTypedDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    let newTypedTitle = document.getElementById('edit-typed-title');
    let newTypedContent = document.getElementById('edit-typed-content');
    let newTypedIsStarred;
    if (document.getElementById('edit-typed-starred').checked) {
      newTypedIsStarred = true;
    }
    else {
      newTypedIsStarred = false;
    }
    let newNote = {
      title: newTypedTitle.value,
      content: newTypedContent.value,
      date: newTypedDate,
      isStarred: newTypedIsStarred
    }
    let storedNotes = localStorage.getItem('storedNotes');
    let storedNotesArr;
    if (storedNotes == null) {
      storedNotesArr = [];
    }
    else {
      storedNotesArr = JSON.parse(storedNotes);
    }
    storedNotesArr.splice((id - 1), 1);
    storedNotesArr.push(newNote)
    localStorage.setItem('storedNotes', JSON.stringify(storedNotesArr));
    noteObj.displayNotes();



    editModal.style.display = "none";
  })
}


//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

// search and filter STUFF
let searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
  let inputVal = searchInput.value;
  let note = document.getElementsByClassName('note');
  Array.from(note).forEach((element, index) => {
    let noteContent = element.getElementsByClassName('note-content-value')[0];
    let noteTitle = element.getElementsByClassName('note-title-value')[0];
    let noteDate = element.getElementsByClassName('note-date-value')[0];
    if (((noteTitle.innerText).includes(inputVal)) || ((noteContent.innerText).includes(inputVal)) ||((noteDate.innerText).includes(inputVal))) {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  });
});


let switchStarred = document.getElementById('switch-starred');

switchStarred.addEventListener('click', (e) => {
  let note = document.getElementsByClassName('note');
  Array.from(note).forEach((element, index) => {
    if (switchStarred.checked) {
      let noteSarred = element.getElementsByClassName('note-starred-value')[0];
      if (noteSarred.classList.contains('star-hide')) {
        element.style.display = 'none';
      }
      else {
        element.style.display = 'block';
      }
    }
    else {
      element.style.display = 'block';
    }
  });
});



//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------



