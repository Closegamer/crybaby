import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact';

export class KefCalc extends Component {
  render() {
    return (
      <MDBContainer className='calculator-container' fluid>
        <MDBRow>
          <MDBCol>свитч</MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size={12}>кальк кеф</MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default KefCalc;
