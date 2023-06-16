<h1 align="center">Theme</h1>

### Create theme Theme Provider
- To change theme go to [the RootTheme](/src/themes/RootTheme.ts).
- Refer [the MUI official document](https://mui.com/material-ui/customization/theming/) for more information.
### Reuse variables
- We define all color variables in [colors.ts](/src/themes/colors.ts), and styles variables in [colors.ts](/src/themes/styles.ts)
- These variables should be imported into [the RootTheme](/src/themes/RootTheme.ts) to config and use in theme variable.
Example:
```ts
  export const DialogWrapper = styled(Box)(({ theme }) => ({
  height: '785px',
  width: '560px',
  backgroundColor: theme.palette.primary.light,
  }));`
```
- Props name use for styling need to add symbol `$` to mark it as a props using for style.

- Example

  ```tsx
  // On component
  <DialogHeader $hasCloseBtn={hasCloseBtn}>
  </DialogHeader>
  ```

  ```ts
  // On styling file
  interface DialogHeaderProps extends BoxProps {
  $hasCloseBtn: boolean;
  }

  export const DialogHeader = styled(Box, {
    shouldForwardProp: (prop) => isPropValid(String(prop)),
  })<DialogHeaderProps>(({ $hasCloseBtn, theme }) => ({
    paddingRight: $hasCloseBtn && '3.75rem',
  }));
  ```
