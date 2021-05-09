import React, { Fragment, useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Category } from '../Category/index';
import { List, Item } from './styles';

function useCategoryData() {
  const [ categories, setCategories ] = useState([])
  const [ loading, setLoading ] = useState(false);

  useEffect(function() {
    setLoading(true);
    window.fetch('https://petgram-server-zag.vercel.app/categories')
      .then(res => {
        return res.json()
      })
      .then(response => {
        setCategories(response);
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  return { categories, loading };
}

export const ListOfCategories = () => {

  const { categories, loading } = useCategoryData();
  const [ showFixed, setShowFixed] = useState(false);

  useEffect(function() {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    }
    document.addEventListener('scroll', onScroll )

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed])

  

  const renderList = (fixed) => {
    return(
      <List fixed={fixed} >
      {
        loading?
        <h4>Loading ...</h4>
        :
        categories.map( category => <Item key={category.id}>
          <Category
            {...category}
            path={`/pet/${category.id}`}
          />
        </Item>) 
      }
    </List>
    )
  }

  return (
    <Fragment>
        {renderList()}
        {showFixed && renderList(true)}
    </Fragment>
  )  
}