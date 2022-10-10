import React from 'react';

const Topic = ({ topic }) => {
  const { logo, name, total } = topic;
  return (
    <div>
      <img src={logo} alt="" />
    </div>
  );
};

export default Topic;