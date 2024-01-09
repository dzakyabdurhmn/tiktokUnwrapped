"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormLabel,
  FormField,
  FormMessage,
  FormItem,
  FormControl,
  FormDescription,
} from "../components/form";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Section } from "../components/section-heading";
import { Icons } from "../components/icon";
const formSchema = z.object({
  username: z
    .string()
    .trim() // Menghilangkan spasi di awal dan akhir
    .min(2, { message: "username minimal 2 karakter" })
    .max(24, { message: "username maksimal 24 karakter" })
    .startsWith("@", { message: "username wajib di awali dengan @" })
    .regex(/^\S+$/, { message: "username tidak boleh mengandung spasi" }),
});

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const username = values.username;
    window.location.href = `http://localhost:3000/${username}`;
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-10 desktopForm  mobileForm"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Section.Heading
                      className="mb-3 justify-between"
                      icon={<Icons.TikTok className="mr-10" />}
                      title="sssss"
                    />
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-[6px] min-w-[300px]"
                      placeholder="username"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" variant="tiktok" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
