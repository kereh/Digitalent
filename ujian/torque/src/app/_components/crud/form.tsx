"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { formSchema } from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "@/trpc/react";
import { useToast } from "@/components/ui/use-toast";

export default function FormCrud() {
  const { toast } = useToast();
  const utils = api.useUtils();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
      isComplete: 0,
    },
  });

  const taskMutation = api.todo.create.useMutation({
    onSuccess: async () => {
      toast({
        title: "Add success",
        description: "Data added successfully",
      });
      await utils.todo.invalidate();
      form.reset();
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    taskMutation.mutate({ task: values.task, isComplete: values.isComplete });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task</FormLabel>
              <FormControl>
                <Input placeholder="Task here" {...field} />
              </FormControl>
              <FormDescription>input your task above.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={taskMutation.isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
