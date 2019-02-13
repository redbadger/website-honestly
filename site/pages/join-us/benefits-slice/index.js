// @flow
import React from 'react';
import Category from './category';
import styles from './style.css';
import type { CategoryProps } from './category';
import Container from '../../../components/container';

const BenefitsSlice = ({ benefitsCategories }: { benefitsCategories: Array<CategoryProps> }) =>
  benefitsCategories && benefitsCategories.length ? (
    <section className={styles.benefitsTimelineSection} id="contactUs">
      <Container>
        <div className={styles.benefits__wrapper}>
          <div className={styles.benefits__container}>
            <h1 className={styles.benefits__heading}>Benefits</h1>
            <ul className={styles.benefits__categoryList}>
              {benefitsCategories.map(category => (
                <li key={category.name}>
                  <Category
                    name={category.name}
                    icon={category.icon}
                    benefits={category.benefits}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  ) : null;

export default BenefitsSlice;
