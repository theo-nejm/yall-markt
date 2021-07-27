import React from 'react';

import { Container } from './styled';
import { CategoryItem } from '../../components/CategoryItem';

import bgImg from '../../assets/walk-illustration.png';

export function Home(): JSX.Element {
  return (
    <Container>
      <header>
        <h1>
          <span>yall</span>
          <b>markt</b>
        </h1>
      </header>

      <main>
        <div className="left">
          <h2>Go ahead and make your search!</h2>
          <h3>You cand find things by the categories bellow</h3>
          <div className="category-items">
            <CategoryItem imgIndex={0} categoryName={'soccer'} />
            <CategoryItem imgIndex={1} categoryName={'shoes'} />
            <CategoryItem imgIndex={2} categoryName={'music'} />
            <CategoryItem imgIndex={0} categoryName={'soccer'} />
            <CategoryItem imgIndex={1} categoryName={'shoes'} />
            <CategoryItem imgIndex={2} categoryName={'music'} />
          </div>
        </div>
        <figure>
          <img src={bgImg} alt="O passo mais importante é o primeiro." />
          <figcaption>The first step is the most important one</figcaption>
        </figure>
      </main>
    </Container>
  );
}
