import React, { useState } from 'react';

import styles from './AddNote.module.scss';

interface AddNoteProps {
   handleAddNote: (noteText: string) => void
};

const AddNote: React.FC<AddNoteProps> = ({ handleAddNote }) => {
   const [noteText, setNoteText] = useState('');
   const characterLimit = 200;

   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if ((characterLimit - event.target.value.length) >= 0) {
         setNoteText(event.target.value)
      };
   };

   const handleSaveClick = () => {
      if (noteText.trim().length > 0) {
         handleAddNote(noteText);
         setNoteText('');
      }
   };

   return (
      <div className={styles.note__new}>
         <textarea
            onChange={handleChange}
            cols={10}
            rows={8}
            placeholder='Введите текст, чтобы добавить примечание'
            value={noteText}
         >
         </textarea>
         <div className={styles.note__footer}>
            <small>{characterLimit - noteText.length} Символов</small>
            <button
               className={styles.save}
               onClick={handleSaveClick}
            >
               Сохранить
            </button>
         </div>
      </div>
   );
};

export default AddNote;