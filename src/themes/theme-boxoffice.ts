import * as styledComponents from "styled-components";

export interface BoxofficeThemeInterface {
  btnColorPrimary: string;
  btnColorSecondary: string;
  btnPaddingLarge: string;
  btnPaddingRegular: string;
  btnPaddingSmall: string;
}

const {
  default: styled,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  BoxofficeThemeInterface
>;

export const boxofficeTheme = {
  btnColorPrimary: "#e4002b",
  btnColorSecondary: "#fff",
  btnPaddingLarge: "1rem",
  btnPaddingRegular: "0.5rem",
  btnPaddingSmall: "0.2rem"
}

export default styled;
export { ThemeProvider };