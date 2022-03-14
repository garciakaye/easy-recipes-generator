import React from 'react';
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ShoppingCart from "../LottieFiles/ShoppingCart";

const ShoppingList = () => {
  const shoppingList = useSelector((state) => state.user.shoppingList)

  const renderShoppingList = () => {
    return shoppingList.map(item => {
      return <ListGroup.Item key={item}>
        {item}
      </ListGroup.Item>
    })
  }


  return (
    <div>
      <ShoppingCart />
      <Card className="list-card">
        <ListGroup>
          {renderShoppingList()}
        </ListGroup>
      </Card>
    </div>


  )
}

export default ShoppingList