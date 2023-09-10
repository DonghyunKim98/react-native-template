import { QueryClientProvider, RecoilProvider, UIProvider } from './providers';
import { RootNavigator } from './screens';

export const App = () => {
  return (
    <QueryClientProvider>
      <RecoilProvider>
        <UIProvider>
          <RootNavigator />
        </UIProvider>
      </RecoilProvider>
    </QueryClientProvider>
  );
};
