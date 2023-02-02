import React, {useState} from 'react';
import Link from './links/Link';
import styles from './NavMenu.module.scss';

function NavMenu() {
  const [open, setOpen] = useState(false);
  const clickHandler = (e) => {
    e.preventDefault();
  }
  const links = [
    {
      title: 'Business & Management', 
      subtitles: [
        'Lorem Ipsum',
        'Dolor sit amet'
      ]
    },
    {
      title: 'Computing & IT',
      subtitles: [
        'Lorem Ipsum',
        'Dolor sit amet'
      ]
    },
    {
      title: 'Fashion & Media',
      subtitles: [
        'Lorem Ipsum',
        'Dolor sit amet'
      ]
    },
    {
      title: 'Finance & Accounting',
      subtitles: [
        'Lorem Ipsum',
        'Dolor sit amet'
      ]
    },
    {
      title: 'Law & Criminology',
      subtitles: [
        'Lorem Ipsum',
        'Dolor sit amet'
      ]
    },
    {
      title: 'Marketing & Communications',
      subtitles: [
        'Lorem Ipsum',
        'Dolor sit amet'
      ]
    },
    {
      title: 'Psychology & Social Sciences',
      subtitles: [
        'Market Research Executive',
        'Child Psychologist',
        'Guidance Counsellor',
        'Behaviour Analyst',
        'Recreational Therapist'
      ]
    }
  ];
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <div className={styles.sidebar__header__icon}>
          <svg
            width='21'
            height='20'
            viewBox='0 0 21 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_1_151)'>
              <path
                d='M5.27734 10.1389V14.5C5.27734 16.1 7.77734 17.5 10.7773 17.5C13.7773 17.5 16.2773 16.2 16.2773 14.5V10.1389M18.2773 8.91667V13C18.2773 13.8 18.9773 14.5 19.7773 14.5M19.7773 8L10.7773 13.5L1.77734 8L10.7773 2.5L19.7773 8Z'
                stroke='#259609'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
            <defs>
              <clipPath id='clip0_1_151'>
                <rect
                  width='20'
                  height='20'
                  fill='white'
                  transform='translate(0.777344)'
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.sidebar__header__text}>
          Careers
        </div>
      </div>
      <div className={styles.sidebar__header__mobile} onClick={() => setOpen(!open)}>
        <div className={styles.sidebar__header__mobile__icon}>
          <svg
            width='21'
            height='20'
            viewBox='0 0 21 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_1_151)'>
              <path
                d='M5.27734 10.1389V14.5C5.27734 16.1 7.77734 17.5 10.7773 17.5C13.7773 17.5 16.2773 16.2 16.2773 14.5V10.1389M18.2773 8.91667V13C18.2773 13.8 18.9773 14.5 19.7773 14.5M19.7773 8L10.7773 13.5L1.77734 8L10.7773 2.5L19.7773 8Z'
                stroke='#259609'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
            <defs>
              <clipPath id='clip0_1_151'>
                <rect
                  width='20'
                  height='20'
                  fill='white'
                  transform='translate(0.777344)'
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.sidebar__header__mobile__text}>
          <p>Choose YOUR Career</p>
          <svg className={`${open ? styles.sidebar__header__mobile__text__icon : ''}`}
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
      <div className={`${styles.sidebar__main} ${open ? styles.active : ''}`}>
        <ul className={styles.sidebar__main__links}>
          {links.map(link => {
            return <Link key={links.indexOf(link)} title={link.title} sublinks={link.subtitles}/>
          })}
        </ul>
        <a
          href='https://github.com/alina-malashko'
          className={styles.sidebar__main__button}
          onClick={clickHandler}
        >
          Show all programmes
        </a>
      </div>
    </div>
  );
}

export default NavMenu;