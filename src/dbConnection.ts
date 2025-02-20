import {
  DistanceStrategy,
  PGVectorStore,
} from '@langchain/community/vectorstores/pgvector';
import { PoolConfig } from 'pg';
import { OllamaEmbeddings } from '@langchain/ollama';

const config = {
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
  new OllamaEmbeddings({
    model: 'llama3',
  }),
  config,
);

export default pgvectorStore;