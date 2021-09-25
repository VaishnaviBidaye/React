import React from 'react';
import MyParagraph from './MyPragraph';

const DemoOutput = (props) => {
    console.log('DemoOutput Running');
    return <MyParagraph>{props.show ? 'This is new !' : '' }</MyParagraph>;
};

export default React.memo(DemoOutput);

