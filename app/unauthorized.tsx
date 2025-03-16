import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <h2 className="text-3xl font-bold">
        You&apos;re not authenticated
      </h2>

      <p className="mb-4">
        You need to be authenticated to access this page or resource.
      </p>

      <Link href="/" className={buttonVariants({ variant: "outline" })}>
        Go back
      </Link>
    </div>
  )
}

export default Unauthorized;