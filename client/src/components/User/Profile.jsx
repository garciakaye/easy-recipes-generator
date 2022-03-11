import React from 'react';
import { useSelector } from "react-redux";

const Profile = () => {
  const shoppingList = useSelector((state) => state.user.shoppingList)


  const renderShoppingList = () => {
    return shoppingList.map(item => {
      return <li key={item}>
        {item}
      </li>
    })
  }


  return (
    <ul>
      {renderShoppingList()}
    </ul>);
};

export default Profile;
