import React from 'react';

import Note from '../Note';
import AddNote from '../AddNote';

import styles from './NotesList.module.scss';

type NoteItem = {
   id: string,
   text: string,
   date: string,
};

interface NotesListProps {
   notes: NoteItem[],
   handleAddNote: (text: string) => void,
   handleDeleteNote: (id: string) => void,
}

const NotesList: React.FC<NotesListProps> = ({ notes, handleAddNote, handleDeleteNote }) => {
   return (
      <div className={styles.notes__list}>
         {notes.map((note) => (
            <Note
               key={note.id}
               {...note}
               handleDeleteNote={handleDeleteNote}
            />
         ))}
         <AddNote
            handleAddNote={handleAddNote}
         />
      </div>
   );
};

export default NotesList;