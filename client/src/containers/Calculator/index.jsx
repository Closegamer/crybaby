import React, { Component } from 'react';
import {
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBNavLink,
  MDBNav,
  MDBNavItem,
  MDBTabContent,
  MDBTabPane
} from 'mdbreact';
import ArbCalc from './arbCalc';
import KefCalc from './kefCalc';
import StakeCalc from './stakeCalc';

export class Calculator extends Component {
  state = {
    items: {
      content: '2',
      contentCard: '1'
    }
  };

  togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };

  render() {
    return (
      <MDBContainer className='main-container' fluid>
        <MDBRow>
          <MDBCol xl='9' xs='12' className='bannerTop-container'>
            {/* <div className='banner728x90custom'></div> */}
          </MDBCol>
          <MDBCol xl='3' xs='12'></MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol xl='9' xs='12' className='contentArea-container'>
            <MDBRow>
              <MDBCol>
                <h3>Калькуляторы и конвертеры</h3>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBContainer className='calculator-content-container'>
                  <MDBRow>
                    <MDBCol size={12}>
                      <MDBNav
                        pills
                        className='nav-justified pills-rounded pills-purple-gradient'
                      >
                        <MDBNavItem>
                          <MDBNavLink
                            to='#'
                            active={this.state.items['content'] === '1'}
                            onClick={this.togglePills('content', '1')}
                          >
                            Арбитраж
                          </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink
                            to='#'
                            active={this.state.items['content'] === '2'}
                            onClick={this.togglePills('content', '2')}
                          >
                            Ставки
                          </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink
                            to='#'
                            active={this.state.items['content'] === '3'}
                            onClick={this.togglePills('content', '3')}
                          >
                            Коэффициенты
                          </MDBNavLink>
                        </MDBNavItem>
                      </MDBNav>
                      <MDBTabContent activeItem={this.state.items['content']}>
                        <MDBTabPane tabId='1'>
                          <ArbCalc />
                        </MDBTabPane>
                        <MDBTabPane tabId='2'>
                          <StakeCalc />
                        </MDBTabPane>
                        <MDBTabPane tabId='3'>
                          <KefCalc />
                        </MDBTabPane>
                      </MDBTabContent>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol xl='3' xs='12' className='bannerRight-container'>
            <MDBRow>
              <MDBCol xl='12' md='4' xs='4'>
                <div className='banner240x400'></div>
              </MDBCol>
              <MDBCol xl='12' md='4' xs='4'>
                <div className='banner240x400'></div>
              </MDBCol>
              <MDBCol xl='12' md='4' xs='4'>
                <div className='banner240x400'></div>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol xl='9' xs='12' className='bannerBottom-container'>
            <div className='banner728x90custom'></div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Calculator;
