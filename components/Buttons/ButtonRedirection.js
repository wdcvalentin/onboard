import { useButton } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import clsx from 'clsx';
import Link from 'next/Link';
import PropTypes from 'prop-types';
import * as React from 'react';

const CustomButtonRoot = styled('button')`
  background-color: white;
  padding: 15px 20px;
  border-radius: 20px;
  color: black;
  font-weight: 500;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 10px 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
`;

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
  const { children } = props;
  const { active, disabled, focusVisible, getRootProps } = useButton({
    ...props,
    ref,
    component: CustomButtonRoot,
  });

  const classes = {
    active,
    disabled,
    focusVisible,
  };

  return (
    <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
      {children}
    </CustomButtonRoot>
  );
});

CustomButton.propTypes = {
  children: PropTypes.node,
};

export default function ButtonRedirection({ titleRedirection, redirection }) {
  return (
    <Link href={redirection}>
      <CustomButton>{titleRedirection}</CustomButton>
    </Link>
  );
}