import { JinaEmbeddings } from '@langchain/community/embeddings/jina';

const embeddings = new JinaEmbeddings({
  apiKey: process.env.JINA_API_KEY, // In Node.js defaults to process.env.HUGGINGFACEHUB_API_KEY
  model: 'jina-embeddings-v3',
});
export default embeddings;