import React from 'react';
import IconComponent from './IconComponent'; // Fixed from 'IcomComponent' to 'IconComponent'
import Toparrowicon from './svg icons/Toparrow.svg';
import LeftArrowicon from './svg icons/LeftArrow.svg';
import RightArrowicon from './svg icons/RightArrow.svg';
import BottomArrowicon from './svg icons/BottomArrow.svg';
import locationsvg from './svg icons/location.svg';
import Checkmarksvg from './svg icons/Checkmark.svg';
import Closesvg from './svg icons/close.svg';
import Clsoe2svg from './svg icons/close2.svg';
import Close3svg from './svg icons/Close3.svg';
import deletesvg from './svg icons/delete.svg';

import Downarrowsvg from './svg icons/Downarrow.svg';
import Heartsvg from './svg icons/Heart.svg';
import Homesvg from './svg icons/Home.svg';
import Leftarrow2svg from './svg icons/Leftarrow2.svg';
import Locksvg from './svg icons/Lock.svg';
import Menusvg from './svg icons/Menu.svg';
import Minussvg from './svg icons/Minus.svg';

import Plussvg from './svg icons/Plus.svg';
import Profilesvg from './svg icons/Profile.svg';
import RightArrow2svg from './svg icons/Rightarrow2.svg';
import Searchsvg from './svg icons/Search.svg';
import Trashsvg from './svg icons/Trash.svg';
import Unlocksvg from './svg icons/Unlock.svg';
import Uparrowsvg from './svg icons/Uparrow.svg';
import circlesvg from './svg icons/Shapes/circle.svg'

import ellipsesvg from './svg icons/Shapes/ellipse.svg';
import hexagonsvg from './svg icons/Shapes/Hexagon.svg';
import parallelogramsvg from './svg icons/Shapes/Parallelogram.svg';
import pentagonsvg from './svg icons/Shapes/pentagon.svg';
import rectanglesvg from './svg icons/Shapes/rectangle.svg';
import squaresvg from './svg icons/Shapes/square.svg';
import starsvg from './svg icons/Shapes/star.svg';
import trapezoidsvg from './svg icons/Shapes/trapezoid.svg';
import trianglesvg from './svg icons/Shapes/triangle.svg';



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


const Checkmark = (props) => {
    return <IconComponent SvgComponent={({ height, width }) => <img src={Checkmarksvg} alt="Location" height={height} width={width} />} {...props} />;
};


const Close = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Closesvg} alt="Close" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Close2 = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Clsoe2svg} alt="Close2" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Close3 = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Close3svg} alt="Close3" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Delete = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={deletesvg} alt="Delete" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Downarrow = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Downarrowsvg} alt="Downarrow" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Heart = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Heartsvg} alt="Heart" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Home = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Homesvg} alt="Home" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Leftarrow2 = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Leftarrow2svg} alt="Leftarrow2" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Lock = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Locksvg} alt="Lock" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Menu = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Menusvg} alt="Menu" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Minus = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Minussvg} alt="Minus" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Plus = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Plussvg} alt="Plus" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Profile = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Profilesvg} alt="Profile" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const RightArrow2 = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={RightArrow2svg} alt="RightArrow2" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Search = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Searchsvg} alt="Search" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Trash = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Trashsvg} alt="Trash" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Unlock = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Unlocksvg} alt="Unlock" height={height} width={width} />
            )}
            {...props}
        />
    );
};

const Uparrow = (props) => {
    return (
        <IconComponent 
            SvgComponent={({ height, width }) => (
                <img src={Uparrowsvg} alt="Uparrow" height={height} width={width} />
            )}
            {...props}
        />
    );
};


const Circle = (props) => {
    return <IconComponent SvgComponent={({ height, width }) => <img src={circlesvg} alt="Toparrow" height={height} width={width} />} {...props} />;
};


const Ellipse = (props) => (
    <IconComponent SvgComponent={({ height, width }) => <img src={ellipsesvg} alt="Ellipse" height={height} width={width} />} {...props} />
);

const Hexagon = (props) => (
    <IconComponent SvgComponent={({ height, width }) => <img src={hexagonsvg} alt="Hexagon" height={height} width={width} />} {...props} />
);

const Parallelogram = (props) => (
    <IconComponent SvgComponent={({ height, width }) => <img src={parallelogramsvg} alt="Parallelogram" height={height} width={width} />} {...props} />
);

const Pentagon = (props) => (
    <IconComponent SvgComponent={({ height, width }) => <img src={pentagonsvg} alt="Pentagon" height={height} width={width} />} {...props} />
);

const Rectangle = (props) => (
    <IconComponent SvgComponent={({ height, width }) => <img src={rectanglesvg} alt="Rectangle" height={height} width={width} />} {...props} />
);

const Square = (props) => (
    <IconComponent SvgComponent={({ height, width }) => <img src={squaresvg} alt="Square" height={height} width={width} />} {...props} />
);

const Star = (props) => (
    <IconComponent SvgComponent={({ height, width }) => <img src={starsvg} alt="Star" height={height} width={width} />} {...props} />
);

const Trapezoid = (props) => (
    <IconComponent SvgComponent={({ height, width }) => <img src={trapezoidsvg} alt="Trapezoid" height={height} width={width} />} {...props} />
);

const Triangle = (props) => (
    <IconComponent SvgComponent={({ height, width }) => <img src={trianglesvg} alt="Triangle" height={height} width={width} />} {...props} />
);

export { Toparrow, LeftArrow, RightArrow, BottomArrow, Location ,Checkmark,Close, Close2, Close3, Delete, Downarrow, Heart, Home, Leftarrow2, Lock, Menu, 
    Minus, Plus, Profile, RightArrow2, Search, Trash, Unlock, Uparrow,Circle};

export { Ellipse, Hexagon, Parallelogram, Pentagon, Rectangle, Square, Star, Trapezoid, Triangle };

