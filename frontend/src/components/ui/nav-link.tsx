import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { LucideProps } from 'lucide-react';
import { NavLink } from 'react-router';

interface NavLinkItemProps {
  IconRender: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
  titleName: string;
  routeTo: string;
}

export const NavLinkItem = ({ IconRender, routeTo, titleName }: NavLinkItemProps) => {
  return (
    <NavLink className={({ isActive }) => isActive
      ? 'flex items-center gap-3 3xl:gap-4 text-blue-700 dark:text-yellow-500 text-xs 2xl:text-xl'
      : 'flex items-center gap-3 3xl:gap-4 text-xs 2xl:text-xl'}
      to={routeTo}
    >
      <IconRender />
      <span className=''>{titleName}</span>
    </NavLink>
  )
}
