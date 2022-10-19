import React from 'react';
import { MdSearch } from 'react-icons/md';

import styles from './Search.module.scss';

type SeacrhProps = {
   handleSearchNote: (event: string) => void
}

const Seacrh: React.FC<SeacrhProps> = ({ handleSearchNote }) => {
   return (
      <div className={styles.search}>
         <MdSearch className='search-icons' size='1.3em' />
         <input
            onChange={(event) => handleSearchNote(event.target.value)}
            type="text"
            placeholder='найти заметки...'
         />
      </div>
   );
};

export default Seacrh;