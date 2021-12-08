import Home1 from "../pages/Home1";
import Home2 from "../pages/Home2";
import About from "../pages/About";
import Service from "../pages/Service";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";
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
];
