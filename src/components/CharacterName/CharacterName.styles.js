import styled from 'styled-components'

export const CharacterNameWrapper = styled.h3`
  font-size: ${({ large }) => (large ? '24px' : '18px')};
  font-weight: 700;
  margin-bottom: 12px;
  padding-right: 32px;
  position: relative;
`

export const CharacterNameToggle = styled.button`
  position: absolute;
  right: 12px;
  top: 0;
  font-size: 16px;
  margin: 0;
  outline: none;
  border: none;
`
