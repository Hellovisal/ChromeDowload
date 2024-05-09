import React from "react";
interface itemRepo {
  name: string;
  ispacked: boolean;
}
const Item: React.FC<itemRepo> = (props) => {
  const { name, ispacked } = props;
  return <li className="item">{name}</li>;







































  //?write with if esle statement
      if (ispacked) {
          return <li>{name} ✔</li>
      }
     return <li>{name}</li>
  //?Conditionally returning nothing with null 
  // if (ispacked) {
  // return null;
  // }
  //?Conditional (ternary) operator (? :)
  // return <li className="item">{name}</li>;
  // return (
  //     <li className="item">
  //       {ispacked ? name + ' ✔' : name}
  //     </li>
  //   );
  //?Logical AND operator (&&)
    // return (
    //   <li className="item">
    //     {name} {ispacked && "✔"}
    //   </li>
    // );
};
export default Item;
