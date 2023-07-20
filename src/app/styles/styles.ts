import { relative } from 'path';
import styled from 'styled-components';

//Header-Menu
export const MenuS = styled.div`
  display: flex;
  position: relative;
  align-items: end;
  gap: 35px;
  height: 470px;

  @media screen and (max-width: 764px) {
    height: 100px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const ImgS = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;

  @media screen and (max-width: 764px) {
    height: 80px;
  }
`;

export const LinkMenuS = styled.a`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  gap: 35px;
  padding: 20px 40px 0 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5); 

  &:hover{
      color: rgba(255, 255, 255, 0.7); 
    }

    @media screen and (max-width: 764px) {
      display: none;
    }
`

export const LogoS = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  font-size: 60px;
  color: rgba(255, 255, 255, 0.8); 
  line-height: 1;
  text-align: center;

  @media screen and (max-width: 764px) {
    font-size: 40px;
    left: 30%;
  }

`;

export const LogoSubS = styled.div`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6); 
  text-transform: uppercase;

  @media screen and (max-width: 764px) {
    display: none;
  }

`;

export const LinkS = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
//MenuMobile
export const MenuDropdownS = styled.div`
display: none;
justify-content: start;
position: absolute;
left: 1rem;
top: 1rem;
z-index: 1;

@media screen and (max-width: 764px) {
  display: flex;
}
`;

export const DropdownListS = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 2.5rem;
  left: 1rem;
  z-index: 1;
  color: rgba(255, 255, 255, 0.8);

  @media screen and (max-width: 764px) {
    display: block;
  }
`;

export const DropdownItemS = styled.li`
  margin: 5px 0;
`;

//About
export const AboutS = styled.div`
  padding: 50px 200px 30px 200px;
  text-align: justify;

  h1 {
    text-align: center;
    padding-bottom: 30px;
    text-transform: uppercase;
  }

  p {
    padding-bottom: 15px;
    font-weight: 200;
  }

  p.final {
    text-align: end;
    padding-top: 50px;
  }

  @media screen and (max-width: 1024px) {
    padding: 50px;
  }
  
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;

//Galeria
export const GaleriaS = styled.div`
  text-align: center;
  padding: 50px 0 0 0;
  font-size: 25px;
  font-weight: 200;
  position: relative;
`;

export const UnderlineS = styled.div`
  position: absolute;
  bottom: 0;
  left: 45%;
  width: 10%;
  height: 1px;
  background-color: black;
`;

//Galeria-Divas
export const DivasS = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 30px;
  justify-content: center;


  @media screen and (max-width: 950px) {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    gap: 50px;
  }
`;

export const DivaS = styled.div`
  width: 200px;
  height: 200px
  object-fit: cover;
  text-align: center;
  font-weight: 100;
  perspective: 1000px;
  cursor: pointer;

  & > img {
    height: 200px;
    object-fit: cover;
  }

  &:hover {
    font-weight: 400;
    text-transform: uppercase;

    &:hover {
      & > img {
        opacity: 0.5;
      }
  }
`;

interface CardProps {
  isFlippedAL?: boolean;
  isFlippedESF?: boolean;
  isFlippedGH?: boolean;
  isFlippedHL?: boolean;
  isFlippedSMKK?: boolean;
  isFlippedCS?: boolean;
}

export const Card = styled.div<{ 
  isFlippedAL?: boolean,
  isFlippedCS?: boolean,
  isFlippedESF?: boolean,
  isFlippedGH?: boolean,
  isFlippedHL?: boolean,
  isFlippedSMKK?: boolean,
}>`
  position: relative;
  width: 200px;
  height: 300px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform: ${({ isFlippedAL, isFlippedESF, isFlippedGH, isFlippedHL, isFlippedSMKK, isFlippedCS }) =>
    isFlippedAL || isFlippedESF || isFlippedGH || isFlippedHL || isFlippedSMKK || isFlippedCS
      ? 'rotateY(180deg)'
      : 'rotateY(0)'};
  cursor: pointer;
`;



export const Front = styled.div<{ 
  isFlippedAL?: boolean,
  isFlippedCS?: boolean,
  isFlippedESF?: boolean,
  isFlippedGH?: boolean,
  isFlippedHL?: boolean,
  isFlippedSMKK?: boolean,
}>`
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
`;

export const Back = styled.div<{ 
  isFlippedAL?: boolean,
  isFlippedCS?: boolean,
  isFlippedESF?: boolean,
  isFlippedGH?: boolean,
  isFlippedHL?: boolean,
  isFlippedSMKK?: boolean,
}>`
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
transform: rotateY(180deg);
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
color: #000;
font-size: 16px;
`;

//MenuPags

export const LogoPagS = styled.div`
  position: absolute;
  top: 3.5%;
  left: 2%;
  font-size: 25px;
  color: rgba(255, 255, 255, 0.4); 
  line-height: 1;
  text-align: center;

  &:hover {
    color: rgba(255, 255, 255, 0.6); 
    cursor: pointer;
  }
`;

export const MenuPagS = styled.div`
  display: flex;
  position: relative;
  align-items: end;
  gap: 35px;
  height: 370px;
`;

export const TituloPagS = styled.div`
  position: absolute;
  top: 90%;
  left: 25%;
  font-size: 30px;
  color: rgba(255, 255, 255, 0.8); 
  line-height: 1;
  text-align: center;
  font-weight: 100;
  text-transform: uppercase;
`;

//QuemSao
export const ElasS = styled.div`
  padding: 50px 200px 10px 200px;
  justify-content: center;
  display: flex;
  gap: 50px;
  }
`;

//DivasAtuais
export const DivasAtuaisS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  padding: 30px;

  p {
    line-height: 40px;
  }

`;

export const CardDivasS = styled.div`
  display: flex;
  padding: 50px 200px 30px 200px;
  text-align: justify;
  gap: 30px;

  & > img:hover {
    transform: scale(1.1);
    opacity: 0.3;
  }

`;
export const TextCardDivasS = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 13px;

  p {
    line-height: 2.5;
  }

  h2 {
    text-transform: uppercase;
    padding-bottom: 10px;
    font-weight: 600;
  }
`;

//Formulario
export const FormularioS = styled.form`
  display: flex;
  flex-direction: row;
`;
export const FormularioLeftS = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 28px;
  width: 50%;
  align-items: end;
  padding-top: 40px;
  padding-right: 10px;
  text-transform: uppercase;
  font-weight: 50;
  border-right: 1px solid black;
  margin-top: 80px;
`;
export const FormularioRightS = styled.form`
  display: flex;
  flex-direction: column;
  padding: 90px 0px 30px 50px;
  width: 50%;
  line-height: 20px;

  input {
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    padding-right: 30px;
    width: 50%;
    margin-top: 5px;
    outline: none;
  }

  label {
    margin-top: 20px;
  }
`;
export const ButtonS = styled.button`
  text-align: center;
  width: 130px;
  border-radius: 5px;
  margin-top: 20px;
  background-color: #efd2c7;
  padding: 5px;

  &:hover {
    color: white;
    transform: scale(0.90);
  }
`;

//RafaellyLemos
export const RafaellyLemosS = styled.div`
  display: flex;
  padding: 50px 200px 30px 200px;
  gap: 30px;
  text-align: justify;

  h2 {
    text-align: center;
    font-weight: 200;
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 10px;
  }

  p.tecnologias {
    margin: 30px 10px 10px 20px;
    text-transform: uppercase;
  }

  p.conhecimentos {
    margin: 30px 10px 10px 20px;
    text-transform: uppercase;
  }
`;

export const FooterS = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #efd2c7;
  width: 100%;
  height: 7rem;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 200;
  gap: 10px;

  div.copyright {
    font-size: 12px;
  }

  div.redessociais {
    display: flex;
    gap: 10px; 
    margin-left: 50px;
  }

  div.redessociais div {
    cursor: pointer;

    &:hover {
      color: black;
    }
  }

  div.redessociais div:last-child {
    margin-right: 30px;
  }
`;


