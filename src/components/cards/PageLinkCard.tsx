"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from 'next/link'
  

const PageLinkCard = () => {
  return (
    <>
    <Card>
  <CardHeader>
    <CardTitle>Admin Dashboard</CardTitle>
  </CardHeader>
  <CardContent>
    <Link href={'/products'}>Product Page</Link>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    </>
  )
}

export default PageLinkCard