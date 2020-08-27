console.log(`Hello this is my first Project. I hope you like It`);
showNotes();

// Add data of txtArea in Local storage

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }

  noteObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  addTxt.value = "";
  console.log(noteObj);
  showNotes();
});

//function to Add notes in Your Notes

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  let html = "";
  noteObj.forEach(function (element, index) {
    html += `
          <div class="noteCard my-2 mx-2 card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Notes ${index + 1}</h5>
              <p class="card-text">${element}</p>
              <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
          </div>
        </div>
          `;
  });
  let notesEle = document.getElementById("notes");
  if (noteObj.length != 0) {
    notesEle.innerHTML = html;
  } else {
    notesEle.innerHTML = `<h3>Nothing to Show. Use "Add a Note" section above to add note</h3>`;
  }
}

//function to delete a Note
function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  noteObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  showNotes();
}

//Searchtext

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
