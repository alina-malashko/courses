import React from 'react';
import styles from './Link.module.scss';

function Link(props) {
  const clickHandler = (e) => {
    e.preventDefault();
  }
  return (
    <li className={styles.link}>
      <div className={styles.link__title}>
        <div className={styles.link__title__text}>
          {props.title}
        </div>
        <div className={styles.link__title__icon}>
          <svg
            width='7'
            height='12'
            viewBox='0 0 7 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.777344 11L5.77734 6L0.777343 1'
              stroke='#3E3E3E'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
      <ul className={styles.link__sublinks}>
        {props.sublinks.map(link => {
          return (
            <li key={props.sublinks.indexOf(link)} className={styles.link__sublinks__item}>
              <a href='https://github.com/alina-malashko' onClick={clickHandler}>
                {link}
              </a>
            </li>
          )
        })}
      </ul>
    </li>
  );
}

export default Link;