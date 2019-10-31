import * as styledComponents from "styled-components";

export interface BoxofficeThemeInterface {
  btnColorPrimary: string;
  btnColorSecondary: string;
}

const {
  default: styled,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  BoxofficeThemeInterface
>;

export const boxofficeTheme = {
  btnColorPrimary: "#e4002b",
  btnColorSecondary: "#fff"
}

export default styled;
export { ThemeProvider };