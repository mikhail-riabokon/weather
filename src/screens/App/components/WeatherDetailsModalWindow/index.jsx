import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody
} from 'react-modal-bootstrap';
import * as modalWindowActions from '../../../../actions/modalWindow';

function WeatherDetailsModalWindow(props) {
  const {
    isOpen,
    details,
  } = props.weatherDetailsModalWindow;
  const {
    place_name,
    datetime,
    temperature_max,
    temperature_min,
    precipitation_probability,
    precipitation_mm,
  } = details;

  console.log('details', details);

  const hideModal = () => {
    props.modalWindowActions.toogileWatherDetailsModalWindow({ isOpen: false });
  };

  return (
    <Modal isOpen={isOpen} onRequestHide={hideModal}>
      <ModalHeader>
        <ModalClose onClick={hideModal}/>
        <ModalTitle>Weather in { place_name } on { moment(datetime).format('YYYY/MM/DD') }</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <div className="row" style={{ fontSize: 16 }}>
          <div className="col-xs-6">
            <div className="row">
              <div className="col-xs-12">
                <i className="fa  fa-thermometer-three-quarters" aria-hidden="true"></i>&nbsp;
                <span>Max temperature: </span><strong>{ temperature_max }</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <i className="fa fa-thermometer-empty" aria-hidden="true"></i>&nbsp;
                <span>Min temperature: </span><strong>{ temperature_min }</strong>
              </div>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="row">
              <div className="col-xs-12">
                <i className="fa fa-smile-o" aria-hidden="true"></i>&nbsp;
                <span>Precipitation probability: </span><strong>{ precipitation_probability }%</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <i className="fa fa-tint" aria-hidden="true"></i>&nbsp;
                <span>Precipitation mm: </span><strong>{ precipitation_mm }</strong>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

const mapDispatchToProps = (dispatch) => ({
  modalWindowActions: bindActionCreators(modalWindowActions, dispatch),
});

const mapStateToProps = (state) => ({
  weatherDetailsModalWindow: state.modalWindow.weatherDetailsModalWindow,
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetailsModalWindow);
