import cc from "classcat";
import { Theme, ThemeProps } from "../types";

const build = (prefix: string, props: ThemeProps) => ({
  [prefix]: true,
  [`${prefix}--inline`]: props.inline,
  [`${prefix}--condensed`]: props.condensed,
  [`${prefix}--success`]: props.valid,
  [`${prefix}--erroneous`]: props.invalid,
  [`${prefix}--touched`]: props.touched,
  [`${prefix}--populated`]: props.populated,
  [`${prefix}--large`]: props.large,
  [`${prefix}--small`]: props.small
});

export const bem: Theme = {
  getClassNames: (_type, ctx) => ({
    fieldset: cc(build("fieldset", ctx)),
    legend: cc(build("fieldset__legend", ctx)),
    field: cc(build("field", ctx)),
    input: cc(build("field__input", ctx)),
    label: cc(build("field__label", ctx)),
    help: cc(build("field__help", ctx)),
    error: cc(build("field__error", ctx))
  })
};
