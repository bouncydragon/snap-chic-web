import { Check, Star } from 'lucide-react';
import { sanitize } from 'isomorphic-dompurify';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Phone from '@/components/Phone';
import { Icons } from '@/components/Icons';
import { testimonial } from './mocks/testimonials';

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="absolute -top-20 left-0 hidden w-28 lg:block">
                <img src="/snapchic-logo.png" className="w-full" />
              </div>
              <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Snap it with our <span className="bg-blue-700 px-2 text-white">Custom</span> Phone
                Case
              </h1>
              <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
                Relive your favorite memories with{' '}
                <span className="font-semibold">every glance</span>. Our custom cases turn your
                phone into a beautiful keepsake of life&apos;s special moments.
              </p>
              <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
                <div className="space-y-2">
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-blue-700" />
                    High-quality, durable material
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-blue-700" />
                    10 year print guarantee
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-blue-700" />
                    Modern iPhone and Samsung models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                    src="/users/user-1.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                    src="/users/user-2.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                    src="/users/user-3.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user image"
                  />
                </div>
                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 fill-blue-700 text-blue-700" />
                    <Star className="h-4 w-4 fill-blue-700 text-blue-700" />
                    <Star className="h-4 w-4 fill-blue-700 text-blue-700" />
                    <Star className="h-4 w-4 fill-blue-700 text-blue-700" />
                    <Star className="h-4 w-4 fill-blue-700 text-blue-700" />
                  </div>
                  <p>
                    <span className="font-semibold">1.573</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
              />
              <img src="/line.png" className="absolute -bottom-6 -left-6 w-20 select-none" />
              <Phone className="w-64" imgSrc="" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
              See our{' '}
              <span className="relative px-2">
                customers{' '}
                <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 hidden text-blue-700 sm:block" />
              </span>{' '}
              feedback
            </h2>
            <img src="" className='w-24 order-0 lg:order-2'/>
          </div>

          <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
            {
              testimonial.map((t) => (
                <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
                  <div className="flex gap-0 5 mb-2">
                    {
                      Array.from({ length: t.stars}).map(() => (
                        <Star className='h-5 w-5 text-blue-700 fill-blue-700' />
                      ))
                    }
              </div>

              <div className="text-lg leading-8">
                    <p dangerouslySetInnerHTML={{__html: sanitize(t.description)}} />
              </div>
              <div className="flex gap-4 mt-2">
                <img src={t.customer_image} alt="user" className="rounded-full h-12 w-12 object-cover" />
                <div className="flex flex-col">
                      <p className="font-semibold">{t.customer_name}</p>
                  <div className="flex gap-1 5 items-center text-zinc-600">
                    <Check className='h-4 w-4 stroke-[3px] text-blue-700' />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
              ))
            }
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
