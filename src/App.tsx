import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import NotesList from './components/NotesList';
import Seacrh from './components/Search';
import Header from './components/Header';

type NoteItem = {
   id: string,
   text: string,
   date: string,
};

const App: React.FC = () => {
   const [notes, setNotes] = useState<NoteItem[]>([
      {
         id: nanoid(),
         text: 'Моя первая заметка!',
         date: '10.10.2022'
      },
      {
         id: nanoid(),
         text: 'Вторая заметка!',
         date: '12.10.2022'
      },
      {
         id: nanoid(),
         text: 'Третья заметка...',
         date: '14.10.2022'
      }
   ]);

   const [searchText, setSearchText] = useState<string>('');
   const [darkMode, setDarkMode] = useState<boolean>(false);


   const addNote = (text: string) => {
      const date = new Date();
      const newNote = {
         id: nanoid(),
         text: text,
         date: date.toLocaleDateString(),
      }
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
   };

   const deleteNote = (id: string) => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
   };

   return (
      <div className={`${darkMode && 'dark__mode'}`}>
         <div className='container'>
            <Header hadleToggleDarkMode={setDarkMode} />
            <Seacrh handleSearchNote={setSearchText} />
            <NotesList
               notes={notes.filter((note) =>
                  note.text.toLowerCase().includes(searchText.toLowerCase())
               )}
               handleAddNote={addNote}
               handleDeleteNote={deleteNote}
            />
         </div>
      </div>
   );
};

export default App;
