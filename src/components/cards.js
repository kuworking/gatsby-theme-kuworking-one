import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { BImg } from 'gatsby-theme-kuworking-methods'

export const Card = ({ post, lazy }) => {
  if (!post) return <></>

  return (
    <ContainerCard as={Link} aria-label="Post" to={'/' + post.name}>
      <BImg lazy={lazy} image={[post.image_versions.standard, post.image_versions]} />
      <Title>
        <div>
          {post.title.split('#').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <em key={i}>{el}</em>))}
        </div>
      </Title>
      <Abstract>
        {post.abstract.split('#').map((el, i) => (i % 2 === 0 ? <span key={i}>{el}</span> : <em key={i}>{el}</em>))}
      </Abstract>
    </ContainerCard>
  )
}

const q = px => `@media (min-width: ${px}px)`

const Title = styled.h4``
const Abstract = styled.p``
const ContainerCard = styled.div`
  transition: all 0.2s ease-in;

  text-decoration: none;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-content: flex-start;

  border: 1px solid ${props => props.theme.colors.cards__border};
  background: ${props => props.theme.colors.cards__background};
  padding: 3px 3px 10px 3px;
  border-radius: 3px;

  & > div:nth-of-type(1) {
    transition: all 0.05s ease-in;
    grid-row: 1 / span 2;
    grid-column: 1 / 2;
    z-index: 1;
  }

  &:hover {
    box-shadow: 2px 2px 0px #dadada;
    & > div:nth-of-type(1) {
      filter: brightness(0.7);
    }
  }

  grid-template-rows: 0px 100px minmax(60px, 1fr);
  ${q(600)} {
    grid-template-rows: 0px 140px minmax(100px, 1fr);
  }

  & > div.kw_bimg {
    background-size: cover;
    background-position: center;
    display: grid;
    align-items: end;
    border-radius: 2px;
  }

  ${Title} {
    grid-row: 1 / span 2;
    grid-column: 1 / 2;
    z-index: 10;

    width: 90%;
    padding: 2px;
    line-height: 1.3;

    & > div {
      background: ${props => props.theme.colors.cards__title__background};
      color: ${props => props.theme.colors.cards__title__color};
      padding: 0 3px;
      display: inline;
      box-decoration-break: clone;
      transition: all 0.2s ease-in;
      & > em {
        background: ${props => props.theme.colors.cards__title_em__background};
        color: ${props => props.theme.colors.cards__title__color};
        padding: 0px 4px;
        text-transform: uppercase;
      }
    }
  }

  ${Abstract} {
    margin-top: 2px;
    width: 90%;

    & > em {
      background: ${props => props.theme.colors.cards__abstract_em__background};
    }
  }
`
