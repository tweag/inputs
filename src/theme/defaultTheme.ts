import cc from "classcat";
import { Theme, ThemeContext } from "../types";

const build = (prefix: string, ctx: ThemeContext) => ({
  [prefix]: true,
  [`${prefix}--${ctx.type}`]: true,
  [`${prefix}--inline`]: ctx.inline,
  [`${prefix}--condensed`]: ctx.condensed,
  [`${prefix}--success`]: ctx.success,
  [`${prefix}--erroneous`]: ctx.error,
  [`${prefix}--touched`]: ctx.touched,
  [`${prefix}--populated`]: ctx.populated,
  [`${prefix}--large`]: ctx.large,
  [`${prefix}--small`]: ctx.small
});

export const defaultTheme: Theme = ctx => ({
  field: cc(build("field", ctx)),
  input: cc(build("field__input", ctx)),
  label: cc(build("field__label", ctx)),
  help: cc(build("field__help", ctx)),
  error: cc(build("field__error", ctx))
});
