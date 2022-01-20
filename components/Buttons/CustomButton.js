import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { useEffect, useState } from "react";

export default function CustomButton(props) {
  const [colorState, setColorState] = useState(null);

  const getColorFromConstant = async (color) => {
    const colorConst = await import('../../utils/constants');
    setColorState(colorConst[color])
  }

  useEffect(() => {
    getColorFromConstant(props.bgcolor);
  }, [])

  const CustomButtonRoot = styled('button')`
        font-family: IBM Plex Sans, sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        ${props.width ? `width: ${props.width}px` : null};
        background-color: ${colorState ? colorState[500] : 'white'};
        padding: 12px 24px;
        ${props.br ? `border-radius: ${props.br}px;` : null}
        color: ${props.color ? props.color : 'white'};
        transition: all 150ms ease;
        cursor: pointer;
        border: none;
      
        &:hover {
          background-color: ${colorState ? colorState[600] : 'white'};
        }
      
        &.${buttonUnstyledClasses.active} {
          background-color: ${colorState ? colorState[700] : 'gray'};
        }
      
        &.${buttonUnstyledClasses.focusVisible} {
          box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
          outline: none;
        }
      
        &.${buttonUnstyledClasses.disabled} {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `;
  return <ButtonUnstyled {...props} component={CustomButtonRoot} type='submit' />;
}