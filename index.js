
const addBook=document.getElementById("addBook");

const form=document.createElement("form");
const title=document.createElement("input");
title.classList.add("title");
title.setAttribute("type","text");
title.setAttribute("placeholder","Add book title");
title.setAttribute("id","title");
form.appendChild(title);

const space1=document.createTextNode(" ");
form.appendChild(space1);

const author=document.createElement("input");
author.classList.add("author");
author.setAttribute("type","text");
author.setAttribute("placeholder","author");
author.setAttribute("id","author");
form.appendChild(author);

const space2=document.createTextNode(" ");
form.appendChild(space2);

const pages=document.createElement("input");
pages.classList.add("pages");
pages.setAttribute("type","number");
pages.setAttribute("id","pages");
pages.setAttribute("placeholder","pages");
form.appendChild(pages);

const br1=document.createElement("br");
form.appendChild(br1);

const read=document.createTextNode("Have you read this book?")
form.appendChild(read);

const br2=document.createElement("br");
form.appendChild(br2);

const yes=document.createTextNode("Yes");
form.appendChild(yes);

const radio1=document.createElement("input");
radio1.classList.add("radio");
radio1.setAttribute("type","radio");
radio1.setAttribute("id","radio")
radio1.setAttribute("name","radio");
radio1.setAttribute("value","Read");
form.appendChild(radio1);

const no=document.createTextNode("No");
form.appendChild(no);

const radio2=document.createElement("input");
radio2.classList.add("radio");
radio2.setAttribute("type","radio");
radio2.setAttribute("id","radio");
radio2.setAttribute("name","radio");
radio2.setAttribute("value","Unread");
form.appendChild(radio2);

const br3=document.createElement("br");
form.appendChild(br3);

const save=document.createElement("input");
save.classList.add("button");
save.setAttribute("type","submit");
save.setAttribute("id","save");
save.setAttribute("value","save");
form.appendChild(save);
addBook.appendChild(form);

const description=document.createElement("div");
description.classList.add("description");
form.appendChild(description);

let books=[];

function book(title,author,pages,read,index){
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.read=read;
    this.index=index;
}

function addbook(title,author,pages,read,index){
    const newbook=new book(title,author,pages,read,index);
    books.push(newbook);
    localStorage.setItem('book', JSON.stringify(books));
      
}

window.onload=function(){
    books=JSON.parse(localStorage.getItem('book'));
    displaybooks();
}

function displaybooks(){
    remove();
    const booklist=document.createElement("ul");
    booklist.classList.add("bookList");

    for(const book of books){
     const bookElement=document.createElement("li");
     bookElement.classList.add("book");
     for(const descr of Object.keys(book)){
      const pElement=document.createElement("p");
      pElement.innerText=book[descr];
      bookElement.appendChild(pElement);
     }
     booklist.appendChild(bookElement);

     const deletebutton = document.createElement('button');
     deletebutton.type = 'button';
     deletebutton.innerHTML = 'delete';
     deletebutton.className = 'delete';
     deletebutton.setAttribute("onClick",`deleteBook(${book.index})`);
   
    booklist.appendChild(deletebutton);
    }
    description.appendChild(booklist);  

}

function deleteBook(current){
    books=books.filter(book=>book.index!==current);
    localStorage.setItem('book', JSON.stringify(books));
    displaybooks();
   }

function remove(){

 description.innerHTML="";
}

function main(){
   const btn=document.getElementById("save");
   if(btn){
    btn.addEventListener("click",function(event){
        event.preventDefault();
        const title=document.getElementById("title").value;
        const author=document.getElementById("author").value;
        const pages=document.getElementById("pages").value;
        const read=document.querySelector("input[type='radio'][name=radio]:checked").value;
        console.log({title,author,pages,read});
        
        const newbookIndex=books.length+1;
        addbook(title,author,pages,read,newbookIndex);
        
        displaybooks();
    })
   }
}
main();

