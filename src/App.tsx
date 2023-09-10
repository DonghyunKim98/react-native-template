import { Box } from '@mobily/stacks';
import { Text } from 'react-native';

import { QueryClientProvider, UIProvider } from './providers';

export const App = () => {
  return (
    <QueryClientProvider>
      <UIProvider>
        <Box>
          <Text>Hello World!</Text>
        </Box>
      </UIProvider>
    </QueryClientProvider>
  );
};
