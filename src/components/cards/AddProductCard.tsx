
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
import AddProudctForm from '../forms/AddProudctForm'
const AddProductCard = () => {

    return (
        <>
        <Card>
      <CardHeader>
        <CardTitle>Add New Product</CardTitle>
      </CardHeader>
      <CardContent>
        <AddProudctForm/>
      </CardContent>
      
    </Card>
    
        </>
      )
  
}

export default AddProductCard