import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

export default defineConfig({
    name: 'default',
    title: 'Storm X Digital Studio',

    projectId: 'f5l2gwnt',
    dataset: 'production',

    basePath: '/studio',

    plugins: [structureTool()],

    schema: {
        types: schemaTypes,
    },
});
