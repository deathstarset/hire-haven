"use client";
import {
  type SubmitApplicationType,
  submitApplicationSchema,
} from "@/types/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { createApplication } from "@/requests/applications";
import { useState } from "react";

interface SubmitApplicationFormProps {
  job: GetJobResponse;
  user: GetUserResponse;
}
export default function SubmitApplicationForm({
  job,
  user,
}: SubmitApplicationFormProps) {
  const form = useForm<SubmitApplicationType>({
    resolver: zodResolver(submitApplicationSchema),
    values: {
      additionalInformation: "",
    },
  });
  const [serverError, setServerError] = useState<null | string>(null);
  async function onSubmit(values: SubmitApplicationType) {
    const data = {
      userId: user.id,
      jobId: job.id,
      additionalInformation: values.additionalInformation,
    };
    try {
      const application = await createApplication(data);
      setServerError(null);
    } catch (error) {
      setServerError((error as Error).message);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="additionalInformation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Information</FormLabel>
              <FormControl>
                <Textarea />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit Application</Button>
        {serverError && <p className="text-red-500">{serverError}</p>}
      </form>
    </Form>
  );
}
