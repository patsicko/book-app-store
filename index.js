const addBook=document.getElementById("addBook");

const form=document.createElement("form");


const title=document.createElement("input");
title.classList.add("title");
title.setAttribute("type","text");
title.setAttribute("placeholder","Add book title");
title.setAttribute("id","title");
form.appendChild(title);
addBook.appendChild(form);

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
radio1.setAttribute("name","radio");
form.appendChild(radio1);

const no=document.createTextNode("No");
form.appendChild(no);

const radio2=document.createElement("input");
radio2.classList.add("no");
radio2.setAttribute("type","radio");
radio2.setAttribute("id","radio");
radio2.setAttribute("name","radio");
form.appendChild(radio2);

const br3=document.createElement("br");
form.appendChild(br3);
const save=document.createElement("input");
save.classList.add("button");
save.setAttribute("type","submit");
save.setAttribute("value","save");
form.appendChild(save);

const books=[];

function Book(title,author,pages,read){
    this.title="title",
    this.author="author",
    this.pages="pages",
    this.read="read";

}

function addbook(title,author,pages,read){
    const newbook=new Book(title,author,pages,read);
    books.push(newbook);
}

function displaybooks(books){
    const description=document.createElement("div");
    description.classList.add("description");
   
    const booklist=document.createElement("ul");
    booklist.classList.add("bookList");
    for(book of books){
     
    }
  
}





















// radio.classList.add("radio");
// radio.setAttribute("type","radio");
