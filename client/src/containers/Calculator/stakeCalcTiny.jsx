import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { addKefsHandler } from './stakeCalc';

export class StakeCalcTiny extends Component {
  render() {
    const { index, addKefsHandler, calculate } = this.props;
    return (
      <MDBRow>
        <MDBCol size={6}>&nbsp;</MDBCol>
        <MDBCol size={6}>
          <div className='form-group'>
            <input
              type='text'
              id={`inputKef${index}`}
              className='form-control form-control-lg centeredInput'
              onChange={e => addKefsHandler(e.target.value)}
              onBlur={calculate}
            />
          </div>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default StakeCalcTiny;
