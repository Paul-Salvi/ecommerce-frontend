function Button({ text }) {
    return (
        <button className="flex ml-4  text-white bg-indigo-500 border-0 py-2 px-6  focus:outline-none hover:bg-indigo-600 rounded">{text}</button>
    );
}
export default Button;