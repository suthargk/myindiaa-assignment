const FooterList = ({ heading, list }) => {
  return (
    <div>
      <h3 className="font-medium mb-3">{heading}</h3>
      <ul className="flex flex-col gap-2">
        {list.map((item) => {
          return (
            <li key={item} className="text-zinc-500 text-sm">
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterList;
