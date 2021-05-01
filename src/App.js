import React from 'react';
import { Category } from './components/Category/index';
import { ListOfCategories } from './components/ListOfCategories/index';
import { GlobalStyles } from './GlobalStyles'
import { PhotoCard } from './components/PhotoCard/index';

export const App = () => (
  <div>
    <GlobalStyles />
    <ListOfCategories />
    <PhotoCard />
  </div>
)
