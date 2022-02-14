import { shallowEqual, useSelector } from 'react-redux';
import { Center, VStack} from '@chakra-ui/react';
import ButtonComponent from './components/ButtonComponent';

function App() {
  const color = useSelector(state => state.color, shallowEqual);
  
  const colors = ["red", "blue", "yellow", "green", "pink"]
  
  return (
    <Center display="flex" h="100vh" color="white">
      <Center bg={color} w="400px" h="400px" p={4} color="white">
        {color}
      </Center>
      <VStack spacing={4} align="stretch" ml={8}>
        <ButtonComponent colors={colors} />
      </VStack>
    </Center>
  );
}

export default App;
