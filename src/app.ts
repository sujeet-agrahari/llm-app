import { Ollama } from '@langchain/ollama'
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents';
import { createRetrievalChain } from 'langchain/chains/retrieval';
import { createSpinner } from 'nanospinner';
import 'dotenv/config';

import pgvectorStore from './dbConnection.js';

import { fetchDocumentPrompt } from './llm-prompt.js';

import { seedDocuments } from './seeder.js';
import config from './config.js';
import { promptUserQuery } from './prompt.js';

// uncomment to seed the database
// await seedDocuments();

// get user query
const userQuery = await promptUserQuery();

const spinner = createSpinner('🤔 Thinking...').start()

const retriever = pgvectorStore.asRetriever({ searchType: 'similarity', k: 1 });

const r = await pgvectorStore.similaritySearch(userQuery, 1);
console.log(r);

const llm = new Ollama({ model: config.model})

const combineDocsChain = await createStuffDocumentsChain({
  llm,
  prompt: fetchDocumentPrompt,
});

const retrievalChain = await createRetrievalChain({ retriever, combineDocsChain })

const response = await retrievalChain.invoke({ input: userQuery })

console.log('\n🤖 AI Bot:', response.answer, '\n')

spinner.success({ text: '✅ Success! Your query has been processed.' });

process.exit(0);