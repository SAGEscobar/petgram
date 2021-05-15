import React, { Fragment } from 'react';
import { FavsWithQuery } from '../containers/GetFavorites';
import { Helmet } from 'react-helmet';

export default () => (
  <Fragment>
    <Helmet>
      <title>Tus favoritos | Petgram</title>
      <meta name='description' content='En esta pagina encuentras las imagenes a las que les has dado' />
    </Helmet>
    <h1>Favs</h1>
    <FavsWithQuery />
  </Fragment>
)