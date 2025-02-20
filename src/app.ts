import { Ollama } from '@langchain/ollama'

import pgvectorStore from './dbConnection';

import { fetchDocumentPrompt } from './prompt';

import { createStuffDocumentsChain, } from 'langchain/chains/combine_documents';
import { createRetrievalChain } from 'langchain/chains/retrieval';

import { seedDocuments } from './seeder';

// uncomment to seed the database
// await seedDocuments();

const retriever = pgvectorStore.asRetriever({ searchType: 'similarity', k: 1 });

const llm = new Ollama({ model: 'llama3'})

const combineDocsChain = await createStuffDocumentsChain({
  llm,
  prompt: fetchDocumentPrompt,
});

const retrievalChain = await createRetrievalChain({ retriever, combineDocsChain })

const response = await retrievalChain.invoke({ input: "Book" })

console.log(response.answer)
console.log('Finished')