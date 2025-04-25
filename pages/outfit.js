import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
// import { getGlobalData } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'

/**
 * 潜水装备
 * @param {*} props
 * @returns
 */
const DivingOutfit = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutOutfit' {...props} />
}

// export async function getStaticProps(req) {
//   const { locale } = req

//   const props = (await getGlobalData({ from: '404', locale })) || {}
//   return { props }
// }

export default DivingOutfit
