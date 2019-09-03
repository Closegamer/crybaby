import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact';

export class Stories extends Component {
  render() {
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size={9}>
            <h3>Тут сторисы</h3>
          </MDBCol>
          <MDBCol size={3}>
            <h3>Баннеры</h3>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Stories;
