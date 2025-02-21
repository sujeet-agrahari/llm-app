import {
  DistanceStrategy,
  PGVectorStore,
} from '@langchain/community/vectorstores/pgvector';
import { PoolConfig } from 'pg';
import embeddings from './embedding.js';


const dbConfig = {
  postgresConnectionOptions: {
    type: 'postgres',
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  } as PoolConfig,
  tableName: process.env.DB_TABLE_NAME || 'postgres',
  columns: {
    idColumnName: 'id',
    vectorColumnName: 'embedding',
    contentColumnName: 'document',
    metadataColumnName: 'cmetadata',
  },
  // supported distance strategies: cosine (default), innerProduct, or euclidean
  distanceStrategy: 'cosine' as DistanceStrategy,
};

const pgvectorStore = await PGVectorStore.initialize(
  embeddings,
  dbConfig,
);

export default pgvectorStore;