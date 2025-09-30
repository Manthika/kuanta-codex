import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { resolveLocale } from '../i18n';

export async function GET(context) {
        const posts = await getCollection('blog');
        return rss({
                title: SITE_TITLE,
                description: SITE_DESCRIPTION,
                site: context.site,
                items: posts
                        .filter((post) => {
                                const entryLocale = post.data.lang ?? post.slug.split('/')[0];
                                return resolveLocale(entryLocale) === 'en' && post.data.draft !== true;
                        })
                        .map((post) => ({
                                ...post.data,
                                link: `/blog/${post.data.translationKey}/`,
                        })),
        });
}
