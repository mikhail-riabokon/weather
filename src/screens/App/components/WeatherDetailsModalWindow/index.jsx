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

const prepareValue = (value) => {
  return value === 'NULL' ? 0 : value;
};

function WeatherDetailsModalWindow(props) {
  const {
    isOpen,
    details: {
      place_name,
      datetime,
      temperature_max,
      temperature_min,
      precipitation_probability,
      precipitation_mm,
    },
  } = props.weatherDetailsModalWindow;

  const hideModal = () => {
    props.modalWindowActions.toogileWatherDetailsModalWindow({ isOpen: false });
  };

  return (
    <Modal isOpen={ isOpen } onRequestHide={ hideModal }>
      <ModalHeader>
        <ModalClose onClick={ hideModal }/>
        <ModalTitle>Weather in { place_name } on { moment(datetime).format('YYYY/MM/DD') }</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <div className="row" style={{ fontSize: 16 }}>
          <div className="col-xs-6">
            <div className="row">
              <div className="col-xs-12">
                <i className="fa  fa-thermometer-three-quarters" aria-hidden="true"></i>&nbsp;
                <span>Max temperature: </span><strong>{ prepareValue(temperature_max) }</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <i className="fa fa-thermometer-empty" aria-hidden="true"></i>&nbsp;
                <span>Min temperature: </span><strong>{ prepareValue(temperature_min) }</strong>
              </div>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="row">
              <div className="col-xs-12">
                <i className="fa fa-smile-o" aria-hidden="true"></i>&nbsp;
                <span>Precipitation probability: </span><strong>{ prepareValue(precipitation_probability) }%</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <i className="fa fa-tint" aria-hidden="true"></i>&nbsp;
                <span>Precipitation mm: </span><strong>{ prepareValue(precipitation_mm) }</strong>
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

WeatherDetailsModalWindow.propTypes = {
  modalWindowActions: React.PropTypes.shape({
    toogileWatherDetailsModalWindow: React.PropTypes.func.isRequired,
  }),
  weatherDetailsModalWindow: React.PropTypes.shape({
    isOpen: React.PropTypes.bool,
    details: React.PropTypes.shape({
      place_name: React.PropTypes.string,
      datetime: React.PropTypes.string,
      temperature_max: React.PropTypes.string,
      temperature_min: React.PropTypes.string,
      precipitation_probability: React.PropTypes.string,
      precipitation_mm: React.PropTypes.string
    }).isRequired,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetailsModalWindow);
