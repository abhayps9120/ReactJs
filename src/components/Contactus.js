const Contact=() => {
    return (
        <div className=" text-center">
            <h1 className="font-bold text-3xl">Contact Us</h1>
            <form>
                <input placeholder="Input Box" className="border border-black m-2 "></input>
                <input placeholder="Input Box" className="border border-black m-2"></input>
                <button className="border border-black m-2 bg-purple-300 rounded-sm">Submit</button>
            </form>
        </div>
    )  
}

export default Contact;