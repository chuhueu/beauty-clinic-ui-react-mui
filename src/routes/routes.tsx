import { Home1, Home2, About, Blog, Gallery, Service, Contact } from "../pages/index";
export const routes = [
  {
    path: "/",
    exact: true,
    component: Home1,
  },
  {
    path: "/home2",
    component: Home2,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/service",
    component: Service,
  },
  {
    path: "/gallery",
    component: Gallery,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/contact",
    component: Contact,
  },
];
