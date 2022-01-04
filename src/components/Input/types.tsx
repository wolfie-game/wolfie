export type InputProps = {
  styleName?: string;
  type: 'text' | 'password' | undefined;
  name: string;
  value?: string | number | undefined;
  readOnly?: boolean;
  placeholder?: string;
  handler?: (event: any) => void;
}