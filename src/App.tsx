import { Box } from '@mobily/stacks';
import { Text } from 'react-native';

import { UIProvider } from './providers';

export const App = () => {
  return (
    <UIProvider>
      <Box>
        <Text>Hello World!</Text>
      </Box>
    </UIProvider>
  );
};
