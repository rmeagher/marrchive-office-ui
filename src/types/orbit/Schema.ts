import { Schema } from '@orbit/data';

export const schema = new Schema({
    models: {
        book: {
            attributes: {
                title: { type: 'string' },
                description: { type: 'string' },
                favorite: { type: 'boolean' },
                read: { type: 'boolean' },
                own: { type: 'boolean' },
                notes: { type: 'string' },
            },
            keys: { remoteId: {} }
        }
    }
});