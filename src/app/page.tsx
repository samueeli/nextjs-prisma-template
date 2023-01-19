import prisma from 'lib/prisma';
import { HomePage } from './HomePage';

const users = [{ name: 'Samuli' }, { name: 'Tapio' }];

const getData = async () => {
  const usersRes = await prisma.user.findMany();
  return usersRes;
};

async function Home() {
  const data = await getData();

  return (
    <main>
      <HomePage users={data} />
    </main>
  );
}

export default Home;
