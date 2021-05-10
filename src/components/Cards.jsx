import React, { useState } from "react";
import Card from "./Card";
import Data from "./Data";

const Cards = () => {

  const [items, setItems] = useState(Data);

  const filterItem = (categ) => {
      const updatedItems = Data.filter((elem) => {
          return elem.category === categ;
      })
      setItems(updatedItems)
  }

  const setItem = () => {
      setItems(Data);
  }

  return (
    <>
     <div className="nav-links">
                <button className="btn" onClick={()=>{filterItem('breakfast')}} >Breakfast</button>
                <button className="btn" onClick={()=>{filterItem('lunch')}}>Lunch</button>
                <button className="btn" onClick={()=>{filterItem('supper')}}>Supper</button>
                <button className="btn" onClick={()=>{filterItem('dinner')}}>Dinner</button>
                <button className="btn" onClick={setItem}>All</button>
            </div>
      <div className="cards">
        {items.map((elem) => {

          
            const { id, text, price, para, image } = elem;

          return (
             <Card id={id}
                 price={price}
                 para={para}
                 image={image}
                 text={text}
             />
        )
        })}
      </div>
    </>
  );
};

export default Cards;
