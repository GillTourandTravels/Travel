"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function EnquiryForm() {
    const [showForm, setShowForm] = useState(false)
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
        <section id="contact" className="w-full max-w-xl mx-auto py-12 px-4">
            {!showForm && !submitted && (
                <div className="text-center py-12 scroll-mt-24">
                    <Button
                        className="px-8 py-3 text-lg font-semibold"
                        onClick={() => setShowForm(true)}
                    >
                        Send Enquiry
                    </Button>
                </div>
            )}

            {showForm && !submitted && (
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 bg-white p-6 rounded-xl shadow-lg"
                >
                    <h2 className="text-2xl font-bold text-center mb-4">
                        Travel Enquiry Form
                    </h2>

                    <input
                        name="name"
                        required
                        placeholder="Full Name"
                        className="w-full border rounded-lg px-4 py-2"
                    />

                    <input
                        name="phone"
                        required
                        placeholder="Contact Number"
                        className="w-full border rounded-lg px-4 py-2"
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email (Optional)"
                        className="w-full border rounded-lg px-4 py-2"
                    />

                    <input
                        name="days"
                        type="number"
                        min={1}
                        required
                        placeholder="Number of Days"
                        className="w-full border rounded-lg px-4 py-2"
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            name="fromDate"
                            type="date"
                            required
                            className="w-full border rounded-lg px-4 py-2"
                        />
                        <input
                            name="toDate"
                            type="date"
                            required
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>

                    <input
                        name="budget"
                        required
                        placeholder="Budget (Approx)"
                        className="w-full border rounded-lg px-4 py-2"
                    />

                    <input
                        name="persons"
                        type="number"
                        min={1}
                        required
                        placeholder="Number of Persons"
                        className="w-full border rounded-lg px-4 py-2"
                    />

                    <Button type="submit" className="w-full text-lg font-semibold">
                        Submit Enquiry
                    </Button>
                </form>
            )}

            {submitted && (
                <div className="text-center bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-green-600 mb-2">
                        Thank You For Your Enquiry
                    </h3>
                    <p className="text-gray-600">
                        We have received your request and will contact you shortly.
                    </p>
                </div>
            )}
        </section>
    )
}
