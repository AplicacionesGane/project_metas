import { RemixiconComponentType } from '@remixicon/react';
import { NavLink } from 'react-router-dom'

interface NavLinkItemProps {
  IconRender: RemixiconComponentType;
  titleName: string;
  routeTo: string;
}

export const NavLinkItem = ({ IconRender, routeTo, titleName }: NavLinkItemProps) => {
  return (
    <NavLink className={({ isActive }) => isActive
      ? 'flex items-center gap-3 3xl:gap-4 text-blue-700 dark:text-yellow-500 text-xs lg:text-xl 2xl:text-2xl'
      : 'flex items-center gap-3 3xl:gap-4 text-xs lg:text-xl 2xl:text-2xl'}
      to={routeTo}
    >
      <IconRender />
      <span className=''>{titleName}</span>
    </NavLink>
  )
}
