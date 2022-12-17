import * as React from 'react';
import { navigation } from '../../constants/navigation';
import { Stargazers } from '../GitHub/Stargazers';

export interface ISocialNavigationProps {}

export const SocialNavigation: React.FunctionComponent<ISocialNavigationProps> = (props: React.PropsWithChildren<ISocialNavigationProps>) => {
  return (
    <nav
      className='flex flex-col items-center justify-center gap-6'
      role={`list`}>

      <navigation.sponsor.icon className="inline-block h-6 w-6" aria-hidden="true" />

      <ul className='flex justify-center gap-6'>
        {navigation.social.map((item) => (
          <li>
            <a key={item.name} title={item.title} href={item.href} className="text-gray-400 hover:text-gray-500" rel={`noopener noreferrer`}>
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
      
      <Stargazers />
    </nav>
  );
};