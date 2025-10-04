import { cookies } from 'next/headers';

const getAuthNumbers = async () => {
  const cookieStore = await cookies();
  const { value } = cookieStore.get('auths');
  const authNumbers = value && JSON.parse(value);
  return authNumbers || null;
};

export default getAuthNumbers;
