import React, { Fragment, memo } from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards';
import { Helmet } from 'react-helmet';


const HomePage = ({ id }) => {
  return (<Fragment>
    <Helmet>
      <title>Tu app de fotos | Petgram</title>
      <meta name='description' content='En petgram puedes encontrar fotos de mascotas' />
    </Helmet>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Fragment>
  )
}

export default HomePage

