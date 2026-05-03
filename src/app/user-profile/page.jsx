"use client";

import React, { useState } from "react";
import { useSession, authClient } from "../lib/auth-client";
import Image from "next/image";
import {
  Button,
  Modal,
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Spinner,
} from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
const UserProfile = () => {
  const { data } = useSession();
  const user = data?.user;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const image = formData.get("image");

    const { data, error } = await authClient.updateUser({
      name: name,
      image: image,
    });
    if (data) {
      toast.success("Profile updated successfully!");
      setTimeout(() => {
        router.refresh();
      }, 1000);
    }

    if (error) {
      toast.error("Update failed: " + error.message);
    }
    setLoading(false);
  };
  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl text-accent-dark mt-5">User Profile</h1>
        {user ? (
          <div className="flex flex-col justify-center items-center my-5 p-5 border border-border rounded-2xl">
            <div className="p-3 rounded-2xl border border-border">
              <Image
                src={user?.image || "/default-avatar.png"}
                alt="Profile Picture"
                width={350}
                height={200}
                className="mb-5 object-cover rounded-2xl"
              />
            </div>
            <p className="text-lg mt-3">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="text-lg">
              <strong>Email:</strong> {user.email}
            </p>

            <Modal>
              <Button className="mt-5 px-4 py-2 bg-primary text-white rounded-2xl hover:bg-primary/80">
                Update Profile
              </Button>
              <Modal.Backdrop
                className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
                variant="blur"
              >
                <Modal.Container>
                  <Modal.Dialog className="sm:max-w-[400px]">
                    <Modal.Header className="items-center text-center">
                      <Modal.Heading className="text-xl font-bold text-accent-dark">
                        Update Profile
                      </Modal.Heading>
                    </Modal.Header>
                    <Modal.Body>
                      <Form
                        onSubmit={onSubmit}
                        className="flex flex-col gap-4 w-full"
                      >
                        <TextField
                          isRequired
                          name="name"
                          defaultValue={user.name}
                        >
                          <Label>Name</Label>
                          <Input className="bg-bg border border-border mt-1" />
                          <FieldError />
                        </TextField>
                        <TextField name="image" defaultValue={user.image || ""}>
                          <Label>Profile Image URL</Label>
                          <Input className="bg-bg border border-border mt-1" />
                          <FieldError />
                        </TextField>
                        <div className="flex gap-2 w-full mt-4">
                          <Button
                            className="w-full"
                            slot="close"
                            variant="secondary"
                          >
                            Cancel
                          </Button>
                          <Button
                            className="w-full flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90"
                            type="submit"
                          >
                            {loading ? (
                              <Spinner className="text-white size-4" />
                            ) : (
                              <Check className="size-4" />
                            )}
                            Save Changes
                          </Button>
                        </div>
                      </Form>
                    </Modal.Body>
                    <Modal.CloseTrigger />
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>
          </div>
        ) : (
          <p className="text-xl text-muted-foreground mt-5">
            No user is currently logged in.
          </p>
        )}
      </div>
    </>
  );
};

export default UserProfile;
