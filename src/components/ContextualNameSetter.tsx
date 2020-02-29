import React from 'react';
import NameSetter, { NameSetterProps } from './NameSetter';

const ContextualNameSetter: React.FC<NameSetterProps> = (props: NameSetterProps) => {
  return (
    < NameSetter {...props} />
  )
}