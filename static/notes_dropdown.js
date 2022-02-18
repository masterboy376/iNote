  let dropbtn = document.getElementById('drop-btn-1');
  let dropdown = document.getElementById('dropdown-1');
  let noteStuff = document.getElementById('note-stuff-1');
  let noteContent = document.getElementById('note-content-1');

//------------------------------------------------------------------------------------------------------------------------

noteStuff.addEventListener('click', (e)=>{
  if(noteContent.style.display=='none'){
    noteContent.style.display='block';
  }
  else{
    noteContent.style.display='none';
  }
})

dropbtn.addEventListener('click', function(e){
  noteContent.style.display='none';
  if(dropdown.style.display == 'none'){
    dropdown.style.display ='flex';
    dropdown.style.flexDirection= 'column';
    dropdown.style.justifyContent= 'center';
    dropdown.style.alignItems= 'center';
  }
  else{
    dropdown.style.display ='none';
  }
})
dropbtn.addEventListener('blur', function(e){
  dropdown.style.display='none';
})