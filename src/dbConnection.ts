import {
  DistanceStrategy,
  PGVectorStore,
} from '@langchain/community/vectorstores/pgvector';
import { PoolConfig } from 'pg';
import embeddings from './embedding.js';


const dbConfig = {
  postgresConnectionOptions: {
    type: 'postgres',
    host: 'localhost',
    user: 'sujeet',
    password: '',
  } as PoolConfig,
  tableName: 'langchain_pg_embedding',
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