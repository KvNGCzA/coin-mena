type ButtonType = 'sponsor' | 'regular' | 'star';

export interface ButtonProps {
  buttonType?: ButtonType;
  text: string;
}

export interface SuggestedLinks {
  icon: string;
  text: string;
}
