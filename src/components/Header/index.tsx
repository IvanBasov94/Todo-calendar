import React from 'react';

import styles from './Header.module.scss';

type HeaderProps = {
   hadleToggleDarkMode: Function,
};

const Header: React.FC<HeaderProps> = ({ hadleToggleDarkMode }) => {
   return (
      <div className={styles.header}>
         <h1>Заметки</h1>
         <button
            onClick={() => hadleToggleDarkMode(
               (previousDarkMode: boolean) => !previousDarkMode
            )
            }
            className={styles.save}
         >
            Переключить режим
         </button>
      </div>
   );
};

export default Header;