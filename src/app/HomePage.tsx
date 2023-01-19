import { User } from '@prisma/client';

interface Props {
  users: User[] | any;
}

export const HomePage = ({ users }: Props) => {
  return (
    <div>
      <h1>Welcome</h1>
      {users?.map((user: User, i: number) => (
        <p key={i}>{user?.name}</p>
      ))}
    </div>
  );
};
