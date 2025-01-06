"use client";

import { Button } from "@/components/ui/button";
import { Component } from "@/lib/types";
import { IterationCcw } from "lucide-react";
import { useEffect } from "react";

const Error: Component<{
  error: Error & { digest?: string }
  reset: () => void
}> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <h2 className="text-3xl font-bold">
        An error occurred
      </h2>

      <p className="mb-4">
        {error.message}
      </p>

      <Button variant="outline" onClick={reset}>
        <IterationCcw className="w-4 h-4 mr-2" />
        Try again
      </Button>
    </div>
  )
}

export default Error