import { Document } from "@langchain/core/documents";
import pgVectorStore  from "./dbConnection.js";

const documents = [
  new Document({
    pageContent: 'The sunset creates beautiful reflections on the lake',
    metadata: { id: '101', location: 'lake', topic: 'nature' }
  }),
  new Document({
    pageContent: 'Mountain climbers reached the snowy peak yesterday',
    metadata: { id: '102', location: 'mountain', topic: 'sports' }
  }),
  new Document({
    pageContent: 'Jazz musicians perform every Friday at the downtown club',
    metadata: { id: '103', location: 'downtown', topic: 'music' }
  }),
  new Document({
    pageContent: 'Local farmers showcase organic vegetables at the weekend market',
    metadata: { id: '104', location: 'farmers market', topic: 'food' }
  }),
  new Document({
    pageContent: 'Scientists discovered a new species of butterfly in the rainforest',
    metadata: { id: '105', location: 'rainforest', topic: 'science' }
  }),
  new Document({
    pageContent: 'The ancient temple ruins attract thousands of tourists annually',
    metadata: { id: '106', location: 'temple', topic: 'history' }
  }),
  new Document({
    pageContent: 'Tech startups gather for the annual innovation conference',
    metadata: { id: '107', location: 'convention center', topic: 'technology' }
  }),
  new Document({
    pageContent: 'Children learn about marine life at the aquarium',
    metadata: { id: '108', location: 'aquarium', topic: 'education' }
  }),
  new Document({
    pageContent: 'Local theater group presents Shakespeare under the stars',
    metadata: { id: '109', location: 'park', topic: 'entertainment' }
  }),
  new Document({
    pageContent: 'Urban gardeners transform rooftop into community green space',
    metadata: { id: '110', location: 'rooftop', topic: 'community' }
  })
];


export async function seedDocuments() {
  await pgVectorStore.addDocuments(documents, { ids : documents.map((doc) => doc.metadata.id)});
}