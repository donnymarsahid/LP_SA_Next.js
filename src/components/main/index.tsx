import React from "react";

import { Button } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "@redux/actions";

interface RootState {
  counter: { count: number }
}

export const Main: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()

  const increment = () => dispatch(increase()) // Add count number state
  const decrement = () => dispatch(decrease())  // Delete count number state

  return (
    <div style={{ height: '1000px', marginTop: '200px' }}>
      <div className="container mx-auto">
        <h1 className="text-black text-8xl mb-2">superplate</h1>
        <p className="text-lg text-black mb-3">
          Count : {counter}
        </p>
        <Button type="button" onClick={increment}>
          Plus
        </Button>
        <Button type="button" onClick={decrement}>
          Minus
        </Button>
      </div>
    </div>
  );
};
