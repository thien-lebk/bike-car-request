const Column = ({t}) => {
  return [
    {
      name: 'emailOrPhoneNumber',
      // title: t('routes.auth.reset-password.Recovery Email'),
      formItem: {
        placeholder: t('routes.auth.reset-password.Enter Recovery Email/Phone'),
        rules: [
          { type: 'required' },
          { type: 'email' ,},
          { type: "min", value: 6 },
        ]
      }
    },
  ];
};

export default Column;
