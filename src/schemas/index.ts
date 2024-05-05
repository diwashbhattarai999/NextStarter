import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Please provide a valid email",
    }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, {
        message: "Username is required",
      })
      .refine((name) => name.length > 3 && name.length < 255, {
        message: "Full name must be between 3 and 255 characters",
      }),
    email: z
      .string()
      .trim()
      .min(1, { message: "Email is required" })
      .email({ message: "Please provide a valid email" }),
    password: z
      .string()
      .trim()
      .min(1, { message: "Password is required" })
      .refine(
        (password: string): boolean => {
          const trimmedPassword = password.trim();
          return (
            trimmedPassword.length > 0 &&
            trimmedPassword.length >= 6 &&
            trimmedPassword.length <= 20 &&
            /[a-z]/.test(password) &&
            /[A-Z]/.test(password)
          );
        },
        {
          message:
            "Password must be between 6 and 20 characters and contain at least one lowercase and one uppercase letter",
        }
      ),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters required!",
  }),
});

export const SettingsSchema = z
  .object({
    image: z.optional(z.string()),
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum(["ADMIN", "USER"]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string()),
    newPassword: z.optional(z.string()),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  )
  .refine(
    (data) => {
      if (data.password) {
        // Only validate password if it's provided
        return data.password.length >= 6;
      }

      return true; // Allow empty password
    },
    {
      message: "Password must be at least 6 characters",
      path: ["password"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword) {
        // Only validate newPassword if it's provided
        return data.newPassword.length >= 6;
      }

      return true; // Allow empty newPassword
    },
    {
      message: "New password must be at least 6 characters",
      path: ["newPassword"],
    }
  );
