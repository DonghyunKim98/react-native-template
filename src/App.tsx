import {
  MutationIndicatorProvider,
  QueryClientProvider,
  RecoilProvider,
  UIProvider,
} from './providers';
import { RootNavigator } from './screens';

export const App = () => {
  return (
    <QueryClientProvider>
      <RecoilProvider>
        <UIProvider>
          <MutationIndicatorProvider>
            <RootNavigator />
          </MutationIndicatorProvider>
        </UIProvider>
      </RecoilProvider>
    </QueryClientProvider>
  );
};
