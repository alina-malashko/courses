import React, { useState } from 'react';
import styles from './Card.module.scss';

function Card(props) {
  const [clicked, setClicked] = useState(false);
  const clickHandler = (e) => {
    e.preventDefault();
  }
  return (
    <div className={`${styles.card} ${clicked ? styles.active : ''}`} onClick={() => setClicked(!clicked)}>
      <div className={styles.card__add}>
        <svg onClick={() => setClicked(false)}
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15 0C6.7 0 0 6.7 0 15C0 23.3 6.7 30 15 30C23.3 30 30 23.3 30 15C30 6.7 23.3 0 15 0ZM22 15.5H15.5V22C15.5 22.3 15.3 22.5 15 22.5C14.7 22.5 14.5 22.3 14.5 22V15.5H8C7.7 15.5 7.5 15.3 7.5 15C7.5 14.7 7.7 14.5 8 14.5H14.5V8C14.5 7.7 14.7 7.5 15 7.5C15.3 7.5 15.5 7.7 15.5 8V14.5H22C22.3 14.5 22.5 14.7 22.5 15C22.5 15.3 22.3 15.5 22 15.5Z'
            fill='#259609'
          />
        </svg>
      </div>
      <div className={styles.card__logo}>
        <img src={props.card.logo} alt={props.card.name} title={props.card.name} />
      </div>
      <div className={styles.card__title}>
        {props.card.specialization}
      </div>
      <div className={styles.card__subtitle}>
        {props.card.title}
      </div>
      <div className={styles.card__duration}>
        <p className={styles.card__duration__title}>
          Duration:
        </p>
        <p>Minimum: {props.card.duration.minimum}</p>
        <p>Maximum: {props.card.duration.maximum}</p>
      </div>
      <div className={styles.card__degree}>
        <div className={styles.card__degree__icon}>
          <svg
            width='20'
            height='21'
            viewBox='0 0 20 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.5 10.219V14.5801C4.5 16.1801 7 17.5801 10 17.5801C13 17.5801 15.5 16.2801 15.5 14.5801V10.219M17.5 8.99674V13.0801C17.5 13.8801 18.2 14.5801 19 14.5801M19 8.08008L10 13.5801L1 8.08008L10 2.58008L19 8.08008Z'
              stroke='#3E3E3E'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <div className={styles.card__degree__text}>
          {props.card.degree}
        </div>
      </div>
      <div className={styles.card__dates}>
        <p className={styles.card__dates__title}>
          Start Dates:
        </p>
        <div className={styles.card__dates__icon}>
          <svg
            width='20'
            height='21'
            viewBox='0 0 20 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.5 4.87891H17.5V17.8789H2.5V4.87891H4.5M12.5 4.87891H7.5M2.5 8.87891H17.5M15.5 2.87891H12.5V6.87891H15.5V2.87891ZM7.5 2.87891H4.5V6.87891H7.5V2.87891Z'
              stroke='#3E3E3E'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <div className={styles.card__dates__text}>
          {props.card.dates}
        </div>
      </div>
      <div className={styles.card__price}>
        {props.card.price}
      </div>
      <a
        href='https://github.com/alina-malashko'
        className={styles.card__button}
        onClick={clickHandler}
      >
        More Info
      </a>
    </div>
  );
}

export default Card;