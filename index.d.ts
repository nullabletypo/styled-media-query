declare module 'styled-media-query' {
  export type Breakpoint = 'huge' | 'large' | 'medium' | 'small';

  export type BreakpointMap = {
    [P in Breakpoint]: string
  }

  type CSSDefinitionField = (strings: TemplateStringsArray, ...interpolations: any[]) => TemplateStringsArray

  function lessThan(breadpoint: Breakpoint): CSSDefinitionField
  function lessThan(size: string): CSSDefinitionField

  function greaterThan(breakpoint: Breakpoint): CSSDefinitionField
  function greaterThan(size: string): CSSDefinitionField

  function between(firstBreakpoint: Breakpoint, lastBreakpoint: Breakpoint): CSSDefinitionField
  function between(firstSize: string, lastSize: string): CSSDefinitionField

  const _default: {
    lessThan: typeof lessThan,
    greaterThan: typeof greaterThan,
    between: typeof between
  }

  export default _default

  export const defaultBreakpoints: BreakpointMap

  export function generateMedia(breakpoints?: BreakpointMap): typeof _default

  export function pxToRem<T extends Partial<BreakpointMap>>(breakpoints: T, ratio?: number): T

  export function pxToEm<T extends Partial<BreakpointMap>>(breakpoints: T, ratio?: number): T
}