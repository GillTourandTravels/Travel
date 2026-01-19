export default function GoogleMap() {
    return (
        <section id="map" className="bg-muted py-16">
            <div className="max-w-7xl mx-auto px-4">

                {/* SECTION HEADER */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                        Find Us in Shimla
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                        Visit or contact <strong>Gills Tour & Travels Shimla Taxi</strong>.
                        We are conveniently located in Shimla, Himachal Pradesh.
                    </p>
                </div>

                {/* MAP CONTAINER */}
                <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden border shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.5862452506653!2d77.13629867544448!3d31.093434174412298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d279ba1ab1c75cf%3A0xe64aade0cd22f5d7!2sGills%20Tour%20and%20Travels%20Shimla%20Taxi!5e0!3m2!1sen!2sin!4v1768805293859!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>

            </div>
        </section>
    );
}
