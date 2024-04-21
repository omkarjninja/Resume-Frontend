function Download(props) {
  return (
    <>
      <a
        className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-20 ml-10 py-3 text-white   focus:outline-none focus:ring active:text-indigo-500"
        onClick={props.download}
      >
        <span className="text-sm font-medium"> Download </span>

        <svg
          className="size-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </>
  );
}
export default Download;
