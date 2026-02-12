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

import LoginForm from "../features/auth/LoginForm";

export default function Login() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button asChild variant="link">
            <Link to="/register">Sign Up</Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
