export interface ThemePalette {
  accent: {
    100: string
    300: string
    500: string
    700: string
  }
  neutral: {
    0: string
    50: string
    100: string
    200: string
    400: string
    700: string
    900: string
    1000: string
  }
}

export interface SemanticColorTokens {
  accent: {
    contrast: string
    primary: string
    primaryHover: string
  }
  background: {
    canvas: string
    elevated: string
    inverse: string
  }
  border: {
    default: string
    strong: string
  }
  text: {
    inverse: string
    primary: string
    secondary: string
  }
}
