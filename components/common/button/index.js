function Button(props) {

    const onclick = () => {
        console.log("ddddd")
        props.click();
    };
    return (
        <button onClick={onclick} className="flex ml-4  text-white bg-indigo-500 border-0 py-2 px-6  focus:outline-none hover:bg-indigo-600 rounded">{props.text}</button>
    );
}
export default Button;