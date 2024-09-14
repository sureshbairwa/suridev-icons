import React from 'react';
import IcomComponent from './IconComponent'; 
import {ReactComponent as Toparrowicon} from './svg icons/Toparrow.svg'
import {ReactComponent as LeftArrowicon} from './svg icons/LeftArrow.svg'
import {ReactComponent as RightArrowicon} from './svg icons/RightArrow.svg'
import {ReactComponent as BottomArrowicon} from './svg icons/BottomArrow.svg'
import {ReactComponent as locationsvg} from './svg icons/location.svg'


const Toparrow = (props) => {
    return <IcomComponent SvgComponent={Toparrowicon} {...props} />;
  };



const LeftArrow = (props) => {
    return <IcomComponent SvgComponent={LeftArrowicon} {...props} />;
  };

  

const RightArrow = (props) => {
    return <IcomComponent SvgComponent={RightArrowicon} {...props} />;
  };

const BottomArrow = (props) => {
    return <IcomComponent SvgComponent={BottomArrowicon} {...props} />;
  };

const Location = (props) =>{
  return <IcomComponent SvgComponent={locationsvg} {...props} />
}




  
  export {Toparrow,LeftArrow,RightArrow,BottomArrow,Location};

