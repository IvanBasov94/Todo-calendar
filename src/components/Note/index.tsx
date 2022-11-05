import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

import styles from './Note.module.scss';

type NoteProps = {
   id: string,
   text: string,
   date: string,
   handleDeleteNote: (id: string) => void,
}

const Note: React.FC<NoteProps> = ({ id, text, date, handleDeleteNote }) => {
   return (
      <div className={styles.note}>
         <span>{text}</span>
         <div className={styles.footer}>
            <small>{date}</small>
            <MdDeleteForever
               onClick={() => handleDeleteNote(id)}
               className={styles.deleteIcon}
               size='1.3em'
            />
         </div>
      </div>
   )
};

export default Note