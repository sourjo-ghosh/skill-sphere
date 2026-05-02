"use client";
import { authClient } from "@/app/lib/auth-client";
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
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Convert FormData to plain object
    const email = formData.get("email");
    const password = formData.get("password");
    const { data, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
    });
    if (data) {
      toast.success("Login successful! Redirecting...");
      setTimeout(() => {
        router.push("/"); // Change this to your desired redirect URL
      }, 1500); // Redirect after 1.5 seconds to show the toast message
    }
    if (error) {
      toast.error("Login failed: " + error.message);
      setLoading(false);
    }
  };
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-11/12 mx-auto bg-bg p-3 rounded-2xl my-5 flex flex-col justify-center items-center ">
        <h1 className="mt-5 text-accent-dark text-3xl">Login Form</h1>
        <p className="text-lg text-muted-foreground">
          Welcome back! Please enter your details to access your account.
        </p>
        <Form
          className="my-7 border border-border p-5 flex w-full flex-col gap-5 rounded-2xl"
          onSubmit={onSubmit}
        >
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
              className=" text-lg bg-bg border border-border"
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
          <span className="text-center">Or</span>
          <div className="border-t border-border w-full py-5">
            <Button
              onClick={() =>
                authClient.signIn.social({
                  provider: "google",
                })
              }
              className="text-text rounded-2xl bg-bg-secondary hover:bg-bg-secondary/80 w-full flex items-center justify-center gap-2"
            >
              <FaGoogle />
              Sign in with Google
            </Button>
            <p className="text-center mt-5 text-sm text-text">
              Don't have an account?{" "}
              <a href="/auth/signup" className="text-primary hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
