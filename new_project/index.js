showNotes();
let addBtn= document.getElementById('addBtn');
addBtn.addEventListener('click',function(){
    let addTxt= document.getElementById('addTxt');
    let notes=localStorage.getItem('notes');
    if(notes==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(notes);
    }
    noteObj.push(addTxt.value);
    localStorage.setItem('notes',JSON.stringify(noteObj));
    addTxt.value="";
    console.log(noteObj);
    showNotes();
})
function showNotes(){
    let notes=localStorage.getItem('notes');
    if(notes==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(notes);
    }
    let html="";
    noteObj.forEach(function(element,index){
        html+=`
        <div class="noteCard mx-2 my-4" style="width: 19rem;">
        <div class="card-body" style="background-color:rgb(120, 155, 200)">
          <h5 class="card-title card-header bg-warning"> Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deletenote(this.id)" class="btn-sm btn-danger">Delete note</button>
        </div>
      </div>`
      let noteElm= document.getElementById('notes');
      if(noteObj!=0){
          noteElm.innerHTML=html;
      }
      else{
          noteElm.innerHTML='nothing to display';
      }
    });
}
function deletenote(index){
    let notes=localStorage.getItem('notes');
    if(notes==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(notes);
    }
    noteObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(noteObj));
    showNotes();
}
let search= document.getElementById('searchTxt');
search.addEventListener('input',function(){
    let inputval= search.value.toLowerCase();
    let noteCard=document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element){
        let cardTxt=element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })

})