import { Home1, Home2, About, Blog, Gallery, Service, Contact } from "../pages/index";
export const random = (myComponent: any) => {
  return myComponent[Math.floor(Math.random() * myComponent.length)];
};
let randomCompo = [<Home1 />, <Home2 />];
//console.log(random(randomCompo).type.name);
export const routes = [
  {
    path: "/",
    exact: true,
    component: random(randomCompo).type,
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
