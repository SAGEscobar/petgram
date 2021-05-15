import React, { Fragment, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Article, ImgWrapper, Img, } from './styles';
import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation';
import { Link } from '@reach/router';
import { Message } from '../Message';

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE, liked }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState(false);

  useEffect(function () {
    Promise.resolve(
        typeof window.IntersectionObserver !== 'undefined' ?
          null
        :
          import('intersection-observer')
      )
      .then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(ref.current)
      }
      )
  }, [ref])

  return (
    <Fragment>
    <Article ref={ref}>
      {show ?
        <React.Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={`Imagen-${id}`}/>
            </ImgWrapper>
          </Link>

          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({ variables: {
                    input: { id }
                  }})
                    .catch(err => {
                      setMsg(true)
                      setTimeout(()=>{
                        setMsg(false)
                      }, 1350)
                    })
                }
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </React.Fragment>
        :
        null
      }

    </ Article>
    {msg && createPortal(<Message title='Debes estar logeado para dar like' />, document.getElementById('app'))}
    </Fragment>
  );
}