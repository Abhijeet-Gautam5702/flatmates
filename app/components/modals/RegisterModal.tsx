"use client";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import { useState } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";

import { FcGoogle } from "react-icons/fc";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    // send the data to the axios register-api endpoint
    axios
      .post("/api/register", data)
      .then(() => {
        // toast.success("Account created");
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to flatmates" subtitle="Create a new account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div
      className="
        flex
        flex-col
        gap-4
        mt-3
      "
    >
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />

      <div
        className="
          text-neutral-500
          text-center
          font-light
        "
      >
        <div
          onClick={registerModal.onClose}
          className="
            flex
            flex-row
            items-center
            justify-center
            gap-2
          "
        >
          <div>Already Have and account?</div>
          <div className="text-blue-800 cursor-pointer hover:underline hover:cursor-pointer">
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      title="Register"
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      actionLabel="Continue"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
