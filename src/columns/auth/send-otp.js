const Column = ({t}) => {
  return [
    {
      name: 'otp',
      // title: t('routes.auth.reset-password.Recovery Email'),
      formItem: {
        placeholder: t('routes.auth.reset-password.Enter OTP'),
        rules: [
          { type: 'required' },
        ]
      }
    },
  ];
};

export default Column;
