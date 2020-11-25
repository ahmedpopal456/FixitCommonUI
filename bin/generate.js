const { Command } = require('commander');
const path = require('path');
const fs = require('fs');

const COMPONENT_DIR = path.resolve(__dirname, '../src/components');
const TESTS_DIR = path.resolve(__dirname, '../__tests__');

/** Creating the command line argument */
const program = new Command();
program.version('0.0.1');

program
  .command('atom')
  .description('Add an atom to the component library')
  .alias('a')
  .action((command, name) => {
    const type = command.name();
    add(name, type);
  });

program
  .command('molecule')
  .description('Add an molecule to the component library')
  .alias('m')
  .action((command, name) => {
    const type = command.name();
    add(name, type);
  });

program
  .command('organism')
  .description('Add an organism to the component library')
  .alias('o')
  .action((command, name) => {
    const type = command.name();
    add(name, type);
  });

program
.command('template')
.description('Add a template to the component library')
.alias('t')
.action((command, name) => {
  const type = command.name();
  add(name, type);
});

program.parse(process.argv);

/** Helper methods */

function add(name, type) {
  if(!isPascalCase(name)) {
    console.log('Please make sure that the Component name is PascalCase.');
    process.exit(1);
  }
  const dir = createComponentDir(name, type);

  const content = new Content(name, type);
  createFile(dir, `${name}.tsx`, content.component);
  createFile(dir, `${name}.mdx`, content.documentation);
  createFile(dir, `${name.toString().toLowerCase()}-props.model.ts`, content.props);
  createFile(dir, `index.ts`, content.index);
  createFile(dir, `style.ts`, content.style);
  createFile(TESTS_DIR, `${name}-test.tsx`, content.test);
}

/** Creating the component's directory with its name */
function createComponentDir(name, type) {
  const typeDir = path.resolve(COMPONENT_DIR, `./${type}s`);
  fs.mkdir(`${typeDir}/${name}`, (error) => {
    if(error && error.code === 'EEXIST'){
      console.log(`Component with name=${name} already exists. Please provide a different name`);
      process.exit(1);
    }
  });

  return path.resolve(typeDir, `./${name}`);
}

function createFile(parentDir, fileName, content) {
  fs.writeFile(`${parentDir}/${fileName}`, content, (error) => {
    if (error) throw error;
    console.log(fileName, 'has been created!');
  });
}

/** Content to be added inside each file */
function Content(name, type) {
  this.component = componentContent(name);
  this.props = propsContent(name);
  this.index = indexContent(name);
  this.style = styleContent(name);
  this.documentation = documentationContent(name);
  this.test = testsContent(name, type);
}

function propsContent(name) {
  return `import colors from "../../../theme/colors";
  
  export interface ${name}Props {
    /**  Example of an optional prop */
    optional?: string;
    /** Example of a required prop*/
    required: boolean;
  }`
}

function componentContent(name) {
  return `import React from "react";
import { StyledView } from "./style"
import { ${name}Props } from "./${name.toString().toLowerCase()}-props.model";

import colors from "../../../theme/colors";

/** 
 * Describe the Component 
 * @param props - The ${name}'s props
 * @returns A react native custom ${name} component
 */
export const ${name}: React.FC<${name}Props> = (props): JSX.Element => {
  return (
    <StyledView>
    </StyledView>
  );
};
/** Setting the defaults for the props*/
${name}.defaultProps = {
  optional: "default",
};
    `
}

function indexContent(name) { 
  return `import { ${name} } from "./${name}";
export { ${name} };
`
}

function styleContent(name){
  return `import styled from "styled-components/native";
import { ${name}Props } from './${name.toString().toLowerCase()}-props.model';
import colors from "../../../theme/colors";


/** 
 * Styled Components
 * 
 * Here you can add css to react native components to create a styled version of it
 */
export const StyledView = styled.View\`
    color: red;
\`;
`
}

function  documentationContent(name){
  return `---
name: ${name}
menu: Atoms
---
import { Props, Playground } from "docz";
import { ${name} } from "./${name}.tsx";

# Component
A description of the component

# Usage
\`\`\`tsx
import { ${name} } from "fixit-common-ui";
// TODO: write how the component is used and uncomment this block
\`\`\`

## Props
<Props of={${name}}></Props>

## Default
<Playground>
  <${name} required></${name}>
</Playground>
`
}

function testsContent(name, type) {
  return`import "react-native";
  import React from "react";
  import { ${name} } from "../src/components/${type}s/${name}";
  
  // Note: test renderer must be required after react-native.
  import renderer from "react-test-renderer";
  import { render, fireEvent } from '@testing-library/react-native';
  
  it('renders correctly', () => {
      renderer.create(<${name} required></${name}>);
  });
  `
}

/** To verify if the name of the component follows the repo's naming convention */
function isPascalCase(name) {
  return /^[A-Z][A-Za-z]*$/.test(name)
}