"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function EnquiryForm() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget

        const name = (form.elements.namedItem("name") as HTMLInputElement).value
        const phone = (form.elements.namedItem("phone") as HTMLInputElement).value
        const email = (form.elements.namedItem("email") as HTMLInputElement).value
        const days = (form.elements.namedItem("days") as HTMLInputElement).value
        const fromDate = (form.elements.namedItem("fromDate") as HTMLInputElement).value
        const toDate = (form.elements.namedItem("toDate") as HTMLInputElement).value
        const budget = (form.elements.namedItem("budget") as HTMLInputElement).value
        const persons = (form.elements.namedItem("persons") as HTMLInputElement).value

        const whatsappMessage = `
New Travel Enquiry:

Name: ${name}
Contact Number: ${phone}
Email: ${email || "Not Provided"}
No. of Days: ${days}
Travel Dates: ${fromDate} to ${toDate}
Budget: ${budget}
No. of Persons: ${persons}
    `.trim()

        const whatsappURL = `https://wa.me/919218921595?text=${encodeURIComponent(
            whatsappMessage
        )}`

        window.open(whatsappURL, "_blank")
        setSubmitted(true)
    }

    return (
        <section
            id="contact"
            className="w-full bg-slate-50 py-16 px-4 sm:px-6"
        >
            <div className="max-w-2xl mx-auto">
                {!submitted ? (
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 space-y-6"
                    >
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-bold">
                                Travel Enquiry
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base">
                                Plan your perfect Himachal journey with us
                            </p>
                        </div>

                        <input
                            name="name"
                            required
                            placeholder="Full Name"
                            className="w-full border border-b-black bg-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        />

                        <input
                            name="phone"
                            required
                            placeholder="Contact Number"
                            className="w-full border border-b-black bg-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder="Email (Optional)"
                            className="w-full border border-b-black bg-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                name="days"
                                type="number"
                                min={1}
                                required
                                placeholder="Number of Days"
                                className="w-full border-b-black bg-blue-200 border rounded-xl px-4 py-3"
                            />

                            <input
                                name="persons"
                                type="number"
                                min={1}
                                required
                                placeholder="Number of Persons"
                                className="w-full border-b-black bg-blue-200 border rounded-xl px-4 py-3"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                name="fromDate"
                                type="date"
                                required
                                className="w-full border border-b-black bg-blue-200 rounded-xl px-4 py-3"
                            />
                            <input
                                name="toDate"
                                type="date"
                                required
                                className="w-full border border-b-black bg-blue-200 rounded-xl px-4 py-3"
                            />
                        </div>

                        <input
                            name="budget"
                            required
                            placeholder="Approx Budget"
                            className="w-full border border-b-black bg-blue-200 rounded-xl px-4 py-3"
                        />

                        <Button
                            type="submit"
                            className="w-full border-b-black   text-lg py-6 rounded-xl font-semibold"
                        >
                            Send Enquiry on WhatsApp
                        </Button>
                    </form>
                ) : (
                    <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
                        <h3 className="text-2xl font-bold text-green-600 mb-3">
                            Thank You for Your Enquiry
                        </h3>
                        <p className="text-gray-600">
                            Our travel expert will contact you shortly to plan your journey.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}
