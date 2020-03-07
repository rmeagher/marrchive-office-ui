import { Schema } from '@orbit/data';

export const schema = new Schema({
    models: {
        author: {
            attributes: {
                first_name: { type: 'string' },
                last_name: { type: 'string' },
            },
            relationships: {
                books: { type: 'hasMany', model: 'book', inverse: 'author' },
            }
        },
        book: {
            attributes: {
                title: { type: 'string' },
                description: { type: 'string' },
                notes: { type: 'string' },
            },
            relationships: {
                author: { type: 'hasOne', model: 'author', inverse: 'books' },
            }
        }
    }
});