import Link from 'next/link';
import Users from './users/page';
export default function Home() {
      return (
            <div>
                  <Link href={'/blog'}>Link to Blog PAge</Link>
                  <br />
                  <Link href={'/post'}>Link to post PAge</Link>
                  <Link href={'/users'}>
                        <Users />
                  </Link>
            </div>
      );
}
