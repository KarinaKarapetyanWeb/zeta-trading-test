import React, { DetailedHTMLProps, HTMLAttributes } from "react";

interface LoaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Loader: React.FunctionComponent<LoaderProps> = (): JSX.Element => {
  return (
    <div
      className="w-100 d-flex align-items-center justify-content-center"
      style={{ height: 200 }}
    >
      <div className="spinner-border text-primary" role="status"></div>
    </div>
  );
};

export default Loader;
