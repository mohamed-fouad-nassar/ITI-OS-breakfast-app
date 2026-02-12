import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="py-40 container mx-auto flex items-center justify-center flex-col gap-8 px-4">
      <div className="text-7xl font-extrabold tracking-tight text-amber-500">
        404
      </div>
      <h2 className="text-2xl font-semibold">Page not found</h2>
      <p className="text-muted-foreground text-center max-w-md">
        Oops! The page you are looking for doesn’t exist or may have been moved.
        Let’s get you back on track.
      </p>
      <div className="flex gap-4 w-full justify-center">
        <Button asChild variant="default">
          <Link to="/">
            <Home className="w-4 h-4 me-1" />
            Go Home
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to={-1}>
            <ArrowLeft className="w-4 h-4 me-1" />
            Go Back
          </Link>
        </Button>
      </div>
    </div>
  );
}
