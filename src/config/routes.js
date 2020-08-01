import { Home, Marcas, Modelos } from "../pages";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
    key: "home",
  },
  {
    exact: true,
    path: "/marcas",
    component: Marcas,
    key: "marcas",
  },

  {
    exact: true,
    path: "/modelos",
    component: Modelos,
    key: "modelos",
  },
];

export default routes;
