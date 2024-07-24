import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
  imgSrc: string;
}

const Phone: React.FC<PhoneProps> = ({ imgSrc, className, dark = false, ...props }) => {
  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
      <img className='pointer-events-none z-50 select-none' alt='phone image' />
      <div className='absolute -z-10 inset-0'>
        <img className='object-cover' src={imgSrc} alt="phone image overlay" />
      </div>
    </div>
  );
};

export default Phone;