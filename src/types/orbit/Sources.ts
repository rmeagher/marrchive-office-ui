import JSONAPISource from '@orbit/jsonapi';
import MemorySource from '@orbit/memory';
import { schema } from './Schema';

export const memory = new MemorySource({ schema });
export const remote = new JSONAPISource({
    schema,
    name: 'remote',
    host: 'http://localhost:8000',
    namespace: 'api/v1'
});