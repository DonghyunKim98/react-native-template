import { Text } from 'react-native';

import { BasicLayout } from '@/layouts';

type LoginScreenProps = {};

export const LoginScreen = ({}: LoginScreenProps) => {
  // TODO : Use MutationIndicator Properly
  // useMutationIndicator([true])

  return (
    <BasicLayout>
      <Text>Login Screen</Text>
    </BasicLayout>
  );
};
