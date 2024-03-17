import { MetadataRoute } from 'next'
import { locales } from './const'
const generate = (url: string, num?: string): MetadataRoute.Sitemap[number] => {
  return {
    'url': url + (num === undefined ? '' : `/${num}`),
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }
}
export default function sitemap(): MetadataRoute.Sitemap {
  const toGenerate = locales?.slice(0, 9)
  const basePath = `https://www.phonenumbergenerator.app`;
  const arr: MetadataRoute.Sitemap = [generate(basePath)].concat(toGenerate?.map(item => {
    return generate(basePath, item.label)
  }))
  return arr
}