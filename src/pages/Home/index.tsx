import React from 'react';
import { useHistory } from 'react-router';

import { Container } from './styled';
import { CategoryItem } from '../../components/CategoryItem';

import bgImg from '../../assets/walk-illustration.png';

export function Home(): JSX.Element {
  const history = useHistory();
  return (
    <Container>
      <main>
        <div className="left">
          <h2>Go ahead and make your search!</h2>
          <h3>You cand find things by the categories below</h3>
          <div className="category-items">
            <CategoryItem
              imgIndex={0}
              categoryName={'soccer'}
              onClick={() => history.push('/categories/soccer')}
            />
            <CategoryItem
              imgIndex={1}
              categoryName={'shoes'}
              onClick={() => history.push('/categories/shoes')}
            />
            <CategoryItem
              imgIndex={2}
              categoryName={'music'}
              onClick={() => history.push('/categories/music')}
            />
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
