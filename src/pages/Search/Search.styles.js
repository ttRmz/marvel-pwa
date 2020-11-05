import styled from 'styled-components'
import { MessageBlock } from '../../components'

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`

export const SearchInput = styled.input`
  box-shadow: 0 0 50px -12px #666;
  background-color: #ffffff;
  padding: 14px 16px;
  border-radius: 26px;
  margin-bottom: 24px;
`

export const SearchError = styled(MessageBlock)`
  color: #3f3f3f;
  background-color: #6d6d6d1c;
`
