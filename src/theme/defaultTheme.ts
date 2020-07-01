import cc from "classcat";
import { Theme, ThemeContext } from "../types";

const build = (prefix: string, ctx: ThemeContext) => ({
  [prefix]: true,
  [`${prefix}--${ctx.type}`]: true,
  [`${prefix}--inline`]: ctx.inline,
  [`${prefix}--condensed`]: ctx.condensed,
  [`${prefix}--success`]: ctx.valid,
  [`${prefix}--erroneous`]: !ctx.valid,
  [`${prefix}--touched`]: ctx.touched,
  [`${prefix}--populated`]: ctx.populated,
  [`${prefix}--large`]: ctx.large,
  [`${prefix}--small`]: ctx.small
});

export const defaultTheme = (ctx: ThemeContext): Theme => ({
  field: cc(build("field", ctx)),
  input: cc(build("field__input", ctx)),
  label: cc(build("field__label", ctx)),
  help: cc(build("field__help", ctx)),
  error: cc(build("field__error", ctx)),
  fieldset: cc(build("fieldset", ctx)),
  legend: cc(build("fieldset__legend", ctx))
});
