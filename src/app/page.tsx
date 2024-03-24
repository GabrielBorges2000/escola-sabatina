import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-2">
      <h1>Está página será para apresentação</h1>
      <p>Para fazer login acesse:</p>
      <div className="flex flex-col space-y-2">
        <Button asChild variant="outline">
          <Link href="/auth">Login </Link>
        </Button>
      </div>
    </div>
  )
}
