import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { todo } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const todoRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.todo.findMany();
  }),

  create: protectedProcedure
    .input(z.object({ task: z.string().min(1), isComplete: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(todo).values({
        task: input.task,
        isComplete: input.isComplete,
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(todo).where(eq(todo.id, input.id));
    }),

  update: protectedProcedure
    .input(
      z.object({ id: z.string(), task: z.string(), isComplete: z.number() }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(todo)
        .set({ task: input.task, isComplete: input.isComplete })
        .where(eq(todo.id, input.id));
    }),
});
