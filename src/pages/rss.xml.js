import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { DEFAULT_LANG, blogBasePath } from '../i18n/config';

export async function GET(context) {
        const posts = (await getCollection('blog')).filter((post) => post.data.lang === DEFAULT_LANG && post.data.draft !== true);
        const base = blogBasePath(DEFAULT_LANG);
        return rss({
                title: SITE_TITLE,
                description: SITE_DESCRIPTION,
                site: context.site,
                items: posts.map((post) => ({
                        ...post.data,
                        link: `${base}${post.data.slug}/`,
                })),
        });
}
