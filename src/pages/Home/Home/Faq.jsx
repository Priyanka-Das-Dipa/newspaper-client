import { Accordion } from "flowbite-react";
import faq from "../../../../public/images/faq.jpg";
const Faq = () => {
  return (
    <>
      <div className="py-10">
        <h2 className="text-4xl font-semibold text-center text-black mb-14">
          FAQ
        </h2>
        <div className="md:flex md:flex-row  sm:flex-col gap-10 justify-between mt-10">
          <div>
            <img
              className="w-[450px] shadow-2xl shadow-slate-500-200 rounded-3xl"
              src={faq}
              alt=""
            />
          </div>

          <div className="w-full shadow-2xl shadow-slate-600">
            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title>
                  Will my website have advertising?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Only if you add your own! All mySportSite website packages
                    are ad-free and have always been. Plus with the sponsors
                    feature you can provide your own sponsors with valuable
                    exposure on your website.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>How can I access my website?</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    All mySportSite websites come with their own domain name, so
                    your new sports website will be accessible via an address
                    such as www.yoursportsteamname.com The cost of your domain
                    name is included as part of all packages. If you already
                    have a domain name, it is easy to point to it to mySportSite
                    as well. Our support staff will assist you with this when
                    you purchase your website. mySportSite supports .com, .net,
                    .org, .ca, and .co.uk names as ones we can register for you.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  Do I need a credit card to create a free trial?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    There is no credit card required to create a website free
                    trial. Try our system out yourself and decide if it is right
                    for you. We only require basic information about you to
                    setup your website. Payment information comes later, when
                    you are convinced that mySportSite is the right solution.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  What are the differences between team, multi-team, and
                  league/association packages?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    There is no credit card required to create a website free
                    trial. Try our system out yourself and decide if it is right
                    for you. We only require basic information about you to
                    setup your website. Payment information comes later, when
                    you are convinced that mySportSite is the right solution.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  Is my sport supported by mySportSite?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    There is no credit card required to create a website free
                    trial. Try our system out yourself and decide if it is right
                    for you. We only require basic information about you to
                    setup your website. Payment information comes later, when
                    you are convinced that mySportSite is the right solution.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  What if my team already has a domain name registered?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    There is no credit card required to create a website free
                    trial. Try our system out yourself and decide if it is right
                    for you. We only require basic information about you to
                    setup your website. Payment information comes later, when
                    you are convinced that mySportSite is the right solution.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
