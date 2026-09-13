import GrandChild from "./GrandChild.jsx";
function Child ({studentName}) {
    return (
        <div style={{border: "2px solid green", padding: "10px", margin: "10px"}}>
        <h2>Child Component</h2>
        {/*passing the same prop again */ }

        <GrandChild studentName={studentName} />
    </div>
    );
}

export default Child;
