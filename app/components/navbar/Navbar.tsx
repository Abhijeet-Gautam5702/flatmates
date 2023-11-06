"use client";

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-md px-10 py-3">
      <Container>
        <div
          className=" 
        flex
        flex-row
         justify-between 
         items-center
         gap-3
         md:gap-0
        "
        >
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
