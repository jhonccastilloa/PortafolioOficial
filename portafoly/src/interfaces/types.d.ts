export interface IconProps {
  color: string;
  class?: string;
}


export interface Tecnology {
  name: string;
  icon?: string;
  Icon?: (_props: IconProps) => any;
};

// export interface