module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
  ],
  rules: {
    // exibe um aviso quando há logs em códigos no ambiente de produção
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  }
}
