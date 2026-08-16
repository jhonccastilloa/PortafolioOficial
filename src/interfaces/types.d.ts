export interface IconProps {
  color: string;
  class?: string;
}


export interface Technology {
  name: string;
  icon?: string;
  Icon?: (_props: IconProps) => any;
};
