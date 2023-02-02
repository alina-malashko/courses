import React from 'react';
import styles from './Main.module.scss';
import NavMenu from '../components/navigation/NavMenu';
import Card from '../components/cards/Card';

function Main(props) {
  return (
    <div className={styles.page}>
      <div className={styles.page__container}>
        <header className={styles.page__container__header}>
          Find Your Course
        </header>
        <main className={styles.page__container__main}>
          <nav className={styles.page__container__main__sidebar}>
            <NavMenu />
          </nav>
          <div className={styles.page__container__main__content}>
            {props.cards.map(card => {
              return <Card key={card.id} card={card} />
            })}
          </div>
        </main>
        <footer className={styles.page__container__footer}>
          <div className={styles.page__container__footer__button}>
            <p className={styles.page__container__footer__button__text}>
              More programmes
            </p>
            <div className={styles.page__container__footer__button__icon}>
              <svg 
                width='21'
                height='20'
                viewBox='0 0 21 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.2 2.5C16.3 3.6 18.5 6.6 18.5 10C18.5 14.4 14.9 18 10.5 18C6.1 18 2.5 14.4 2.5 10C2.5 5.6 6.1 2 10.5 2M18.5 2H13V7.5'
                  stroke='#259609'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Main;