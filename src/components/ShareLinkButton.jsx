"use client"

export default function ShareLinkButton() {
    function handleClick() {
        console.log("Cliked")
    }


    return (
        <button onClick={handleClick} className="border px-2 py-1 rounded text-gray-500 rounded text-sm hover:bg-gray-200 hover:text-gray-700 mb-3">Copy Link</button>
    )
}