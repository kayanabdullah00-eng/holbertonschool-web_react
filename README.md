# TypeScript

This directory contains TypeScript exercises focused on learning the fundamentals of interfaces, object typing, optional properties, readonly properties, and Webpack configuration.

## Task 0 - Creating an Interface for a Student

In this task, a `Student` interface was created with the following properties:

- `firstName`: string
- `lastName`: string
- `age`: number
- `location`: string

Two student objects were created and stored in an array called `studentsList`.

Using Vanilla JavaScript and TypeScript, a table is dynamically generated where each row displays:

- Student first name
- Student location

### Files

```text
task_0/
├── js/
│   └── main.ts
├── package.json
├── .eslintrc.js
├── tsconfig.json
└── webpack.config.js
```

## Task 1 - Teacher Interface

In this task, a `Teacher` interface was created.

The interface contains:

- `firstName`: readonly string
- `lastName`: readonly string
- `fullTimeEmployee`: boolean
- `yearsOfExperience`: optional number
- `location`: string

The interface also supports additional properties using an index signature.

Example:

```ts
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
```

The `readonly` keyword prevents `firstName` and `lastName` from being modified after the object is initialized.

The optional `yearsOfExperience` property allows a teacher object to be created without specifying years of experience.

The index signature allows additional properties to be added to a `Teacher` object.

```ts
[key: string]: any;
```

### Files

```text
task_1/
├── js/
│   └── main.ts
├── package.json
├── tsconfig.json
└── webpack.config.js
```

## Technologies

- TypeScript
- JavaScript
- Webpack
- Node.js
- npm

## Build

Install dependencies:

```bash
npm install
```

Run Webpack:

```bash
npm run build
```

A successful build should return:

```text
No type errors found
```

## Repository

- GitHub repository: `holbertonschool-web_react`
- Directory: `TypeScript`
