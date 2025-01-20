import Link from 'next/link';
export default function Home() {
      return (
            <div>
                  <Link href={'/blog'}>Link to Blog PAge</Link>
                  <br />
                  <Link href={'/post'}>Link to post PAge</Link>
            </div>
      );
}
