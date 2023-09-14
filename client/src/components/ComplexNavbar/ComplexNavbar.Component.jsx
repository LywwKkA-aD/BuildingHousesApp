import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  ChevronDownIcon,
  Bars2Icon,
  BookOpenIcon,
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";

import { Link } from 'react-router-dom';

import logo from "../../assets/logo.png";
 
// nav list menu
const navListMenuItems = [
  {
    title: "О нас",
    description:
      "",
  },
  {
    title: "Почему мы?",
    description:
      "",
  },
  {
    title: "Наше портфолио",
    description:
      "",
  },
  {
    title: "Готовые проекты",
    description:
      "",
  },
  {
    title: "Отзывы",
    description:
      "",
  },
  {
    title: "Контакты",
    description:
      "",
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem className="hover:bg-green-100 focus:bg-green-100">
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-blue-gray-900 hover:bg-green-100 focus:bg-green-100 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /><Link to={"/"} key=""> Главная </Link>{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 hover:bg-green-100 focus:bg-green-100 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> <Link to={"/"} key=""> Главная </Link>{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
 
// nav list component
const navListItems = [
  {
    label: "Портфолио",
    icon: BookOpenIcon,
    path: "/portfolio",
  },
  {
    label: "Проекты",
    icon: BriefcaseIcon,
    path: "/projects",
  },
  {
    label: "Отзывы",
    icon: ChatBubbleBottomCenterTextIcon,
    path: "/reviews",
  },
  {
    label: "Контакты",
    icon: IdentificationIcon,
    path: "/contacts",
  },
];
 
function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon, path }) => (
        <Link to={path} key={label}>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full hover:bg-green-100 focus:bg-green-100">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}
              {label}
            </MenuItem>
          </Typography>
        </Link>
      ))}
    </ul>
  );
}
 
const ComplexNavbarComponent = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <Navbar shadow={ false } className="mx-auto max-w-screen-2xl p-2 lg:pl-6 sticky top-0 z-[999]">
      <div className="relative mx-auto flex justify-between items-center text-blue-gray-900">
      <Link to={"/"} key="">
          <img src={logo} alt="logo" className="h-16 w-18" />
        </Link>
        <div className="absolute top-2/4 left-2/3 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}

export default ComplexNavbarComponent