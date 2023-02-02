import React from 'react';
import Main from '../pages/Main';

function App() {
  const cards = [
    {
      id: 1,
      logo: 'https://i.postimg.cc/GpQCJSZM/Group.png',
      name: 'embratur',
      specialization: 'Business & Management',
      title: 'Master of Business Administration (CMI)',
      duration: {
        minimum: '18 month',
        maximum: '36 month'
      },
      degree: 'Postgraduate',
      dates: 'Every 12 weeks',
      price: '£12,650'
    },
    {
      id: 2,
      logo: 'https://i.postimg.cc/xTC30Jfq/Group1.png',
      name: 'danisco',
      specialization: 'Business & Management',
      title: 'Master of Business Administration (CMI)',
      duration: {
        minimum: '18 month',
        maximum: '36 month'
      },
      degree: 'Postgraduate',
      dates: 'Every 12 weeks',
      price: '£12,650'
    },
    {
      id: 3,
      logo: 'https://i.postimg.cc/nr6rbPV4/Group3.png',
      name: 'buffets',
      specialization: 'Business & Management',
      title: 'Master of Business Administration (CMI)',
      duration: {
        minimum: '18 month',
        maximum: '36 month'
      },
      degree: 'Postgraduate',
      dates: 'Every 12 weeks',
      price: '£12,650'
    },
    {
      id: 4,
      logo: 'https://i.postimg.cc/DzgSJ65h/Group2.png',
      name: 'barco',
      specialization: 'Business & Management',
      title: 'Master of Business Administration (CMI)',
      duration: {
        minimum: '18 month',
        maximum: '36 month'
      },
      degree: 'Postgraduate',
      dates: 'January, April, July, October, November',
      price: '£12,650'
    },
    {
      id: 5,
      logo: 'https://i.postimg.cc/GpQCJSZM/Group.png',
      name: 'embratur',
      specialization: 'Business & Management',
      title: 'Master of Business Administration (CMI)',
      duration: {
        minimum: '18 month',
        maximum: '36 month'
      },
      degree: 'Postgraduate',
      dates: 'Every 12 weeks',
      price: '£12,650'
    },
    {
      id: 6,
      logo: 'https://i.postimg.cc/xTC30Jfq/Group1.png',
      name: 'danisco',
      specialization: 'Business & Management',
      title: 'Master of Business Administration (CMI)',
      duration: {
        minimum: '18 month',
        maximum: '36 month'
      },
      degree: 'Postgraduate',
      dates: 'Every 12 weeks',
      price: '£12,650'
    },
    {
      id: 7,
      logo: 'https://i.postimg.cc/nr6rbPV4/Group3.png',
      name: 'buffets',
      specialization: 'Business & Management',
      title: 'Master of Business Administration (CMI)',
      duration: {
        minimum: '18 month',
        maximum: '36 month'
      },
      degree: 'Postgraduate',
      dates: 'Every 12 weeks',
      price: '£12,650'
    },
    {
      id: 8,
      logo: 'https://i.postimg.cc/DzgSJ65h/Group2.png',
      name: 'barco',
      specialization: 'Business & Management',
      title: 'Master of Business Administration (CMI)',
      duration: {
        minimum: '18 month',
        maximum: '36 month'
      },
      degree: 'Postgraduate',
      dates: 'January, April, July, October, November',
      price: '£12,650'
    }
  ];
  return (
    <Main cards={cards} />
  );
}

export default App;