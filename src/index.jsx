export default function render(data) {
    // const header = data.conditional ? <div /> : null;
    // const collection = data.items.map((item) => {
    //     return <li key={item.id} class={item.className}>{item.name}</li>;
    // });

    const myClass = 'fred';

    const myArray = [];
    myArray.push(<span>my span</span>);
 
    return 
    <div id="container"
    class={ `${myClass}`}
    >
        {myArray}
    </div>;
}