<h1 align="center">Architecture</h1>

### Standard directory structure

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

###

