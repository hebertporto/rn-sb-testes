import { useDispatch, useSelector } from 'react-redux';

const useState = () => {
  const dispatch = useDispatch();
  const dispatchOnAgeUp = () => dispatch({ type: 'AGE_UP', value: 1 });
  const dispatchOnAgeDown = () => dispatch({ type: 'AGE_DOWN', value: 1 });
  const age = useSelector((state) => state.age);
  return {
    dispatchOnAgeUp,
    dispatchOnAgeDown,
    age,
  };
};

export { useState };
