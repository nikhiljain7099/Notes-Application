showNotes();
let addBtn=document.getElementById("addBtn");
let addTxt=document.getElementById("addTxt");
addBtn.addEventListener('click',function(){
  
  let notes=localStorage.getItem('notes');
  if(notes==null){
    notesObj=[];
  }
  else{
    notesObj=JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem('notes',JSON.stringify(notesObj));
  addTxt.value="";
  showNotes();
});
function showNotes(){
  let notes=localStorage.getItem('notes');
  if(notes==null){
    notesObj=[];
  }
  else{
    notesObj=JSON.parse(notes);
  }
  let div=document.getElementById("notes");
  let html="";
  Array.from(notesObj).forEach(function(element,index){
    html+=`
    <div class="noteCard card mx-2 my-3" style="width: 18rem">
     <div class="card-body">
       <h5 class="card-title">Note ${index+1}</h5>
       <p class="card-text">${element}</p>
       <a id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary" style="color:white">Delete Note</a>
     </div>
   </div>
    `;
    div.innerHTML=html;
  });
}

//for deleting notes
function deleteNote(index){
  let notes=localStorage.getItem('notes');
  if(notes==null){
    notesObj=[];
  }
  else{
    notesObj=JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem('notes',JSON.stringify(notesObj));
  showNotes();
}

let searchTxt=document.getElementById("searchTxt");
searchTxt.addEventListener('input',function(){
  let inputVal=searchTxt.value;
  let noteCard=document.getElementsByClassName("noteCard");
  Array.from(noteCard).forEach(function(element){
    let cardTxt=element.getElementsByTagName('p')[0].innerText;
    if(cardTxt.includes(inputVal)){
      element.style.display="block";
    }
    else{
      element.style.display="none";
    }
  });
});



// showNotes();

// //adding note to local storage
// addBtn=document.getElementById("addBtn");
// addTxt=document.getElementById("addTxt");
// addBtn.addEventListener('click',function(){
//   let notes=localStorage.getItem('notes');
  
//   if(notes==null){
//     notesObj=[];
//   }
//   else{
//     notesObj=JSON.parse(notes);

//   }
//   notesObj.push(addTxt.value);
//   localStorage.setItem('notes',JSON.stringify(notesObj));
//   addTxt.value="";
//   showNotes();
// });

// //FOR SHOWING NOTES
// function showNotes(){
//   let div=document.getElementById('notes');
//   let notes =  localStorage.getItem('notes');
//   if(notes==null){
//     notesObj=[];
//   }
//   else{
//     notesObj=JSON.parse(notes);
//   }
//   html="";
//   Array.from(notesObj).forEach(function(element,index){
//     html=html+`<div  class="noteCard card mx-2 my-3" style="width: 18rem">
//     <div class="card-body">
//       <h5 class="card-title">Note ${index+1}</h5>
//       <p class="card-text">${element}</p>
//       <a id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary" style="color:white">Delete Note</a>
//     </div>
//   </div>`
//   });
//   div.innerHTML=html;
// }

// //FOR DELETING NOTES
// function deleteNote(index){
//   let notes=localStorage.getItem('notes');
//   if(notes==null){
//     notesObj=[];
//   }
//   else{
//     notesObj=JSON.parse(notes);
//   }
//   notesObj.splice(index,1);
//   localStorage.setItem('notes',JSON.stringify(notesObj));
//   showNotes();
// }



// // console.log("This is main js");
// // showNotes();
// // // adding note to localStorage
// // let addTxt=document.getElementById("addTxt");

// // let addBtn=document.getElementById("addBtn");
// // console.log(addBtn);
// // addBtn.addEventListener('click',function(){
// //     let notes=localStorage.getItem("notes");
// //     if(notes==null){
// //         notesObj=[];
// //     }
// //     else{
// //         //Converting into array
// //         notesObj=JSON.parse(notes);
// //     }
// //     notesObj.push(addTxt.value);
// //     //Converting into string
// //     localStorage.setItem("notes",JSON.stringify(notesObj));
// //     addTxt.value="";
// //     console.log(notesObj);
// //     showNotes();
// // });

// // //FUNCTION TO SHOW NOTES FROM LOCAL STORAGE
// // function showNotes(){
// //     let notes = localStorage.getItem("notes");
// //     if(notes==null){
// //         notesObj=[];
// //     }
// //     else{
// //         notesObj=JSON.parse(notes);
// //     }
// //     let html="";
// //     notesObj.forEach(function(element,index){
// //         html = html + `
// //         <div class="noteCard card mx-1 my-1" style="width: 18rem">
// //           <div class="card-body">
// //             <h5 class="card-title">${index+1}</h5>
// //             <p class="card-text">${element}</p>
// //             <button id="${index}" onclick="deleteNote(this.id)" href="#" class="btn btn-primary">Delete Note</button>
// //           </div>
// //         </div>
// //         `;
// //     });
// //     let notesElm=document.getElementById("notes");
// //     if(notesObj.length != 0){
// //         notesElm.innerHTML=html;
// //     }
// //     else{
// //         notesElm.innerHTML=`Nothing to show! Use "Add a Note"section above to add notes`;
// //     }
// // }

// // // FUNCTION TO DELETE A NOTE
// // function deleteNote(index){
// //     console.log('I am deleting');
// //     let notes=localStorage.getItem("notes");
// //     if(notes==null){
// //         notesObj=[];
// //     }
// //     else{
// //         notesObj=JSON.parse(notes);
// //     }
// //     notesObj.splice(index,1);
// //     localStorage.setItem("notes",JSON.stringify(notesObj));
// //     showNotes();
// // }


 

