import React from 'react';
import Category from './category';

import styles from './style.css';

const data = [
  {
    name: 'Company',
    topics: [
      {
        question: 'What do Red Badger do?',
        answer: 'This is totally dependent on your requirements, but Red Badger’s value is in the total cost of ownership, i.e we have proven time and again that we always deliver and speed projects to market so total costs always end up being less than using a competitor whose day-rate might be cheaper, but would take longer.',
      },
      {
        question: 'What sets Red Badger apart from competitors',
        answer: 'lorem ipsum',
      },
      {
        question: 'How would you describe the Red Badger culture and its people?',
        answer: 'lorem ipsum',
      },
    ],
  },
  {
    name: 'Projects',
    topics: [
      {
        question: 'What technology can you use?',
        answer: 'lorem ipsum',
      },
      {
        question: 'What makes a successful project?',
        answer: 'lorem ipsum',
      },
      {
        question: 'What do you do to ensure the quality of delivery?',
        answer: 'lorem ipsum',
      },
    ],
  },
  {
    name: 'Costs & Timing',
    topics: [
      {
        question: 'How much will my project cost?',
        answer: 'lorem ipsum',
      },
      {
        question: 'How long will my project take?',
        answer: 'lorem ipsum',
      },
      {
        question: 'Do you offer discounted rates for charities?',
        answer: 'lorem ipsum',
      },
    ],
  },
];

const QAndASlice = () => (
  <div className={styles.QAndA}>
    <div className={styles.QAndA__container}>
      <h2 className={styles.QAndA__heading}>Answers to common questions</h2>
      {data.map(category => <Category category={category} />) }
    </div>
  </div>
);

export default QAndASlice;
