import IndexedDBSource from '@orbit/indexeddb';
import { bucket } from './Buckets';
import { schema } from './Schema';

export const backup = new IndexedDBSource({
    bucket,
    schema,
    name: 'backup',
    namespace: 'marrchive'
});