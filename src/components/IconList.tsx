import { TOOLS_ICONS } from '@/constants/TOOLS_ICONS';
import { Icon } from './Icon';
import { DESIGN_ICONS } from '@/constants/DESIGN_ICONS';
import { DEVELOPMENT_ICONS } from '@/constants/DEVELOPMENT_ICONS';

type Props = {
  type: 'development' | 'tools' | 'design';
};

export const IconList = ({ type }: Props) => {
  return (
    <div className="justify-center items-center w-full flex gap-4 flex-wrap">
      {type === 'development' &&
        DEVELOPMENT_ICONS.map((icon, i) => (
          <Icon key={i} name={icon} tooltip />
        ))}
      {type === 'tools' &&
        TOOLS_ICONS.map((icon, i) => <Icon key={i} name={icon} tooltip />)}
      {type === 'design' &&
        DESIGN_ICONS.map((icon, i) => <Icon key={i} name={icon} tooltip />)}
    </div>
  );
};
