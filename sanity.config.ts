import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

export default defineConfig({
    name: 'default',
    title: 'Storm X Digital Studio',

    projectId: 'f5l2gwnt',
    dataset: 'production',

    basePath: '/studio',

    plugins: [deskTool()],

    schema: {
        types: schemaTypes,
    },
});
