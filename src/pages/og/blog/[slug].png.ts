import type { APIRoute } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { getCollection } from 'astro:content';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export async function getStaticPaths() {
  const blogs = await getCollection('blog');
  return blogs.map((post) => ({
    params: { slug: post.id.replace(/^(en|as)\//, '') },
    props: { post },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props;

  const fontPath = resolve(process.cwd(), 'node_modules/@fontsource/inter/files/inter-latin-700-normal.woff');
  const fontData = readFileSync(fontPath).buffer as ArrayBuffer;

  const title = post.data.title;
  const description = post.data.description;

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          padding: '80px',
          fontFamily: 'Inter',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                fontSize: 24,
                fontWeight: 700,
                color: '#0064e0',
                marginBottom: 20,
                textTransform: 'uppercase',
                letterSpacing: '2px',
              },
              children: 'Axomiya Indie • Blog',
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 64,
                fontWeight: 700,
                color: '#1c1e21',
                lineHeight: 1.1,
                marginBottom: 30,
                maxWidth: '900px',
              },
              children: title,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 28,
                color: '#65676b',
                lineHeight: 1.4,
                maxWidth: '800px',
              },
              children: description,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                width: '100px',
                height: '6px',
                backgroundColor: '#0064e0',
                marginTop: '50px',
                borderRadius: '3px',
              },
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [{ name: 'Inter', data: fontData, weight: 700, style: 'normal' }],
    }
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};