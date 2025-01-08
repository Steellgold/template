import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle } from "lucide-react";
import { forwardRef, ReactElement } from "react";
import { Label } from "./label";

const Input = forwardRef<HTMLInputElement, React.ComponentProps<"input"> & {
  _prefix?: ReactElement | string;
  suffix?: ReactElement | string;

  label?: string;

  errorState?: string;
  validState?: string;
}>(
  ({ className, type, _prefix, suffix, validState = "", errorState = "", ...props }, ref) => {
    return (
      <div className="flex flex-col w-full space-y-1">
        {props.label && (
          <Label htmlFor={props.id}>
            {props.label}
          </Label>
        )}

        <div className="flex items-center">
          {_prefix && (
            <div className={cn(
              "border flex px-3 py-1 h-9 items-center justify-center text-muted-foreground bg-input/30 select-none",
              "border-r-0 rounded-l-md", {
                "cursor-not-allowed opacity-50": props.disabled,

                // States
                "border-red-500 text-red-500": errorState.length > 0 && validState.length === 0,
                "border-green-500 text-green-500": validState.length > 0 && errorState.length === 0,
              }
            )}>
              {_prefix}
            </div>
          )}
          
          <input
            type={type}
            className={cn(
              "flex h-9 w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", {
                // Rounded corners
                "rounded-r-md": !suffix,
                "rounded-l-md": !_prefix,

                // Remove rounded corners
                "rounded-r-none": suffix,
                "rounded-l-none": _prefix,

                // States
                "border-red-500 text-red-500": errorState.length > 0 && validState.length === 0,
                "border-green-500 text-green-500": validState.length > 0 && errorState.length === 0,
              },
              className
            )}
            ref={ref}
            {...props}
          />

          {suffix && (
            <div className={cn(
              "border flex px-3 py-1 h-9 items-center justify-center text-muted-foreground bg-input/30 select-none",
              "border-l-0 rounded-r-md", {
                "cursor-not-allowed opacity-50": props.disabled,

                // States
                "border-red-500 text-red-500": errorState.length > 0 && validState.length === 0,
                "border-green-500 text-green-500": validState.length > 0 && errorState.length === 0,
              }
            )}>
              {suffix}
            </div>
          )}
        </div>

        {errorState.length > 0 && (
          <div className="flex flex-row items-center gap-0.5 text-xs text-red-500 mt-1">
            <AlertCircle size={12} className="inline-block mr-1" />
            {errorState}
          </div>
        )}

        {validState.length > 0 && (
          <div className="flex flex-row items-center gap-0.5 text-xs text-green-500 mt-1">
            <CheckCircle size={12} className="inline-block mr-1" />
            {validState}
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }
