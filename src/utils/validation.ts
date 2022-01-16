export default function validationForm(inputContent: string, type: string): boolean {
  const expression = {
    login: /^[a-zA-Z]([a-zA-Z0-9_-]{1,29})$/,
    email: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    password: /(?=.*[A-Z]+)(?=.*[!@#\$%]+)/,
  }
  switch (type) {
    case 'login':
      return expression.login.test(inputContent)
    case 'email':
      return expression.email.test(inputContent) && inputContent.length > 0
    case 'password':
      return expression.password.test(inputContent)
    case 'password2':
      return expression.password.test(inputContent)
    default:
      return false
  }
}
