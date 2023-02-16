import React, { DetailedHTMLProps, HTMLAttributes } from "react";

interface ErrorMessageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const ErrorMessage: React.FunctionComponent<ErrorMessageProps> = ({
  children,
}) => {
  return (
    <div className="alert alert-danger m-0" role="alert">
      <b>Error</b>
      <p className="m-0">{children}</p>
    </div>
  );
};

export default ErrorMessage;
