import * as React from "react";
import { useFormikContext } from "formik";

export interface SubmitButtonProps extends React.HTMLProps<HTMLButtonElement> {
  submitting?: React.ReactNode;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children = "Submit",
  submitting = "Submitting...",
  ...props
}) => {
  const { isValid, isSubmitting } = useFormikContext<any>();

  return (
    <button {...props} type="submit" disabled={!isValid || isSubmitting}>
      {isSubmitting ? submitting : children}
    </button>
  );
};
