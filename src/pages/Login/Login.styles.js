import styled from 'styled-components'

export const LoginWrapper = styled.div`
  width: 100%;
  padding: 24px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    215deg,
    rgb(0 21 36 / 72%) 0%,
    rgb(59 28 229 / 0%) 100%
  );
`

export const LoginTitle = styled.h2`
  margin-bottom: 22px;
`

export const LoginForm = styled.form`
  margin-top: 36px;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
`
