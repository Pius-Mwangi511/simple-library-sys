interface Book{
    id:number;
    title:string;
    author:string;
    available:string | boolean;
    
}
interface Member{
    id:number;
    name:string;
    email:string;
    phoneNo:number;
    //booksborrowed:string[];
}
interface Borrowing {
    id: number;
    memberId: number;
    bookId: number;
    borrowDate: string;
    dueDate: string;
    returnDate: string | null;
}

let books:Book[]=[];
let members:Member[]=[];
let issued:Borrowing[]=[];
function newbook():void{
    const Bid=document.getElementById('identity') as HTMLInputElement;
    const Btitle=document.getElementById('title') as HTMLInputElement;
    const Bauthor=document.getElementById('author') as HTMLInputElement;
    const Bavailable=document.getElementById('available') as HTMLInputElement;

    const id=parseInt(Bid.value);
    const title=Btitle.value;
    const author=Bauthor.value;
    const available=Bavailable.value;
    const book:Book={id,title,author,available};
    books.push(book);
    savetoLocalstorage();
    loadtoLocalstorage();
    console.log(book);
    

}
function updatebook():void{
    const Bid=document.getElementById('identity') as HTMLInputElement;
    const Btitle=document.getElementById('title') as HTMLInputElement;
    const Bauthor=document.getElementById('author') as HTMLInputElement;
    const Bavailable=document.getElementById('available') as HTMLInputElement;

    const id=parseInt(Bid.value);
    const title=Btitle.value;
    const author=Bauthor.value;
    const available=Bavailable.value;
    const book=books.find(book=>book.id===id);
    if(book){
        book.author=author;
        book.available=available;
        book.title=title;
        savetoLocalstorage();
        loadtoLocalstorage();
        console.log(books);
        
    }
    
}
function deletebook():void{
    const Bid=document.getElementById('identity') as HTMLInputElement;
    const Btitle=document.getElementById('title') as HTMLInputElement;
    const Bauthor=document.getElementById('author') as HTMLInputElement;
    const Bavailable=document.getElementById('available') as HTMLInputElement;

    const id=parseInt(Bid.value);
    const title=Btitle.value;
    const author=Bauthor.value;
    const available=Bavailable.value;
    books=books.filter(book=>book.id!==id);
    savetoLocalstorage();
    console.log('book dleted');
    
}
function savetoLocalstorage():void{
    localStorage.setItem("books",JSON.stringify(books));
}
function loadtoLocalstorage(): void {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
}
loadtoLocalstorage();
function createMember():void{
    const Mid=document.getElementById('identity2') as HTMLInputElement;
    const Musrname=document.getElementById('username') as HTMLInputElement;
    const Memail=document.getElementById('email') as HTMLInputElement;
    const Mphone=document.getElementById('phoneNo') as HTMLInputElement;

    const id=parseInt(Mid.value);
    const name=Musrname.value;
    const email=Memail.value;
    const phoneNo=parseInt(Mphone.value);
    const user:Member={id,name,email,phoneNo}
    members.push(user);
    saveMember();
    loadmember();
    console.log('member created');

}
function updateMember():void{
    const Mid=document.getElementById('identity2') as HTMLInputElement;
    const Musrname=document.getElementById('username') as HTMLInputElement;
    const Memail=document.getElementById('email') as HTMLInputElement;
    const Mphone=document.getElementById('phoneNo') as HTMLInputElement;

    const id=parseInt(Mid.value);
    const name=Musrname.value;
    const email=Memail.value;
    const phoneNo=parseInt(Mphone.value);
    const user=members.find(member=>member.id===id);
    if(user){
        user.name=name;
        user.email=email;
        user.phoneNo=phoneNo;
        saveMember();
        loadmember();
        console.log(user);
    }

}
function deleteMember():void{
    const Mid=document.getElementById('identity2') as HTMLInputElement;
    const Musrname=document.getElementById('username') as HTMLInputElement;
    const Memail=document.getElementById('email') as HTMLInputElement;
    const Mphone=document.getElementById('phoneNo') as HTMLInputElement;

    const id=parseInt(Mid.value);
    const name=Musrname.value;
    const email=Memail.value;
    members=members.filter(member=>member.id!==id);
    saveMember();
    loadmember()
    console.log('user deleted');
    
}
function saveMember():void{
    localStorage.setItem("members",JSON.stringify(members));
}
function loadmember():void{
    const storedmembers=localStorage.getItem('members');
    if(storedmembers){
        members = JSON.parse(storedmembers);
    }
}
loadmember();

// managing borrowing of books
class borrowing{
    private issue:Map<number,number[]>=new Map()
    
    issueBooks():void{
        
        const borrowid=document.getElementById('borowid2')as HTMLInputElement;
        const mid=document.getElementById('memberId')as HTMLInputElement;
        const bid=document.getElementById('bookId')as HTMLInputElement;
        const bD=document.getElementById('borrowDate')as HTMLInputElement;
        const dD=document.getElementById('dueDate')as HTMLInputElement;
        const rD=document.getElementById('returnDate')as HTMLInputElement;

        const id=parseInt(borrowid.value);
        const memberId=parseInt(mid.value);
        const bookId=parseInt(bid.value);
        const borrowDate=bD.value;
        const dueDate=dD.value;
        const returnDate=rD.value;
        const issue:Borrowing={id,memberId,bookId,borrowDate,dueDate,returnDate}
        issued.push(issue)
        console.log(issue);
        
    }
    updateborrowing():void{
        const borrowid=document.getElementById('borowid2')as HTMLInputElement;
        const mid=document.getElementById('memberId')as HTMLInputElement;
        const bid=document.getElementById('bookId')as HTMLInputElement;
        const bD=document.getElementById('borrowDate')as HTMLInputElement;
        const dD=document.getElementById('dueDate')as HTMLInputElement;
        const rD=document.getElementById('returnDate')as HTMLInputElement;

        const id=parseInt(borrowid.value);
        const memberId=parseInt(mid.value);
        const bookId=parseInt(bid.value);
        const borrowDate=bD.value;
        const dueDate=dD.value;
        const returnDate=rD.value;
        const issue=issued.find(issue=>issue.id===id)
        if(issue){
            issue.memberId=memberId;
            issue.bookId=bookId;
            issue.borrowDate=borrowDate;
            issue.dueDate=dueDate;
            issue.returnDate=returnDate;
            console.log(issue);
            
        }
    }
}
const assign=new borrowing();
// const issueButton = document.getElementById('issue')as HTMLButtonElement;
// if (issueButton) {
//     issueButton.addEventListener('click', function () {
       assign.issueBooks();
       assign.updateborrowing();
//     });
// }
