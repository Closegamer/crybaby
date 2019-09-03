import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import StakeCalcTiny from './stakeCalcTiny';

export class StakeCalc extends Component {
  state = {
    value: 1,
    array: [],
    stakeFav: 0,
    result: 0,
    kefArray: []
  };

  decrease = () => {
    if (this.state.value > 1) {
      this.setState({ value: this.state.value - 1 });
      this.state.array.pop();
    }
  };

  increase = () => {
    this.setState({ value: this.state.value + 1 });
    this.state.array.push(this.state.value);
  };

  calculate = () => {
    console.log(this.state);
    const kefs = this.state.kefArray;
    console.log('kefs', kefs);
    var totalKef = 1;
    for (var t = 0; t < kefs.length; t++) {
      totalKef *= kefs[t];
    }
    console.log('totalKef', totalKef);
    const stakeFav = this.state.stakeFav;
    if (totalKef > 0 && stakeFav > 0) {
      var res = totalKef * stakeFav;
      console.log('res', res);
      this.setState({ result: res });
    }
  };

  takeStakeFav = e => {
    this.setState({ stakeFav: e.target.value });
  };

  takeKef = e => {
    const kefArr = this.state.kefArray;
    kefArr.push(e.target.value);

    this.setState({ kefArray: kefArr });
    // console.log(this.state);
  };

  render() {
    return (
      <MDBContainer className='calculator-stake-container' fluid>
        <MDBRow>
          <MDBCol size={6}>
            <MDBRow className='headerRow'>
              <MDBCol size={12}>Калькулятор</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size={12}>
                <MDBRow>
                  <MDBCol size={6}>
                    <div className='form-group'>
                      <label htmlFor='inputStake'>Размер ставки</label>
                      <input
                        type='text'
                        id='inputStake'
                        className='form-control form-control-lg centeredInput'
                        onChange={this.takeStakeFav}
                        onBlur={this.calculate}
                      />
                    </div>
                  </MDBCol>
                  <MDBCol size={6}>
                    <div className='form-group'>
                      <label htmlFor='inputKef1'>Коэффициент</label>
                      <input
                        type='text'
                        id='inputKef1'
                        className='form-control form-control-lg centeredInput'
                        onChange={this.takeKef}
                        onBlur={this.calculate}
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                {this.state.array.length > 0 &&
                  this.state.array.map(element => (
                    <StakeCalcTiny key={element} index={element} />
                  ))}
                <MDBRow>
                  <MDBCol size={6}>&nbsp;</MDBCol>
                  <MDBCol size={6}>
                    <div className='form-group'>
                      <label htmlFor='inputPayout'>Выплата</label>
                      <input
                        type='text'
                        id='inputPayout'
                        disabled
                        className='form-control form-control-lg'
                        value={this.state.result}
                      />
                    </div>
                  </MDBCol>
                  <MDBCol size={6}>&nbsp;</MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol size={6}>
            <MDBRow className='headerRow'>
              <MDBCol size={12}>Настройки</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size={12}>
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
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default StakeCalc;
