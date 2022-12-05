import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
      background: #565656;
      border-radius: 22px;
      position: relative;

      color: #FFFF;
      padding: 2px 12px;
      min-width: 120px;
      width: 100%;

      ${({variant}) => variant !== "primary" && css`
            min-width: 167px;
            height: 33px;

            background: #E41056;

            &::after {
                  content: '';
                  position: absolute;
                  border: 1px solid #E41056;
                  top: -4px;
                  left: -5px;
                  width: calc(100% + 7px);
                  height: calc(100% + 6px);
                  border-radius: 22px;
            }
      ` }
`


      
    
