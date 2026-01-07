import { z } from "zod";

export type StandFormType = z.infer<typeof standFormSchema>;

export const standFormSchema = z.object({
  space_package: z
    .string()
    .min(1, { message: "Выберите опцию" })
    .refine((value) => value !== "package", "Выберите опцию"),

  company_name: z
    .string()
    .min(3, { message: "Название компании должно быть не менее 3 символов" }),

  rep_name: z
    .string()
    .min(3, { message: "Имя представителя должно быть не менее 3 символов" }),

  job_title: z
    .string()
    .min(3, { message: "Должность должна быть не менее 3 символов" }),

  participants_number: z.union([z.string(), z.number()]).refine(
    (value) => {
      const num = typeof value === "string" ? Number(value) : value;
      return !isNaN(num) && num >= 1;
    },
    { message: "Укажите корректное количество участников" }
  ),

  country: z
    .string()
    .min(3, { message: "Название страны должно быть не менее 3 символов" }),

  email: z.string().email({ message: "Укажите корректный email" }),

  phone: z
    .string()
    .min(8, { message: "Номер телефона должен быть не менее 8 символов" }),

  website: z.string().optional(),

  visa_support: z.string().optional(),
});

export const standDefaultValues = {
  space_package: "",
  company_name: "",
  rep_name: "",
  job_title: "",
  participants_number: 1,
  country: "",
  email: "",
  phone: "",
  website: undefined,
  visa_support: undefined,
};
