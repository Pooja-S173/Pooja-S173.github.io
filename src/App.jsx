//import Navbar from "./components/Navbar";
//import Hero from "./components/Hero";
//import Features from "./components/Features";
//import About from "./components/About";
//import Footer from "./components/Footer/Footer";

//function App() {
 // return (
   // <div>
   //   <Navbar />
     // <Hero />
      //<Features />
      //<About />
      //<Footer />
    //</div>
  //);
//}

//export default App;







// import { useEffect, useState } from "react";
// export default function App() {
//   const [myname, setname] = useState("");
//   useEffect(() => {
//     console.log("effect loads");
//   }, [myname]);
 
//   const bikes = new Map()

//   bikes.set("shine","honda")
//   bikes.set("apache","TVS")
//   console.log(bikes.get("shine"))
//   console.log(bikes.get("apache"))
  


//   return (
//     <>
//       <input
//         type="text"
//         value={myname}
//         placeholder="enter your name "
//         onChange={(event) => setname(event.target.value)}
//       />
//       <p> The value is {myname}</p>
//     </>
//   );
// }


//Notes

import { useState, useEffect } from "react";
import AddNote from "./notesComponents/AddNote";
import NotesList from "./notesComponents/NotesList";

function App() {
  const [notes, setNotes] = useState([]);

  // Load only once when page opens
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myNotes"));
    if (saved && Array.isArray(saved)) {
      setNotes(saved);
    }
  }, []);

  // Save notes on every change
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("myNotes", JSON.stringify(notes));
    }
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);

    if (updatedNotes.length === 0) {
      localStorage.removeItem("myNotes");
    }
  };

  const updateNote = (id, newText) => {
    const updated = notes.map((note) =>
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Notes App</h1>

      <AddNote addNote={addNote} />
      <NotesList 
        notes={notes} 
        deleteNote={deleteNote} 
        updateNote={updateNote} 
      />
    </div>
  );
}

export default App;


// import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
// export default function App()
// {
//   return(
//     <>
//     <BrowserRouter>
//     <nav>
//       <ol>
//         <li>
//           <Link to=''>Demo</Link> 
//         </li>
//         <li>
//           <Link to=''>Counter</Link>  
//         </li>
//         <li>
//           <Link to=''>Loginpage</Link>  
//         </li>
//       </ol>
//     </nav>
//     <Routes>
//       <Route path="/" element={<demo/>}/>
//       <Route path="Counter" element={<Counter/>}/>
//       <Route path="Loginpage" element={<Loginpage/>}/>
//     </Routes>
//     </BrowserRouter>
//   </>
//   )
// }

// import A from "./compo/A";
// import { Context } from "./usercontext";
// export default function App(){
//   const Institution ="CITY";
//   return (
//     <>
//     <Context.Provider value = {Institution} >
//     <h1> Displays A </h1>
//     <A />
//     </Context.Provider>
//     </>  
//     );
// }
