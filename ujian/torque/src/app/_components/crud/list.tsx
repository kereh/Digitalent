"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { api } from "@/trpc/react";
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
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function List() {
  const utils = api.useUtils();
  const [data] = api.todo.getAll.useSuspenseQuery();

  const { toast } = useToast();
  const [curr_id, setCurrId] = useState<string>("");

  const updateMutation = api.todo.update.useMutation({
    onSuccess: () => {
      toast({
        title: "Update success",
        description: "Data updated successfully",
      });
      utils.invalidate();
    },
  });

  const deleteMutate = api.todo.delete.useMutation({
    onSuccess: () => {
      toast({
        title: "Delete success",
        description: "Data Deleted successfully",
      });
      utils.invalidate();
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
      isComplete: 0,
    },
  });

  function onSubmit(val: z.infer<typeof formSchema>) {
    updateMutation.mutate({
      id: curr_id,
      task: val.task,
      isComplete: val.isComplete,
    });
  }

  utils.invalidate();

  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      {deleteMutate.isPending && "Loading..."}
      {!deleteMutate.isPending &&
        data.map((d, i) => (
          <div key={i}>
            <div className="flex items-center justify-between">
              <div className="text-sm">{d.task}</div>
              <div className="flex items-center gap-5">
                <Sheet>
                  <SheetTrigger asChild>
                    <div
                      className="cursor-pointer text-xs text-green-600"
                      onClick={() => {
                        setCurrId(d.id);
                      }}
                    >
                      Edit
                    </div>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Edit Data</SheetTitle>
                      <SheetDescription>Edit todo task.</SheetDescription>
                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="space-y-8"
                        >
                          <FormField
                            control={form.control}
                            name="task"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Edit Task</FormLabel>
                                <FormControl>
                                  <Input placeholder="Task here" {...field} />
                                </FormControl>
                                <FormDescription>
                                  edit your task above.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button
                            type="submit"
                            disabled={updateMutation.isPending}
                          >
                            Submit
                          </Button>
                        </form>
                      </Form>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
                <div
                  className="cursor-pointer text-xs text-destructive"
                  onClick={() => deleteMutate.mutate({ id: d.id })}
                >
                  Delete
                </div>
              </div>
            </div>
            <Separator className="my-2" />
          </div>
        ))}
    </ScrollArea>
  );
}
