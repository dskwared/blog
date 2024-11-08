import { client } from './client'

export const getAuthors = async () => {
  const authors = await client.getEntries({ content_type: 'authors' })
  return authors.items
}
