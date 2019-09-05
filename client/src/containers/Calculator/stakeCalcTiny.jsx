import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

export class StakeCalcTiny extends Component {
  render() {
    const { index, addKefsHandler } = this.props;
    return (
      <MDBRow>
        <MDBCol size={6}>&nbsp;</MDBCol>
        <MDBCol size={6}>
          <div className='form-group'>
            <input
              type='number'
              min='1'
              id={`inputKef${index}`}
              className='form-control form-control-lg centeredInput'
              onBlur={e =>
                addKefsHandler('inputKef' + index + '/' + e.target.value)
              }
            />
          </div>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default StakeCalcTiny;
