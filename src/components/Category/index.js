import React from 'react';
import { Link, Image } from './styles';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJaHpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (

  <Link to={path}>
    <Image src={cover} alt={`Categoria ${emoji}`} />
    {emoji}
  </Link>

)
