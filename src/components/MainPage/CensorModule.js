import React, { useState } from 'react';
import Select from 'react-select';
import './CensorModule.css';
import { groupedOptions } from '../../data/selectOptionData';

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

function CensorModule() {

  const [selectedValue, setSelectedValue] = useState({});

  const handleChange = (evt) => {
    setSelectedValue({id:evt.value, name:evt.label, text:evt.text, author:evt.author})
  }

  return (
    <div className="censor">
      <h2 className="censor__title">Выберите то, что нужно перевести</h2>
      <div className="censor__container">
        <div className="censor__input-container">
          <Select
            // defaultValue={flat[1]}
            options={groupedOptions}
            formatGroupLabel={formatGroupLabel}
            onChange={handleChange}
          />
        </div>
        <div className="censor__direction-arrow"/>
        <div className="censor__output-container">
          <p className="censor__output-text-container">
            {selectedValue.author}
            <br />
            <br />
            {selectedValue.text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CensorModule;
