import React from 'react';
import { Card } from './Card';
import { calAvergeAge } from '../utils/math';

export const List = ({ title, data }) => {
  const bestFriends = data.filter(obj => obj.isBestFriend);
  const averageAge = calAvergeAge(bestFriends);

  return (
    <div className="List">
      <h2>{ title }</h2>
      <div className="row">
        <Card title={"All My Friends"}
              data={data}
              color={"Card--green"}
        />
        <Card title={"All My Best Friends"}
              data={bestFriends}
              color={"Card--purple"}
        />
        <Card title={"Average Age of My Best Friends"}
              data={averageAge}
              color={"Card--pink"}
        />
      </div>
    </div>
  );
};
