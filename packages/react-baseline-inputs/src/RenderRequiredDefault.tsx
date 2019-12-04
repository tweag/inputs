import * as React from "react";
import { RenderRequired } from "./types";

export const RenderRequiredDefault: RenderRequired = props => {
  return <span {...props}>*</span>;
};
