import styled from 'styled-components'

export const CharacterCardWrapper = styled.li`
  box-shadow: 0px 22px 18px -24px #000000a1;
  background-color: #ffffff;
  border-radius: 24px;
  margin-bottom: 18px;
  overflow: hidden;

  a {
    display: flex;
    width: 100%;
    height: 160px;
  }
`

const CharacterCardSide = styled.div`
  flex: 1;
  min-width: 0;
`

export const CharacterCardThumbnail = styled(CharacterCardSide)`
  margin-right: 12px;
  object-fit: cover;
  object-position: left;
`

export const CharacterCardDetails = styled(CharacterCardSide)`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
`

export const CharacterCardName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
`

export const CharacterCardDescription = styled.p`
  color: #3a3a3a;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  hyphens: auto;
`

export const CharacterCardMore = styled.span`
  margin-top: auto;
  font-weight: 500;
  font-size: 12px;
  display: inline-flex;
  align-items: center;

  svg {
    margin-left: auto;
    margin-right: 12px;
    font-size: 16px;
  }
`
