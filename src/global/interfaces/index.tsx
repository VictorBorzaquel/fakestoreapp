import { Ionicons } from '@expo/vector-icons';

type IconNameType = React.ComponentProps<typeof Ionicons>['name'];
type ColorType = 'main' | 'secondary' | 'attention' | 'success';

export {
  IconNameType,
  ColorType
}