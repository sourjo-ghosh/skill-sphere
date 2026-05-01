"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Spinner,
  TextField,
  Toast,
} from "@heroui/react";
import { useState } from "react";
import { authClient } from "@/app/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    const photoUrl = formData.get("photoUrl");
    setLoading(true);
    const { data, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photoUrl, // optional, but recommended to have a profile picture URL for better user experience
    });
    setLoading(false);
    if (data) {
      // toast.success("Account created! Please login.");
      router.push("/auth/login");
    }
    if (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-11/12 mx-auto bg-bg rounded-2xl p-3 my-5 flex flex-col justify-center items-center ">
        <h1 className="mt-5 text-accent-dark text-3xl">Get Started</h1>
        <p className="text-lg text-muted-foreground">
          Join our community and start your learning journey today!
        </p>
        <Form
          className="my-7 border border-border p-5 flex w-full flex-col gap-5 rounded-2xl"
          onSubmit={onSubmit}
        >
          <TextField
            isRequired
            name="name"
            type="text"
            validate={(value) => {
              if (value.length < 2) {
                return "Name must be at least 2 characters";
              }
              return null;
            }}
          >
            <Label className="text-xl">Name</Label>
            <Input
              className="text-lg bg-bg border border-border"
              placeholder="John Doe"
            />
            <FieldError />
          </TextField>
          <TextField name="photoUrl" type="url">
            <Label className="text-xl">Photo URL</Label>
            <Input
              className="text-lg bg-bg border border-border"
              placeholder="https://example.com/photo.jpg"
            />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-xl">Email</Label>
            <Input
              className="text-lg bg-bg border border-border"
              placeholder="john@example.com"
            />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-2xl">Password</Label>
            <Input
              type={isVisible ? "text" : "password"}
              className="text-lg bg-bg border border-border"
              placeholder="Enter your password"
            />
            <Button
              isIconOnly
              aria-label={isVisible ? "Hide password" : "Show password"}
              size="sm"
              variant="ghost"
              onPress={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <Eye className="size-4" />
              ) : (
                <EyeSlash className="size-4" />
              )}
            </Button>
            <Description className="text-text text-sm">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2 mt-3">
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              type="submit"
            >
              {loading ? (
                <div className=" flex items-center gap-4">
                  <Spinner className="text-white" />
                </div>
              ) : (
                <Check />
              )}
              Submit
            </Button>
          </div>

          <div className="border-t border-border w-full py-5">
            <p className="text-center mt-5 text-sm text-text">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-primary hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SignUpPage;
