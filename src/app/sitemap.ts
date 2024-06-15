import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/common/url'
import { getLatestPosts } from '@/common/post'

export const revalidate = 60

export default async function sitemap() {
  const staticMap = [
    {
      url: getSiteUrl('/').href,
      lastModified: new Date(),
    },
    {
      url: getSiteUrl('/posts').href,
      lastModified: new Date(),
    },
    {
      url: getSiteUrl('/tags').href,
      lastModified: new Date(),
    },
    {
      url: getSiteUrl('/friends').href,
      lastModified: new Date(),
    },
    {
      url: getSiteUrl('/waytosea').href,
      lastModified: new Date(),
    },
    {
      url: getSiteUrl('/about').href,
      lastModified: new Date(),
    },
  ] satisfies MetadataRoute.Sitemap

  const posts = await getLatestPosts()
  const dynamicMap = posts.map(post => ({
    url: getSiteUrl(`/posts/${post.slug}`).href,
    lastModified: new Date(),
  })) satisfies MetadataRoute.Sitemap

  return [...staticMap, ...dynamicMap]
}
