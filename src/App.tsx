import { Box } from '@mobily/stacks';
import { Text } from 'react-native';

import { QueryClientProvider, RecoilProvider, UIProvider } from './providers';

export const App = () => {
  return (
    <QueryClientProvider>
      <RecoilProvider>
        <UIProvider>
          <Box>
            <Text>Hello World!</Text>
          </Box>
        </UIProvider>
      </RecoilProvider>
    </QueryClientProvider>
  );
};
