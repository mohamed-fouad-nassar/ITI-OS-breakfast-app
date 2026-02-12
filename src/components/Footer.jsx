import {
  TwitterIcon,
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";
import { Link } from "react-router";

import Logo from "./Logo";

export default function Footer({ navigationData }) {
  return (
    <footer>
      <div className="via-primary/20 mx-auto h-px w-4/5 bg-linear-to-r from-transparent to-transparent"></div>
      <div className="mx-auto container flex items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-8 sm:py-6 md:gap-6 md:py-8">
        <Logo />

        <div className="flex items-center gap-5 whitespace-nowrap lg:gap-12">
          {navigationData.map(({ title, href }) => (
            <Link
              key={title}
              to={href}
              className="text-muted-foreground hover:text-primary text-base! font-medium hover:bg-transparent"
            >
              {title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="#" target="_blank">
            <FacebookIcon className="size-5" />
          </Link>
          <Link href="#" target="_blank">
            <InstagramIcon className="size-5" />
          </Link>
          <Link href="#" target="_blank">
            <TwitterIcon className="size-5" />
          </Link>
          <Link href="#" target="_blank">
            <YoutubeIcon className="size-5" />
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6">
        <p className="text-center font-medium text-balance">
          {`©${new Date().getFullYear()}`}{" "}
          <Link href="/" className="hover:underline">
            OS Menufia Track
          </Link>
          , Made with ❤️ for breakfast.
        </p>
      </div>
    </footer>
  );
}
