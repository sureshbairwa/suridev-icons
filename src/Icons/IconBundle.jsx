import React from 'react';
import IconComponent from './IconComponent'; // Fixed from 'IcomComponent' to 'IconComponent'
import Toparrowicon from './svg icons/Toparrow.svg';
import LeftArrowicon from './svg icons/LeftArrow.svg';
import RightArrowicon from './svg icons/RightArrow.svg';
import BottomArrowicon from './svg icons/BottomArrow.svg';
import locationsvg from './svg icons/location.svg';

const Toparrow = (props) => {
    return <IconComponent SvgComponent={({ height, width }) => <img src={Toparrowicon} alt="Toparrow" height={height} width={width} />} {...props} />;
};

const LeftArrow = (props) => {
    return <IconComponent SvgComponent={({ height, width }) => <img src={LeftArrowicon} alt="LeftArrow" height={height} width={width} />} {...props} />;
};

const RightArrow = (props) => {
    return <IconComponent SvgComponent={({ height, width }) => <img src={RightArrowicon} alt="RightArrow" height={height} width={width} />} {...props} />;
};

const BottomArrow = (props) => {
    return <IconComponent SvgComponent={({ height, width }) => <img src={BottomArrowicon} alt="BottomArrow" height={height} width={width} />} {...props} />;
};

const Location = (props) => {
    return <IconComponent SvgComponent={({ height, width }) => <img src={locationsvg} alt="Location" height={height} width={width} />} {...props} />;
};

export { Toparrow, LeftArrow, RightArrow, BottomArrow, Location };
