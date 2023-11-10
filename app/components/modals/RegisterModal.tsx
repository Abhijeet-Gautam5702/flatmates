"use client";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import { useState } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import Heading from "../Heading";
import Input from "../inputs/Input";

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
        registerModal.onClose();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to flatmates" subtitle="Create a new account" />
      <Input />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      title="Here for the first time?"
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      actionLabel="Continue"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default RegisterModal;
