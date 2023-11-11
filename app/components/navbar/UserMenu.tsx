"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import toast from "react-hot-toast";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const registerModal = useRegisterModal();

  const toggleIsOpen = () => {
    // console.log(isOpen);
    setIsOpen((prevState) => !prevState);
    console.log(isOpen);
  };

  // useCallback : skip re-rendering toggleMenu function if dependencies are not changing
  const toggleMenu = useCallback(() => {
    // console.log(isOpen);
    setIsOpen((prevState) => !prevState);
    // toast.success("Menu Opened");
    // console.log(isOpen);
  }, []);

  return (
    <div className="relative">
      <div
        className="
                flex
                flex-row
                items-center
                gap-3

            "
      >
        <div
          onClick={() => {}}
          className="
                    hidden
                    md:block
                    text-sm
                    font-semibold
                    py-3
                    px-4
                    rounded-full
                    hover:bg-neutral-100
                    transition
                    cursor-pointer
                "
        >
          Flatmates your home
        </div>
        <div
          onClick={toggleMenu}
          className="
                    p-4
                    md:px-2 md:py-1
                    border-[1px]
                    border-neutral-100
                    flex
                    flex-row
                    items-center
                    rounded-full
                    cursor-pointer
                    gap-3
                    hover:shadow-md
                    transition
                "
        >
          <AiOutlineMenu />
          <div
            className="
              hidden 
              md:block
            "
          >
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
          "
        >
          <div
            className="
              flex
              cursor-pointer
              flex-col
            "
          >
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
