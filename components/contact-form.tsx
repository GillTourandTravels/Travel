"use client"

import { Button } from "@/components/ui/button"
import { useForm } from "@formspree/react"
import { useEffect } from "react"

export default function EnquiryForm() {

    const [state, handleSubmit] = useForm("mkobawqn")

    useEffect(() => {
        if (state.succeeded) {
            const data = sessionStorage.getItem("waData")

            if (data) {
                window.open(`https://wa.me/919218921595?text=${encodeURIComponent(data)}`, "_blank")
                sessionStorage.removeItem("waData")
            }
        }
    }, [state.succeeded])

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget

        const name = (form.elements.namedItem("name") as HTMLInputElement).value
        const phone = (form.elements.namedItem("phone") as HTMLInputElement).value
        const email = (form.elements.namedItem("email") as HTMLInputElement).value
        const days = (form.elements.namedItem("days") as HTMLInputElement).value
        const persons = (form.elements.namedItem("persons") as HTMLInputElement).value
        const fromDate = (form.elements.namedItem("fromDate") as HTMLInputElement).value
        const toDate = (form.elements.namedItem("toDate") as HTMLInputElement).value
        const budget = (form.elements.namedItem("budget") as HTMLInputElement).value

        const whatsappMessage = `
New Travel Enquiry – Gills Tour & Travels

Name: ${name}
Phone: ${phone}
Email: ${email || "N/A"}

Days: ${days}
Persons: ${persons}
Dates: ${fromDate} to ${toDate}
Budget: ${budget}
    `.trim()

        sessionStorage.setItem("waData", whatsappMessage)

        await handleSubmit(e)
    }

    if (state.succeeded) {
        return (
            <div className="py-20 text-center">
                <h3 className="text-2xl font-bold text-green-600">Thank you 🙏</h3>
                <p className="text-gray-600 mt-2">WhatsApp opening now...</p>
            </div>
        )
    }

    return (
        <section id="contact" className="py-16 px-4">
            <form
                onSubmit={submitHandler}
                className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-10 space-y-6"
            >

                <div className="text-center space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold">Travel Enquiry</h2>
                    <p className="text-gray-500 text-sm sm:text-base">
                        Plan your Himachal journey with Gills Tour & Travels cabs Shimla.
                    </p>
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input name="name" required placeholder="Full Name" className="input" />
                    <input name="phone" required placeholder="Mobile Number" className="input" />
                </div>

                <input name="email" type="email" placeholder="Email (optional)" className="input w-full" />

                {/* Trip Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <input name="days" type="number" placeholder="Days" required className="input" />
                    <input name="persons" type="number" placeholder="Persons" required className="input" />
                    <input name="fromDate" type="date" required className="input" />
                    <input name="toDate" type="date" required className="input" />
                </div>

                <input name="budget" placeholder="Approx Budget" className="input w-full" />

                <Button
                    disabled={state.submitting}
                    className="w-full py-6 text-lg rounded-xl"
                >
                    {state.submitting ? "Sending..." : "Submit Enquiry"}
                </Button>

            </form>
        </section>
    )
}
