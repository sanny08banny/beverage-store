// pages/api/write-realtime.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { ref, set } from 'firebase/database';
import { realtimeDB } from '@/lib/firebase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const dbRef = ref(realtimeDB, 'users/user1');
    await set(dbRef, {
      username: 'john_doe',
      email: 'john@example.com',
    });

    res.status(200).json({ message: 'Data written to Realtime DB' });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong', details: err });
  }
}
