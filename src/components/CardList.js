import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  console.log('CardList');
  return (
    <React.Fragment>
      {robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />;
      })}
    </React.Fragment>
  );
};

export default CardList;
