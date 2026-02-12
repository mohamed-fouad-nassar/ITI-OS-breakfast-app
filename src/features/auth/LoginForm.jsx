import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { joiResolver } from "@hookform/resolvers/joi";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

import schema from "../../validations/login-schema";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function submitForm(data) {
    console.log("data:", data);

    toast("You submitted the following values:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
    });
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
      <Field data-invalid={!!errors.email}>
        <FieldLabel htmlFor="form-email">Your email</FieldLabel>
        <Input
          id="form-email"
          type="email"
          placeholder="example@gmail.com"
          autoComplete="off"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && <FieldError errors={[errors.email]} />}
      </Field>

      <Field data-invalid={!!errors.password}>
        <FieldLabel htmlFor="form-password">Your password</FieldLabel>
        <Input
          id="form-password"
          type="password"
          autoComplete="off"
          aria-invalid={!!errors.password}
          {...register("password")}
        />
        {errors.password && <FieldError errors={[errors.password]} />}
      </Field>

      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
}
