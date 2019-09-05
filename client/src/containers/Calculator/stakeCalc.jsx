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
    console.log('increase state: ', this.state);
  };

  decrease = () => {
    if (this.state.rows > 1) {
      let kef1 = this.state.kef1;
      let addKefsArray = this.state.addKefs;
      let addKefsCnt = this.state.addKefs.length;
      let addKefsIndex = addKefsCnt - 1;

      console.log('decrease addKefsCnt:', addKefsCnt);

      let deletedKefPre = addKefsArray[addKefsIndex];

      // if (addKefsCnt > 1) {
      //   deletedKefPre = this.state.addKefs[addKefsCnt - 1];
      // } else {
      // }
      console.log('decrease this.state.addKefs', addKefsArray);

      console.log('decrease deletedKefPre', deletedKefPre);

      const delKef = deletedKefPre.split('/');

      const deletedKef = delKef[1];

      console.log('decrease deletedKef', deletedKef);

      if (addKefsCnt > 1) {
        this.state.addKefs.pop();
        this.state.array.pop();

        let addKefsNew = this.state.addKefs;
        let arrayNew = this.state.array;

        this.setState({
          addKefs: addKefsNew,
          array: arrayNew
        });
      } else {
        var stakeFav = this.state.stakeFav;
        this.setState({
          addKefs: [],
          totalKef: kef1,
          result: kef1 * stakeFav
        });
      }

      var addKefsNew = this.state.addKefs;
      console.log('decrease addKefsNew', addKefsNew);
      var tk = 1;
      var totKef = 1;

      for (var i = 0; i < addKefsNew.length; i++) {
        let shuttle = addKefsNew[i].split('/');
        tk *= shuttle[1];
        totKef = kef1 * tk;
      }

      let result = this.state.result;
      let totalKef = this.state.totalKef;

      var newResult = result / deletedKef;
      var newTotalKef = totalKef / deletedKef;

      this.setState({
        rows: this.state.rows - 1,
        addKefs: totKef,
        totalKef: newTotalKef,
        result: newResult
      });
    }

    console.log(
      'decrease this.state.addKefs.length:',
      this.state.addKefs.length
    );
    console.log('decrease state: ', this.state);
    this.calculate();
  };

  addKefsHandler = value => {
    console.log('addKefsHandler value:', value);
    console.log('addKefsHandler this.state.addKefs:', this.state.addKefs);
    let kef1 = this.state.kef1;
    let valueSplit = value.split('/');
    console.log(valueSplit[1]);
    if (valueSplit[1] > 0) {
      let addKefsNew = this.state.addKefs;

      addKefsNew.push(value);

      console.log('addKefsHandler addKefsNew:', addKefsNew);
      var totKef = kef1;
      let tk = 1;

      if (addKefsNew.length > 0) {
        for (var i = 0; i < addKefsNew.length; i++) {
          let shuttle = addKefsNew[i].split('/');
          tk *= shuttle[1];
          totKef = kef1 * tk;
        }
      }

      this.setState({
        addKefs: addKefsNew,
        totalKef: totKef
      });
    }

    if (value === 0) {
      this.setState({
        addKefs: [],
        totalKef: kef1
      });
    }
    console.log('addKefsHandler state:', this.state);
    this.calculate();
  };

  calculate = () => {
    const stakeFav = this.state.stakeFav;
    const kef1 = this.state.kef1;
    let shut = this.state.addKefs;
    console.log('shut', shut);
    const addKefsNew = [];

    for (var r = 0; r < shut.length; r++) {
      addKefsNew.push(shut[r]);
    }

    console.log('calculate addKefsNew:', addKefsNew);

    let totKefs = 1;

    for (var i = 0; i < addKefsNew.length; i++) {
      let addKefsSplit = addKefsNew[i].split('/');
      console.log('calculate addKefs[i]:', addKefsNew[i]);
      console.log('calculate addKefsSplit[1]:', addKefsSplit[1]);
      totKefs *= addKefsSplit[1];
    }
    console.log('calculate totKefs:', totKefs);

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
    this.setState({ stakeFav: e.target.value });
  };

  takeKef1 = e => {
    const totalKefNew = this.state.totalKef;
    const kef1New = e.target.value;
    this.setState({
      kef1: kef1New,
      totalKef: totalKefNew * kef1New
    });
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
