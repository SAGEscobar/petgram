import React, { useEffect, useRef, useState } from 'react';
import { Article, ImgWrapper, Img, } from './styles';
import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation';
import { Link } from '@reach/router';

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE, liked }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

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
    <Article ref={ref}>
      {show ?
        <React.Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({ variables: {
                    input: { id }
                  }})
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
  );
}