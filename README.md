This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## 1-Day = [Frist Day]

Blog ve Post dosyalarim var burda genelikle dosya yolu onemli cunku dosya mimarisine(structure) mimarisine gore bazen icerik olsun yada link yolu ona gore hal ala biliyor.

ORNEK vermek gerekirse.

Blog dosyamda birtane bos details dosya var ve icinde blogsa ait bir tane dosyam [slug] var fakat ne garipse burda sluga gecis yaptigimizda yani 

yol link
http://localhost:3001/post/%20BLogs%20nextJS%20Js333

biz icerige soyle ulasa biliyoruz 
      
      const blog = useParams();

      return <div>{params === undefined && null ? 'not found items' : blog.slug}</div>;

  

ama ne garipse postda bir tane bos dosya olusturmadan direk slug [slug] dosyasi acip benzerini yaptiginda linkteki gibi icerik aliyorsun

yol link 

http://localhost:3001/post/About%20next%20Js333

biz icerige soyle ulasa biliyoruz 
      
      const params = useParams();
      const decodedInfo = decodeURIComponent(params.slug);

      return <div>{params === undefined && null ? 'not found items' : decodedInfo}</div>;

eger burda biz decode kullanmaz isek linkin sonu bize icerik olarak donuyor 

=>>>>>>> About%20next%20Js333

bir tane dosya mimaride boyle rol oynuyor ! 