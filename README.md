# COCO Portal Frontend

This is documents help you started developing with this project easily. Any Question, feedback, ... please contact with Gemon.

# Getting started

#### To run project

```
 yarn start:frontend
```

#### To lint

```
yarn lint:frontend
```

#### To build

```
yarn build:frontend
```

## Add lib to project

```
yarn add <lib-name>
```

Example:
```
yarn add lodash
```

With dependencies just use in local, dev

```
yarn add --dev <lib-name>
```


## Documentation

This project includes a `docs` folder with more details on:

### 1. [Architecture](docs/architecture.md)
```
├── public/
└── src /
	├── assets/                     // static resource (icons, image) directory
    ├── types/                     	// Contain all types TypeScript
    ├── constants/                  //  declare constant variables
    ├── components/                 // Components(global & local) directory
        ├── Button/                     // Button component use for whole project
         ├── index.ts                       // import and export Button component
         ├── styles.ts                      // contain all styles for Button component
         ├── Button.tsx                     // contain Jsx for Button component
    ├── graphql/                    // define queries, mutation, subscription, schema, config with Apollo client
    ├── pages/                      // Page components directory
    ├── themes/                     // Contain all config of theme MUI
    ├── helpers/                    // All functions type helper
    ├── utils/                      // Tool function directory
    ├── App.tsx					    // Routing configuration Directory
    ├── index.tsx
└── package.json
```

### 2. [Tech stack](docs/techstack.md)


-   React (Hooks)

-   Typescript

-   Material UI
    -   Responsive UI:  [https://material-ui.com/guides/responsive-ui/](https://material-ui.com/guides/responsive-ui/)

-   Styled-component

-   React Hook Form

-   Yup (library validate)

-   Graphql and Apollo Client for call api and management state

-   Eslint extend from prettier for coding convention


### 3. [Theming](docs/theme.md)

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

### 4. [Convention](docs/convention.md)