import React from 'react';

import { withI18n } from 'gatsby-plugin-yaml-i18n';

import '../assets/sass/main.scss';

// TODO add SEO and stuff
const LayoutGlobal = ({ children }) => {
  return <>{children}</>;
};

export default withI18n()(LayoutGlobal);
