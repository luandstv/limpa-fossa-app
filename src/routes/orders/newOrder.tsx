import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/orders/newOrder')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/orders/newOrder"!</div>
}
