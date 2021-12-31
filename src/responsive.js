import {css} from 'styled-components';

export const mobile = (props)=>{
    return css`
        @media only screen and (max-width:480px){
            ${props}
        }
    `;

};
// mobile:768, tablet:992, laptop:1324, desktop:2024
export const tablet = (props)=>{
    return css`
        @media only screen and (max-width:768px){
            ${props}
        }
    `;

};

