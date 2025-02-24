import { MongoDBAtlasVectorSearch } from '@langchain/mongodb';
import { MongoClient, ServerApiVersion }  from 'mongodb';
import embeddings from './embedding.js';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';


const client = new MongoClient(uri, {
});

const collection = client.db(process.env.MONGODB_DATABASE).collection(process.env.MONGODB_COLLECTION || 'documents');

const vectorStore = new MongoDBAtlasVectorSearch(embeddings, {
  collection: collection,
  indexName: 'default', // The name of the Atlas search index. Defaults to "default"
  textKey: 'text', // The name of the collection field containing the raw content. Defaults to "text"
  embeddingKey: 'embedding', // The name of the collection field containing the embedded text. Defaults to "embedding"
});

export default vectorStore;