// app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/seller/dashboard'); // Auto-redirect to your dashboard
}
