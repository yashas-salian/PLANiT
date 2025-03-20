"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-purple-300 p-4 md:rounded-2xl md:p-8 ">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">Client name</Label>
            <Input id="firstname" placeholder="Ex:-Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Phone number</Label>
            <Input id="lastname" placeholder="Ex:-9999999999" type="text" />
          </LabelInputContainer>
        </div>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">Event name</Label>
            <Input id="firstname" placeholder="Ex:-Ayush's birthday" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Category</Label>
            {/* <Input id="lastname" placeholder="Durden" type="text" /> */}
              <select className="shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600">
                <option className="text-black">Wedding</option>
                <option className="text-black">Birthday</option>
                <option className="text-black">Anniversary</option>
                <option className="text-black">Corporate events</option>
                <option className="text-black">Babyshower</option>
                <option className="text-black">Open mic night</option>
                <option className="text-black">Engagement</option>
              </select>
          </LabelInputContainer>
        </div>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">Event date</Label>
            <Input type="date" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Event Venue</Label>
            {/* <Input id="lastname" placeholder="Durden" type="text" /> */}
            <select className="shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600">
                <option className="text-black">Pune</option>
                <option className="text-black">Bangalore</option>
                <option className="text-black">Lucknow</option>
                <option className="text-black">Shambhajinagar events</option>
                <option className="text-black">Delhi</option>
                <option className="text-black">Nagpur</option>
                <BottomGradient/>
              </select>
          </LabelInputContainer>
        </div>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">Attendees count</Label>
            <Input id="firstname" placeholder="Ex:-500" type="number" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Budget</Label>
            <Input id="lastname" placeholder="Ex:-50000" type="number" />
          </LabelInputContainer>
        </div>
        {/* <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Your twitter password</Label>
          <Input
            id="twitterpassword"
            placeholder="••••••••"
            type="twitterpassword"
          />
        </LabelInputContainer> */}

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />          
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
