import FooterList from "./FooterList";

const Footer = () => {
  return (
    <div className="p-4 pb-0 md:p-10">
      <div className="h-[1px] w-full bg-zinc-200"></div>

      <div className="grid auto-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
        <FooterList
          heading="Resources"
          list={["Find A Store", "Become A Member", "Send Us Feedback"]}
        />
        <FooterList
          heading="Help"
          list={[
            "Get Help",
            "Order Status",
            "Delivery",
            "Returns",
            "Payment Options",
          ]}
        />
        <FooterList
          heading="Company"
          list={[
            "About Nike",
            "News",
            "Careers",
            "Investors",
            "Sustainability",
          ]}
        />
      </div>
    </div>
  );
};

export default Footer;
