import {
  Card,
  CardTitle,
  CardAction,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

import RegisterForm from "../features/auth/RegisterForm";

export default function Register() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Register a new account</CardTitle>
        <CardDescription>
          Enter your email below to register a new account
        </CardDescription>
        <CardAction>
          <Button asChild variant="link">
            <Link to="/login">Log In</Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  );
}
