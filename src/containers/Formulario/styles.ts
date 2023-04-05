import styled from 'styled-components'

export const Form = styled.form`
  font-size: 14px;
  font-weight: bold;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  input {
    margin-left: 6px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transformation: capitalize;
  margin-right: 6px;

  @media (max-width: 768px) {
    display: block;
  }
`
