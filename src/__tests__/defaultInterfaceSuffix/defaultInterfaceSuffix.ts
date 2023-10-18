import { existsSync, readFileSync, rmdirSync } from 'fs';

import { convertFromDirectory } from '../../index';

const typeOutputDirectory = './src/__tests__/defaultInterfaceSuffix/interfaces';

describe('Create interfaces from schema files and applies a default interface suffix', () => {
  beforeAll(() => {
    if (existsSync(typeOutputDirectory)) {
      rmdirSync(typeOutputDirectory, { recursive: true });
    }
  });

  test('generates interfaces', async () => {
    const result = await convertFromDirectory({
      schemaDirectory: './src/__tests__/defaultInterfaceSuffix/schemas',
      typeOutputDirectory,
      defaultInterfaceSuffix: 'Interface'
    });

    expect(result).toBe(true);

    const oneContent = readFileSync(`${typeOutputDirectory}/One.ts`).toString();
    expect(oneContent).toBe(
      `/**
 * This file was automatically generated by joi-to-typescript
 * Do not modify this file manually
 */

/**
 * a test schema definition
 */
export interface TestInterface {
  name?: string;
}

export interface TestWithMetaInterface {
  name?: string;
}
`
    );
  });
});