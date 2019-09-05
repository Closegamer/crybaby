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
    let oldRows = this.state.rows;

    this.state.array.push(oldRows + 1);

    const arrayNew = this.state.array;

    this.setState({
      rows: oldRows + 1,
      array: arrayNew
    });
  };

  decrease = () => {
    if (this.state.rows > 1) {
      let stakeFav = this.state.stakeFav;
      let kef1 = this.state.kef1;

      let addKefsArray = this.state.addKefs;

      let addKefsCnt = this.state.addKefs.length;

      if (addKefsCnt === 0) {
        return;
      }

      let addKefsIndex = addKefsCnt - 1;
      let deletedKefPre = addKefsArray[addKefsIndex];
      const delKef = deletedKefPre.split('/');
      const deletedKef = delKef[1];

      if (addKefsCnt > 0) {
        let addKefsToDelete = this.state.addKefs;
        addKefsToDelete.pop();
        let arrayToDelete = this.state.array;
        arrayToDelete.pop();

        let result = this.state.result;
        let totalKef = this.state.totalKef;

        var newResult = result / deletedKef;
        var newTotalKef = totalKef / deletedKef;

        var rowsNew = this.state.rows - 1;

        this.setState({
          rows: rowsNew,
          totalKef: newTotalKef,
          result: newResult
        });
      }
    }
  };

  addKefsHandler = value => {
    let addKefsNew = this.state.addKefs;
    let kef1 = this.state.kef1;
    let valueSplit = value.split('/');

    for (var i = 0; i < addKefsNew.length; i++) {
      let temp = addKefsNew[i].split('/');
      if (temp[0] === valueSplit[0]) {
        addKefsNew.splice(i);
        addKefsNew.push(value);
        this.calculate();
        return;
      }
    }

    if (valueSplit[1] <= 0) {
      var field = document.getElementById(valueSplit[0]);
      field.value = '1';
      return;
    }

    var valueAsString = String(valueSplit[1]);
    var coma = ',';
    var dot = '.';

    if (valueAsString.indexOf(coma) > -1 || valueAsString.indexOf(dot) > -1) {
      parseFloat(valueSplit[1]);
    }

    if (valueSplit[1] > 0) {
      addKefsNew.push(value);

      var totKef = kef1;
      let tk = 1;
      if (addKefsNew.length > 0) {
        for (var i = 0; i < addKefsNew.length; i++) {
          let shuttle = addKefsNew[i].split('/');
          tk *= shuttle[1];
          totKef = kef1 * tk;
        }
      }
    }

    if (valueSplit[1] <= 0) {
      addKefsNew.push(valueSplit[0] + '/' + '1');
    }
    this.setState({
      addKefs: addKefsNew,
      totalKef: totKef
    });
    this.calculate();
  };

  calculate = () => {
    const stakeFav = this.state.stakeFav;
    const kef1 = this.state.kef1;
    let shut = this.state.addKefs;
    const addKefsNew = [];

    for (var r = 0; r < shut.length; r++) {
      addKefsNew.push(shut[r]);
    }

    let totKefs = 1;

    for (var i = 0; i < addKefsNew.length; i++) {
      let addKefsSplit = addKefsNew[i].split('/');
      totKefs *= addKefsSplit[1];
    }

    const totalKefNew = kef1 * totKefs;

    if (kef1 > 0 && stakeFav > 0) {
      var res = stakeFav * kef1 * totKefs;
      this.setState({
        result: res,
        totalKef: totalKefNew
      });
    }
  };

  takeStakeFav = e => {
    if (e.target.value <= 0) {
      var field = document.getElementById('inputStake');
      field.value = '1';
      this.setState({
        stakeFav: 1
      });
      this.calculate();
      return;
    } else {
      this.setState({ stakeFav: e.target.value });
    }
  };

  takeKef1 = e => {
    const totalKefNew = this.state.totalKef;
    if (e.target.value <= 0) {
      var field = document.getElementById('inputKef1');
      field.value = '1';
      this.setState({
        kef1: 1,
        totalKef: totalKefNew
      });
      return;
    } else {
      const kef1New = e.target.value;
      this.setState({
        kef1: kef1New,
        totalKef: totalKefNew * kef1New
      });
    }
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
                        type='number'
                        min='1'
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
                        type='number'
                        min='1'
                        id='inputKef1'
                        className='form-control form-control-lg centeredInput'
                        onChange={this.takeKef1}
                        onBlur={this.calculate}
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                {this.state.array.length > 0 &&
                  this.state.array.map((element, i) => (
                    <StakeCalcTiny
                      key={i}
                      index={element}
                      addKefsHandler={this.addKefsHandler}
                      calculate={this.calculate}
                    />
                  ))}
                <MDBRow>
                  <MDBCol size={6}>&nbsp;</MDBCol>
                  <MDBCol size={6}>
                    <MDBRow>
                      <MDBCol
                        size={6}
                        className='controlButs-containers text-center'
                      >
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
                      <MDBCol
                        size={3}
                        className='controlButs-containers text-center'
                      >
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
                  </MDBCol>
                </MDBRow>
                <MDBRow className='m50'>
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
