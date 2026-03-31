export default function Header({ theme }) {
  const [isdark, setIsdark] = theme;
  return (
    <header
      className={` ${isdark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <div className="header-content flex justify-between items-center max-w-300 mx-auto  p-6">
        <h2 className=" font-extrabold">
          <a href="/" className="text-inherit">
            Where in the world?
          </a>
        </h2>
        <p
          className=" cursor-pointer"
          onClick={() => {
            setIsdark(!isdark);
            localStorage.setItem("darkMode", !isdark);
          }}
        >
          <i className={`fa-solid fa-${isdark ? "sun" : "moon"}`}></i>
          &nbsp;&nbsp;{isdark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
}
