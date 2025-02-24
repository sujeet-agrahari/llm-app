import { Document } from "@langchain/core/documents";
import vectorStore  from "./dbConnection.js";

const documents = [
  new Document({
    pageContent: 'http://atom-harmony-api.dev.int.kaplan.com/health',
    metadata: { id: '120', title: 'Harmony API Health URL' },
  }),
  new Document({
    pageContent: 'http://atom-exposure-api.dev.int.kaplan.com/health',
    metadata: { id: '121', title: 'Exposure API Health URL' },
  }),

  new Document({
    pageContent: 'http://atom-reporting-api.dev.int.kaplan.com/health',
    metadata: { id: '122', title: 'Reporting API Health URL' },
  }),
  new Document({
    pageContent: 'http://atom-sequence-api.dev.int.kaplan.com/health',
    metadata: { id: '123', title: 'Sequence API Health URL' },
  }),
  new Document({
    pageContent: 'http://atom-itemselection-api.dev.int.kaplan.com/health',
    metadata: { id: '124', title: 'Item Selection API Health URL' },
  }),
  new Document({
    pageContent: 'http://atom-studentperformance-api.dev.int.kaplan.com/health',
    metadata: { id: '125', title: 'Student Performance API Health URL' },
  }),
];


export async function seedDocuments() {
  await vectorStore.addDocuments(documents, { ids : documents.map((doc) => doc.metadata.id)});
}