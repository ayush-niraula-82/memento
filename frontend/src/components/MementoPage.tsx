import { Modal } from "antd";
import useAxios from "../hooks/useAxios";
import Card from "./shared/Card";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router";

type Inputs = {
  title: string;
  description: string;
  date: string;
  location: string;
  mood: string;
};

const MementoPage = () => {
  const { data, loading, error } = useAxios("api/all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (request: any) => {
    try {
      const response = await axios.post(
        "http://localhost:4001/api/add",
        request,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err: any) {
      console.log("Something Went Wrong");
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="bg-gray-50 font-sans">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-3xl font-extrabold md:text-5xl text-gray-800">
              Memorable Moments & Milestones
            </h2>
            <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
              Capturing the most special moments and achievements from our
              journey.
            </p>

            {/* Cards Grid */}
            <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6">
              {loading ? (
                <div className="col-span-full text-center text-xl text-gray-500">
                  Loading...
                </div>
              ) : error ? (
                <div className="col-span-full text-center text-xl text-red-500">
                  Something went wrong. Please try again later.
                </div>
              ) : (
                data?.data?.map((response) => (
                  <Card key={response?.id} response={response} />
                ))
              )}
            </div>

            {/* Buttons Section */}
            <div className="flex justify-center space-x-4 mt-8">
              <a
                onClick={showModal}
                className="cursor-pointer rounded-md bg-black px-6 py-3 text-center font-semibold text-white hover:bg-gray-800 transition duration-300 ease-in-out"
              >
                Create
              </a>
              <Link to='/'
                
                className="rounded-md bg-gray-600 px-6 py-3 text-center font-semibold text-white hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Modal
        title="Create a Memento"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label htmlFor="title" className="font-semibold text-lg">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="border p-2 rounded"
                placeholder="Enter title"
                {...register("title", { required: true })}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="description" className="font-semibold text-lg">
                Description
              </label>
              <textarea
                id="description"
                className="border p-2 rounded"
                rows={4}
                placeholder="Enter description"
                {...register("description", { required: true })}
              ></textarea>
            </div>

            <div className="flex flex-col">
              <label htmlFor="mood" className="font-semibold text-lg">
                Mood
              </label>
              <select
                id="mood"
                className="border p-2 rounded"
                {...register("mood", { required: true })}
              >
                <option value="">Select Mood</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="excited">Excited</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="date" className="font-semibold text-lg">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="border p-2 rounded"
                {...register("date", { required: true })}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="location" className="font-semibold text-lg">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="border p-2 rounded"
                placeholder="Enter location"
                {...register("location", { required: true })}
              />
            </div>

            <div className="mt-6 flex justify-center">
              <button
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
                type="submit"
              >
                Create Memento
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default MementoPage;
