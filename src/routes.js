import React from 'react';

const PersonalPerfect = React.lazy(() =>
  import("./containers/PersonalPerfect")
  );
const CorporateCool = React.lazy(() => import("./containers/CorporateCool"));
const Diamond = React.lazy(() => import("./containers/Diamond"));
const BusinessBest = React.lazy(() => import("./containers/BusinessBest"));

const routes = [
  {
    route: '/personal-perfect',
    component: PersonalPerfect,
  },
  {
    route: '/corporate-cool',
    component: CorporateCool,
  },
  {
    route: '/diamond',
    component: Diamond,
  },
  {
    route: '/business-best',
    component: BusinessBest,
  },
];

export default routes;
