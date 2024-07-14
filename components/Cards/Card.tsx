'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

type CardProps = {
  children: React.ReactNode
  background: React.ReactNode
  categoryId?: string
}

export default function Card({ children, background, categoryId }: CardProps) {
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(0)
  const supabase = createClient()

  useEffect(() => {
    const fetchNumberOfQuestions = async () => {
      try {
        const { data: questionsData, error: questionsError } = await supabase
          .from('questions')
          .select('id')
          .eq('subcategory_id', categoryId)

        if (questionsError) {
          throw questionsError
        }

        setNumberOfQuestions(questionsData.length)
      } catch (error) {
        console.error('Eroare la încărcarea numărului de întrebări:', error)
      }
    }

    fetchNumberOfQuestions()
  }, [categoryId])

  return (
    <div className="relative hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group overflow-hidden rounded-xl">
      <div className="absolute inset-0 flex justify-center items-center">
        {background}
      </div>
      <div
        className="flex h-32 justify-between p-5 relative z-10 group-hover:!bg-slate-700/20"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1))`,
        }}>
        <h2 className="font-bold text-white text-2xl">{children}</h2>
        <span className="self-end text-white font-semibold">
          {numberOfQuestions} întrebări
        </span>
      </div>
    </div>
  )
}
