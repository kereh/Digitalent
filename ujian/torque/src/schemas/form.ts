import { z } from "zod";

export const formSchema = z.object({
  task: z
    .string()
    .min(3, { message: "Task minimum 3 character" })
    .max(100, { message: "Task maximum 100 character" }),
  isComplete: z.number().default(0),
});
