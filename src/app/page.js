"use client"

import { Textarea } from '@/components/ui/textarea'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='container'>
        <div className='grid grid-cols-1 gap-4'>
            <Textarea placeholder="Type your message here." />
            <Button onClick={() => {
              console.log();
            }}
            >Generate Report</Button>
            <Textarea placeholder="Result" />
        </div>
      </div>
    </div>
  );
}
