import React from "react";
import Container from "../container/Container";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { remove, increment, decrement } from "@/reducers/Reducers";
import { useDispatch } from "react-redux";
function Cards() {
  const products = useSelector((state) => state.Product);

  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div className="flex justify-between items-center">
      <Container>
        {products.map((product) => {
          return (
            <div key={product} className="m-4 w-80">
              <div className="border rounded-lg shadow-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <p className="text-lg font-semibold">${product.price}</p>
                 
                  <div className="flex justify-between items-center">
                    <Button onClick={() => handleRemove(product.id)}>
                      Remove items
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default React.memo(Cards);
