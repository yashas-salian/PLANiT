"use client"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface CalendarButtonProps {
  onDateSelect?: (date: Date) => void
  className?: string
  navigateOnSelect?: boolean
  buttonVariant?: "default" | "outline" | "ghost"
}

export const CalendarButton = ({
  onDateSelect,
  className = "",
  navigateOnSelect = true,
  buttonVariant = "default",
}: CalendarButtonProps) => {
  const navigate = useNavigate()
  const [date, setDate] = useState<Date | undefined>(new Date())

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    if (selectedDate && onDateSelect) {
      onDateSelect(selectedDate)
    }
  }

  const handleViewEvents = () => {
    if (date && navigateOnSelect) {
      navigate(`/events/date/${format(date, "yyyy-MM-dd")}`)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={buttonVariant}
          size="icon"
          className={`rounded-full h-10 w-10 text-black ${className}`}
        ><div className="grid grid-cols-2 gap-x-6">
          <CalendarIcon className="h-5 w-5 mt-1" />
          <div className="text-lg">Calendar</div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-purple-300" align="center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
          className="rounded-md border"
        />
        {date && (
          <div className="p-3 border-t">
            <p className="text-sm font-medium">Selected: {format(date, "PPP")}</p>
            <Button
              variant="default"
              size="sm"
              className="w-full mt-2 bg-[#755EA5] hover:bg-[#5D4884]"
              onClick={handleViewEvents}
            >
              View Events
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

