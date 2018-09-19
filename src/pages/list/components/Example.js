import React from 'react';
import {Button} from 'antd-mobile';
const Example = ({list,handleClick}) => {
  return (
    <div>
      Example  work
      <Button type="danger" onClick={handleClick} >Example</Button>
      { JSON.stringify(list)}
    </div>
  );
};

export default Example;
