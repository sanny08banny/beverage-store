// pages/api/write-firestore.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const userRef = doc(firestore, 'users', 'user1');
    await setDoc(userRef, {
      username: 'john_doe',
      email: 'john@example.com',
    });

    res.status(200).json({ message: 'Data written to Firestore' });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong', details: err });
  }
}
