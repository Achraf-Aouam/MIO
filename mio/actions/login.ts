"use server";

import * as z from "zod";
import { isRedirectError } from "next/dist/client/components/redirect";

import { LoginSchema } from "schemas";
import { signIn } from "auth";
import { DEFAULT_LOGIN_REDIRECT } from "routes";
import { AuthError } from "node_modules/next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  console.log(validatedFields);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    if (isRedirectError(error)) {
      return { error: "Redirect error refresh" };
    }
    console.error(error);
    throw error;
  }
};
