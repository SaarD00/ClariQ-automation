export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/', '/ads.txt'],
                disallow: ['/privacy-policy'],
            },
        ],
        sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
    };
    }