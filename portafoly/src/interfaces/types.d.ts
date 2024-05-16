export interface IconProps {
  color: string;
  class?: string;
}
export interface Skill {
  name: string;
  icon?: string;
  Icon?: (_props: IconProps) => any;
};