export default function Footer() {
  const buyCoffee = () => {
    window.open("https://www.buymeacoffee.com/schang", "_blank");
  };
  return (
    <footer>
      <button
        className="text-black dark:text-white bg-transparent hover:bg-gray-400 py-2 px-4 border border-black dark:border-white rounded inline-flex items-center"
        onClick={() => buyCoffee()}
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
          alt="Buy me a coffee logo"
        ></img>
        Buy me a coffee
      </button>
    </footer>
  );
}
