import styled from 'styled-components'

const getBackgroundColor = ({ highlighted, light }) => {
  if (highlighted) return '#F70D0E'
  if (light) return '#FFFFFF'
  return '#EFEFEF'
}

export const Btn = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  background-color: ${getBackgroundColor};
  color: ${({ highlighted }) => (highlighted ? '#FFFFFF' : '#181a1d')};
  display: inline-flex;
  margin: 0;
  outline: none;
  border-radius: 14px;
`
