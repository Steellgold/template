import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Forbidden = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <h2 className="text-3xl font-bold">
        Forbidden access
      </h2>

      <p className="mb-4">
        You are not allowed to access this page or resource.
      </p>

      <Link href="/" className={buttonVariants({ variant: "outline" })}>
        Go back home
      </Link>
    </div>
  )
}

export default Forbidden;