export interface TypographyContract {
  families: {
    body: string
    display: string
  }
  fontSizes: {
    bodyLg: string
    bodyMd: string
    bodySm: string
    caption: string
    displayLg: string
    displaySm: string
    titleMd: string
    titleSm: string
  }
  letterSpacing: {
    normal: string
    tight: string
    wide: string
  }
  lineHeights: {
    base: number
    compact: number
    relaxed: number
  }
  weights: {
    medium: number
    regular: number
    semibold: number
  }
}
