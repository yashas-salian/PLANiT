"use client"

import type React from "react"

import { useState } from "react"
import { Star, MessageSquare, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import em1 from "../components/safiyaWeb.jpg";
import em2 from "../components/em2.jpg";
import em3 from "../components/emp3.jpg";

interface Testimonial {
  id: string
  name: string
  date: string
  rating: number
  eventType: string
  message: string
  image?: string
}

interface FeedbackSectionProps {
  initialTestimonials?: Testimonial[]
  className?: string
}

export function FeedbackSection({ initialTestimonials = [], className = "" }: FeedbackSectionProps) {
  // State for testimonials
  const [testimonials, setTestimonials] = useState<Testimonial[]>(
    initialTestimonials.length > 0
      ? initialTestimonials
      : [
          {
            id: "1",
            name: "Duha Ansari",
            date: "March 15, 2024",
            rating: 5,
            eventType: "Wedding",
            message:
              "PLANiT made our wedding planning process so smooth. The team was responsive and understood exactly what we wanted. Every detail was perfect and our guests were amazed by how well everything was organized.",
            image: "Duha",
          },
          {
            id: "2",
            name: "Shubham Pote",
            date: "February 28, 2024",
            rating: 4,
            eventType: "Corporate Event",
            message:
              "We've used PLANiT for three company events now, and each one has been flawlessly executed. The team is professional, detail-oriented, and always goes the extra mile to ensure everything runs smoothly.",
            image: "Shubham",
          },
          {
            id: "3",
            name: "Sunny Ghodekar",
            date: "January 10, 2024",
            rating: 5,
            eventType: "Birthday Party",
            message:
              "The attention to detail was impressive. My 30th birthday party was exactly how I imagined it would be. The decorations, catering, and entertainment were all perfectly coordinated.",
            image: "Sunny",
          },
        ],
  )

  // State for form
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [eventType, setEventType] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  // State for filtering
  const [filter, setFilter] = useState("all")

  // Event types
  const eventTypes = [
    "Wedding",
    "Birthday Party",
    "Corporate Event",
    "Anniversary",
    "Holiday Party",
    "Open Mic Night",
    "Other",
  ]

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      name,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      rating,
      eventType,
      message,
    }

    setTestimonials([newTestimonial, ...testimonials])
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setShowForm(false)
      setName("")
      setEmail("")
      setRating(0)
      setEventType("")
      setMessage("")
    }, 3000)
  }

  // Filter testimonials
  const filteredTestimonials =
    filter === "all"
      ? testimonials
      : testimonials.filter((t) => {
          if (filter === "5star") return t.rating === 5
          if (filter === "4star") return t.rating === 4
          if (filter === "3star") return t.rating <= 3
          return true
        })

  // Testimonial Card Component
  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-purple-50 rounded-xl shadow-md overflow-hidden h-full">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="border border-black rounded-full p-2 text-3xl">
          <User/>
          </div>
          <div>
            <h4 className="font-bold text-lg">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.date}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">• {testimonial.eventType}</span>
        </div>

        <p className="text-gray-700">{testimonial.message}</p>
      </div>
    </div>
  )

  return (
    <section className={`py-16 bg-purple-200 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#755EA5] mb-3">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about their experiences with PLANiT.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filter === "all" ? "default" : ""}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-[#755EA5] text-black hover:cursor-pointer" : "bg-white text-gray-700 hover:bg-gray-100 hover:cursor-pointer"}
            >
              All Reviews
            </Button>
            <Button
              variant={filter === "5star" ? "default" : ""}
              onClick={() => setFilter("5star")}
              className={filter === "5star" ? "bg-[#755EA5] text-black hover:cursor-pointer" : "bg-white text-gray-700 hover:bg-gray-100 hover:cursor-pointer"}
            >
              5 Star
            </Button>
            <Button
              variant={filter === "4star" ? "default" : ""}
              onClick={() => setFilter("4star")}
              className={filter === "4star" ? "bg-[#755EA5] text-black hover:cursor-pointer" : "bg-white text-gray-700 hover:bg-gray-100 hover:cursor-pointer"}
            >
              4 Star
            </Button>
            <Button
              variant={filter === "3star" ? "default" : ""}
              onClick={() => setFilter("3star")}
              className={filter === "3star" ? "bg-[#755EA5] text-black hover:cursor-pointer" : "bg-white text-gray-700 hover:bg-gray-100 hover:cursor-pointer"}
            >
              3 Star & Below
            </Button>
          </div>

          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#755EA5] text-white hover:bg-purple-400 flex items-center gap-2 hover:cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            {showForm ? "Cancel" : "Share Your Experience"}
          </Button>
        </div>

        {/* Feedback Form */}
        {showForm && !submitted && (
          <div className="mb-12 bg-white p-6 rounded-xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6 ">
              <div className="space-y-2  ">
                <h3 className="text-2xl font-bold text-[#755EA5] ">Share Your Experience</h3>
                <p className="text-gray-600">Your feedback helps us improve and helps others discover our services.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Event Type</Label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#755EA5]"
                  required
                >
                  <option value="" disabled>
                    Select event type
                  </option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label>Your Rating</Label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="text-2xl focus:outline-none transition-colors"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-gray-600">{rating > 0 ? `${rating} out of 5` : "Select a rating"}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Feedback</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your experience..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-[#755EA5] hover:bg-purple-700"
                  disabled={!name || !email || !rating || !eventType || !message}
                >
                  Submit Feedback
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Success Message */}
        {submitted && (
          <div className="mb-12 p-6 rounded-xl bg-purple-50 text-center">
            <div className="w-16 h-16 bg-[#755EA5] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#755EA5] mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">We appreciate your feedback. It helps us improve our services.</p>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl">
            <p className="text-gray-500">No reviews found for this filter.</p>
          </div>
        )}

        {testimonials.length > 6 && (
          <div className="text-center mt-10">
            <Button variant="outline" className="border-[#755EA5] text-[#755EA5] hover:bg-purple-50">
              View All Reviews
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

