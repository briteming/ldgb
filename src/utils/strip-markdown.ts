import { remark } from 'remark'
import stripMarkdownPlugin from 'strip-markdown'

export const stripMarkdown = async (content: string) => {
  return await remark()
    .use(stripMarkdownPlugin)
    .process(content)
    .then((file) => String(file))
}
