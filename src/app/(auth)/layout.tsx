import { AuthGuard } from '@/components/Common/AuthGuard'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>
}