'use client'
import React from 'react'

type Props = {
  onPayment(id: string): void
  products: any[]
  tier: string
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckIcon, XIcon } from 'lucide-react'

export const SubscriptionCard = ({ onPayment, products, tier }: Props) => {
  console.log(products)
  return (
    <section className="flex w-full justify-center md:flex-row flex-col gap-6">
      {products &&
        products.map((product: any) => (
          <Card
            className="p-3 dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl  transition-all duration-150 border  "
            key={product.id}
          >
            <CardHeader>
              <CardTitle className='text-3xl font-bold text-neutral-600 dark:text-white '>{product.nickname}</CardTitle>
              <CardTitle className='text-3xl font-bold text-neutral-600 dark:text-white '>
                <p className="font-bold text-4xl  ">
                  {product.nickname == 'Basic'
                    ? '$0'
                    : product.nickname == 'Pro'
                      ? <span className='from-purple-500 bg-gradient-to-tl text-5xl  to-white via-purple-400 text-transparent bg-clip-text'>$19</span>
                      : product.nickname == 'Eternal' && '$99'}

                </p></CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <CardDescription className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                {product.nickname == 'Eternal'
                  ? 'Designed for large organizations requiring comprehensive HR solutions.'
                  : product.nickname == 'Pro'
                    ? 'Ideal for growing businesses needing more advanced features.'
                    : product.nickname == 'Basic' &&
                    "Perfect for small businesses just starting out and want to try the platform."}

                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2 ">
                    <CheckIcon /> {product.nickname == "Basic" ? "3" : product.nickname == "Pro" ? "20" : "Unlimited"} Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    {product.nickname == "Basic" ? "50  " : "Unlimited"} tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    {product.nickname == "Basic" ? <XIcon /> : <CheckIcon />}
                    Two-step Actions
                  </li>
                </ul>
              </CardDescription>

              <div className="flex justify-between">

              </div>
              {product.nickname == tier ? (
                <Button
                  disabled
                  variant="outline"
                >
                  Active
                </Button>
              ) : (
                <Button
                  onClick={() => onPayment(product.id)}
                  variant="outline"
                >
                  Purchase
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
    </section>
  )
}
