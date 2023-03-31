import { DEVELOPMENT_ICONS } from '@/constants/DEVELOPMENT_ICONS';
import { Icon } from './Icon';
import { TOOLS_ICONS } from '@/constants/TOOLS_ICONS';
import { DESIGN_ICONS } from '@/constants/DESIGN_ICONS';

type Props = {
  type: 'development' | 'tools' | 'design';
};

export const IconList = ({ type }: Props) => {
  return (
    <div className="justify-center items-center w-full flex gap-4 flex-wrap">
      {type === 'development' &&
        DEVELOPMENT_ICONS.map((iconName, i) => (
          <Icon key={i} name={iconName} />
        ))}
      {type === 'tools' &&
        TOOLS_ICONS.map((icon, i) => <Icon key={i} name={icon} />)}
      {type === 'design' &&
        DESIGN_ICONS.map((icon, i) => <Icon key={i} name={icon} />)}
    </div>
  );
};
