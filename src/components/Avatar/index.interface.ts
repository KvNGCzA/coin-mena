import {CSSProperties} from 'react';

export interface AvatarProps {
  author?: string;
  avatar: string;
  hasPopOver?: boolean;
  styles?: CSSProperties;
  username: string;
}
