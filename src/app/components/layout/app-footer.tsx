import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex mt-10 justify-center">
      <div className="flex items-center justify-between w-11/12 lg:w-3/6 h-fit p-5 rounded-lg bg-background/70 backdrop-blur-lg ring-1 ring-gray-500">
        <div className="">
          All rights reserved &copy;
          <div className="text-right text-xs">
            <Link
              href="/legal/terms"
              className="text-foreground underline underline-offset-4 hover:no-underline"
            >
              Terms
            </Link>
            <span className="text-muted-foreground/70 mx-1">&bull;</span>
            <Link
              href="/legal/privacy"
              className="text-foreground underline underline-offset-4 hover:no-underline"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
