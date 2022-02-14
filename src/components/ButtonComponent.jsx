import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';
import changeColor from '../state/colors/colors.actions';

const ButtonComponent = ({colors}) => {
  const dispatch = useDispatch();

  return (
    colors &&
    colors.map((color) => {
      return (
        <Button
          colorScheme={color}
          w="400px"
          h="60px"
          onClick={() => dispatch(changeColor(color))}>
          RED
        </Button>
      );
    })
  );
};

export default ButtonComponent;
