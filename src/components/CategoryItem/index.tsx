import React from 'react';
import { Container } from './styled';
import { BiFootball } from 'react-icons/bi';
import { GiBarefoot } from 'react-icons/gi';
import { IoMdMusicalNote } from 'react-icons/io';

type CategoryItemPropsType = {
  imgIndex: 0 | 1 | 2;
  categoryName: string;
  onClick: () => void;
};

export function CategoryItem(props: CategoryItemPropsType): JSX.Element {
  const imgOptions = [
    <BiFootball key={0} />,
    <GiBarefoot key={1} />,
    <IoMdMusicalNote key={2} />,
  ];

  return (
    <Container onClick={props.onClick}>
      {imgOptions[props.imgIndex]}
      <span>{props.categoryName}</span>
    </Container>
  );
}
