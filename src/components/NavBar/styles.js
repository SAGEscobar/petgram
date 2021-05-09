import styled from 'styled-components';
import { Link as linkRouter } from '@reach/router';
import { fadeIn } from '../../styles/animation';

export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 10000;
`

export const Link = styled(linkRouter)`
 align-items: center;
 text-decoration: none;
 color: #888;
 display: inline-flex;
 height: 100%;
 justify-content: center;
 width: 100%;

 &[aria-current] {
   color: #000;

   &:after {
     ${fadeIn({time: '0.5s'})};
     content: '.';
     position: absolute;
     bottom: 0;
     font-size: 34px;
     line-height: 1.2em;
   }
 }
` 