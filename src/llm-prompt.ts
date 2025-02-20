import { ChatPromptTemplate } from '@langchain/core/prompts';

const fetchDocumentPrompt = ChatPromptTemplate.fromMessages([
  [
    'system',
    `You are an AI assistant with access to a knowledge base. Your task is to answer user queries based on the retrieved documents.

      **Instructions:**
      - Use only the retrieved information to answer the query.
      - If the answer is not explicitly found in the documents, try to infer a relevant response.
      - If no relevant information exists, say "I couldn't find relevant information in the documents."

      Context:{context}`,
  ], 
  [
    'user', '{input}'
  ]
])

export { fetchDocumentPrompt };
