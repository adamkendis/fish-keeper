import React from 'react';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
    display: block;
    margin: 0 auto;
`;

const Spinner = (props) => {
  console.log(props)
  return (
    <div>
      <ClipLoader 
        css={override}
        sizeUnit={'px'}
        size={props.size}
        color={props.color}
        loading={props.loading}
      />
    </div>
  )
};

export default Spinner;


