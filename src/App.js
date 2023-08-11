import {useState} from 'react'
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList"
function App() {
  const [books,setBooks]=useState([])
  const editBookById=(id,newTitle)=>{
     const updatebook=books.map((book)=>{
          if(book.id===id){
            return {...book,title:newTitle}
          }
          return book 
          
     })
     setBooks(updatebook)
  }
  const deleteBookById=(id)=>{
   const updatedBooks= books.filter((book)=>{
        return book.id!=id
    })
    setBooks(updatedBooks)
  }

  const createBook=(title)=>{
    const updatedbooks=[
      ...books,
      {id:Math.round(Math.random()*9999),title}]
    setBooks(updatedbooks);
  }

  return (
   <div className="app">
       <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
       <BookCreate onSubmit={createBook}/>
   </div>
  );
}

export default App;
