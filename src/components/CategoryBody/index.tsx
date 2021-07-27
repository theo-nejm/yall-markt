import React from 'react';

import { Container } from '../../styles/CategoriesContainer';
import { ProductsWrapper } from './styled';
import { ProductCard } from '../ProductCard';

type CategoryBodyPropsType = {
  categoryName: string;
};

export function CategoryBody(props: CategoryBodyPropsType): JSX.Element {
  return (
    <Container>
      <h2 className="category-title">
        Category: <span>{props.categoryName}</span>
      </h2>

      <ProductsWrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsWrapper>
    </Container>
  );
}
