export type InputProps = {
  styleName?: string
  type: 'text' | 'password'
  name: string
  value: string
  readOnly?: boolean
  placeholder?: string
  handler?: (event: any) => void
  error?: boolean
}
