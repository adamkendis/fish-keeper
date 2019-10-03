import React from 'react';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const Spinner = (props) => {
  return (
    <div>
      <ClipLoader 
        css={override}
        sizeUnit={'px'}
        size={this.props.size}
        color={this.props.color}
        loading={this.props.loading}
      />
    </div>
  )
};

export default Spinner;


