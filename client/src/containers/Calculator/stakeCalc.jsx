import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

export class StakeCalc extends Component {
  state = {
    value: 1
  };

  decrease = () => {
    if (this.state.value > 1) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <MDBContainer className='calculator-stake-container' fluid>
        <MDBRow>
          <MDBCol>свитч</MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size={12}>
            <MDBRow>
              <MDBCol size={3}>
                <div className='form-group'>
                  <label htmlFor='inputStake'>Размер ставки</label>
                  <input
                    type='text'
                    id='inputStake'
                    className='form-control form-control-lg centeredInput'
                  />
                </div>
              </MDBCol>
              <MDBCol size={3}>
                <div className='form-group'>
                  <label htmlFor='inputKef1'>Коэффициент</label>
                  <input
                    type='text'
                    id='inputKef1'
                    className='form-control form-control-lg centeredInput'
                  />
                </div>
              </MDBCol>
              <MDBCol size={6}>
                <div className='form-group'>
                  <MDBRow>
                    <MDBCol size={6}>
                      <label htmlFor='quantity'>Количество событий</label>
                      <br />
                      <input
                        type='text'
                        id='quantity'
                        name='quantity'
                        value={this.state.value}
                        className='form-control form-control-lg centeredInput'
                        onChange={() => console.log('change')}
                      />
                    </MDBCol>
                    <MDBCol size={3} className='controlButs-containers'>
                      <MDBBtn
                        outline
                        rounded
                        color='success'
                        onClick={this.increase}
                        className='controlButs'
                      >
                        <MDBIcon icon='plus' />
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol size={3} className='controlButs-containers'>
                      <MDBBtn
                        outline
                        rounded
                        color='danger'
                        onClick={this.decrease}
                        className='controlButs'
                      >
                        <MDBIcon icon='minus' />
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size={3}>&nbsp;</MDBCol>
              <MDBCol size={3}>
                <div className='form-group'>
                  <label htmlFor='inputPayout'>Выплата</label>
                  <input
                    type='text'
                    id='inputPayout'
                    disabled
                    className='form-control form-control-lg'
                  />
                </div>
              </MDBCol>
              <MDBCol size={6}>&nbsp;</MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default StakeCalc;
