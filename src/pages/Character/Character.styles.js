import styled from 'styled-components'

export const CharacterWrapper = styled.div`
  padding: 0 12px;
  display: flex;
  flex-direction: column;
`

export const CharacterCover = styled.div`
  position: relative;
  margin: 0 -12px;
  margin-bottom: 24px;
  padding: 0 12px;
  box-sizing: content-box;
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ thumbnail }) => `url(${thumbnail})`};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 20vh;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`

export const CharacterDescription = styled.p`
  color: #3a3a3a;
  font-size: 12px;
  line-height: 1.4em;
`
