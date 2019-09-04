import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import StakeCalcTiny from './stakeCalcTiny';

export class StakeCalc extends Component {
  state = {
    rows: 1,
    array: [],
    stakeFav: 0,
    kef1: 1,
    addKefs: [],
    totalKef: 1,
    result: 0
  };

  increase = () => {
    var oldRows = this.state.rows;
    this.setState({
      rows: oldRows + 1
    });
    this.state.array.push(this.state.rows);
  };

  decrease = () => {
    if (this.state.rows > 1) {
      if (this.state.addKefs.length > 1) {
        this.state.addKefs.pop();
      } else {
        var kef1 = this.state.kef1;
        var stakeFav = this.state.stakeFav;

        this.setState({
          addKefs: [],
          totalKef: 1,
          result: kef1 * stakeFav
        });
      }
      this.state.array.pop();

      var addKefsNew = this.state.addKefs;

      this.setState({
        rows: this.state.rows - 1,
        addKefs: addKefsNew
      });
    }
  };

  addKefsHandler = value => {
    console.log(value);
    let kef1 = this.state.kef1;

    if (value > 0) {
      let addKefs = this.state.addKefs;
      addKefs.push(value);
      var totKef = kef1;
      let tk = 1;

      for (var i = 0; i < addKefs.length; i++) {
        tk *= addKefs[i];
        totKef = kef1 * tk;
      }

      this.setState({
        addKefs: value,
        totalKef: totKef
      });
    }

    if (value === 0) {
      this.setState({
        addKefs: [],
        totalKef: kef1
      });
    }
    console.log(this.state);
  };

  calculate = () => {
    const stakeFav = this.state.stakeFav;
    const kef1 = this.state.kef1;
    const addKefs = this.state.addKefs;
    var totKefs = 1;
    for (var t = 0; t < addKefs.length; t++) {
      totKefs *= addKefs[t];
    }

    if (kef1 > 0 && stakeFav > 0) {
      var res = stakeFav * kef1 * totKefs;
      this.setState({ result: res });
    }
  };

  takeStakeFav = e => {
    this.setState({ stakeFav: e.target.value });
  };

  takeKef1 = e => {
    this.setState({ kef1: e.target.value });
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
                        onChange={this.takeKef1}
                        onBlur={this.calculate}
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                {this.state.array.length > 0 &&
                  this.state.array.map(element => (
                    <StakeCalcTiny
                      key={element}
                      index={element}
                      addKefsHandler={this.addKefsHandler}
                      calculate={this.calculate}
                    />
                  ))}
                <MDBRow>
                  <MDBCol size={6}>
                    {this.state.rows > 1 && (
                      <div className='form-group'>
                        <label htmlFor='inputPayout'>Общий коэффициент</label>
                        <input
                          type='text'
                          id='inputKefSumm'
                          disabled
                          className='form-control form-control-lg centeredInput'
                          value={this.state.totalKef}
                        />
                      </div>
                    )}
                  </MDBCol>
                  <MDBCol size={6}>
                    <div className='form-group'>
                      <label htmlFor='inputPayout'>Выплата</label>
                      <input
                        type='text'
                        id='inputPayout'
                        disabled
                        className='form-control form-control-lg centeredInput'
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
                        value={this.state.rows}
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
                      {this.state.rows > 1 && (
                        <MDBBtn
                          outline
                          rounded
                          color='danger'
                          onClick={this.decrease}
                          className='controlButs'
                        >
                          <MDBIcon icon='minus' />
                        </MDBBtn>
                      )}
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
