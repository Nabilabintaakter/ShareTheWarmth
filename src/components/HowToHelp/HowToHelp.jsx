import { Link } from 'react-router-dom';
import bg from '../../assets/how-bg-3.jpg';

const HowToHelp = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className='' style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} >
                <section
                    className="bg-cover bg-center text-center pt-10"

                >
                    <h1 data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="300" className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">
                        How to Help
                    </h1>
                    <p className="text-lg md:text-xl text-center w-[95%] md:w-[80%] lg:w-[50%] mx-auto">
                        Together, we can bring warmth and hope to those in need this winter.This winter, thousands of underprivileged individuals across
                        Bangladesh are braving the cold without proper clothing or
                        resources. Your simple acts of kindness can bring warmth and hope
                        into their lives. Here’s how you can help:
                    </p>
                </section>

                {/* Details Section */}
                <section data-aos="fade"
                        data-aos-duration="1000"
                        data-aos-delay="300" className="px-6 py-12">
                    <div className="max-w-6xl mx-auto text-center">
                        {/* Steps to Help */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-all duration-700 ease-in-out cursor-pointer">
                                <h3 className="text-xl font-bold text-yellow-600 mb-4">
                                    Donate Winter Clothes
                                </h3>
                                <p className="text-gray-700">
                                    Provide gently used or new winter clothes like jackets, sweaters,
                                    and blankets to our collection points. These will be distributed
                                    to people in need across rural and urban areas.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-all duration-700 ease-in-out cursor-pointer">
                                <h3 className="text-xl font-bold text-yellow-600 mb-4">
                                    Financial Donations
                                </h3>
                                <p className="text-gray-700">
                                    Your monetary support helps us purchase new clothing and
                                    resources, ensuring that everyone receives what they need during
                                    the harsh winter months.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-all duration-700 ease-in-out cursor-pointer">
                                <h3 className="text-xl font-bold text-yellow-600 mb-4">
                                    Volunteer Your Time
                                </h3>
                                <p className="text-gray-700">
                                    Join our team as a volunteer and assist in organizing,
                                    collecting, and distributing winter essentials at donation
                                    centers.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-all duration-700 ease-in-out cursor-pointer">
                                <h3 className="text-xl font-bold text-yellow-600 mb-4">
                                    Host Donation Drives
                                </h3>
                                <p className="text-gray-700">
                                    Organize a donation drive in your community, workplace, or
                                    school. Together, we can collect more and reach further.
                                </p>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-all duration-700 ease-in-out cursor-pointer">
                                <h3 className="text-xl font-bold text-yellow-600 mb-4">
                                    Spread the Word
                                </h3>
                                <p className="text-gray-700">
                                    Share our campaign on social media, tell your friends and
                                    family, and inspire others to join this mission of warmth and
                                    compassion.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Why Help Section */}
            <section className="py-12 px-6 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">
                        Why Your Support Matters
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Every year, the chilling winter claims lives due to lack of proper
                        clothing and shelter. A small contribution from you can save lives
                        and restore hope in those who have lost it. Let’s work together to
                        bring smiles and comfort to the less fortunate this winter.
                    </p>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-center py-8">
                <p className="text-2xl font-bold text-white">
                    Ready to Make a Difference?
                </p>
                <Link
                    to='/donationCampaign'
                    className="mt-4 inline-block px-8 py-4 bg-white text-yellow-600 font-semibold text-xl rounded-lg shadow-lg hover:bg-yellow-200 transition-all duration-300"
                >
                    Donate Now
                </Link>
            </section>
        </div>
    );
};

export default HowToHelp;
