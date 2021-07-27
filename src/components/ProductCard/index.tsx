import React from 'react';
import { Container } from './styled';

export function ProductCard(): JSX.Element {
  return (
    <Container>
      <h3>Product title</h3>
      <p>Product description</p>
      <img alt="Soccer ball" />
    </Container>
  );
}
