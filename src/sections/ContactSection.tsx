'use client';
import Image from 'next/image'
import React, { forwardRef } from 'react'
import aboutBoard from '../../public/images/about-board.png'

const ContactSection = forwardRef<HTMLDivElement>((props, ref) => {
    const [hubValue, setHubValue] = React.useState('');
    return (
        <div className='' ref={ref}>
            <header className="text-center max-w-4xl mx-auto">
                <h2 id="contact-title" className=" ">
                    Choose Your Study Destination With Us
                </h2>
                <p className="mt-2 text-sm sm:text-base">
                    Reach out, and let&apos;s search the best college of possibilities together!
                </p>
            </header>
            {/* // here was an isolate className, don't know why */}
            <section className="relative py-6 sm:py-8 md:py-10 ">
                {/* Background gradient rings */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden w-full"
                >
                    <div className="absolute top-1/2 right-0 h-[300px] sm:h-[400px] lg:h-[520px] w-[600px] sm:w-[900px] lg:w-[1200px] -translate-y-1/2 rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,_#a855f7_60%,_transparent_30%)]" />
                    <div className="absolute top-1/2 left-0 h-[300px] sm:h-[400px] lg:h-[520px] w-[600px] sm:w-[900px] lg:w-[1200px] -translate-y-1/2 rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,_#a855f7_60%,_transparent_30%)]" />
                    <div className="absolute top-1/4 left-0 h-[300px] sm:h-[400px] lg:h-[520px] w-[600px] sm:w-[900px] lg:w-[1200px] -translate-y-1/2 rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,_#a855f7_60%,_transparent_30%)]" />

                </div>


                <div className="max-w-7xl mx-auto px-standard">

                    <article className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 rounded-2xl border-2 border-gray-100 bg-white/80 backdrop-blur-sm shadow-[0_8px_40px_-8px_#E1C5ED] p-3 sm:p-4">
                        {/* Form side */}
                        <div className="flex flex-col p-4 sm:p-6 md:p-8">

                            <form className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6 md:pt-10">
                                
                                <div className="sm:col-span-1">
                                    <label htmlFor="lastName" className="sr-only">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        placeholder='Last Name'
                                        required
                                        autoComplete="family-name"
                                        className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                                    />
                                </div>

                                <div className="sm:col-span-1">
                                    <label htmlFor="firstName" className='sr-only'>
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        placeholder='First Name'
                                        required
                                        autoComplete="given-name"
                                        className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                                    />
                                </div>

                                {/* Choose Hub Dropdown */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="hub" className="sr-only">
                                        Choose Study Destination
                                    </label>
                                    <select
                                        id="hub"
                                        name="hub"
                                        required
                                        className={`mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 shadow-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 ${hubValue === '' ? 'text-gray-400' : 'text-gray-900'}`}
                                        value={hubValue}
                                        onChange={e => setHubValue(e.target.value)}
                                    >
                                        <option value="" disabled>Choose Study Destination</option>
                                        <option value="japan">Japan</option>
                                        <option value="australia">Australia</option>
                                        <option value="uk">UK</option>
                                        <option value="canada">Canada</option>
                                        <option value="newzealand">New Zealand</option>
                                        <option value="korea">Korea</option>
                                    </select>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className='sr-only'>
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder='Email'
                                        required
                                        autoComplete="email"
                                        className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="phone" className='sr-only'>
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        placeholder='Phone Number'
                                        type="tel"
                                        autoComplete="tel"
                                        className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className='sr-only'>
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder='Message'
                                        rows={4}
                                        className="mt-1 block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                                    />
                                </div>

                                <div className="grid md:col-span-2">
                                    {/* make it full width  */}
                                    <button
                                        type="submit"
                                        className="items-center justify-center rounded-sm bg-[#3d1a4d] px-6 py-3 text-sm font-semibold
                                         text-white shadow-sm transition hover:bg-purple-900 focus:outline-none focus-visible:ring-2
                                          focus-visible:ring-purple-400 "
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="relative min-h-[280px] sm:min-h-[360px] md:min-h-[460px] m-[30_20_30_0]">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-50% to-transparent rounded-xl z-10" />
                            <Image src={aboutBoard} fill alt='image' className='rounded-xl object-cover' />
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
});

ContactSection.displayName = 'ContactSection';

export default ContactSection
