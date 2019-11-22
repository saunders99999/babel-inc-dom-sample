export function renderDoesNotWork(el) {
    const elemBody = <span class="fred" />;
    return (
        // transpile bad --> (0, _incrementalDom.elementOpen)("div", null, null, "id", `${el.id}-track`);
        <div id={ `${ el.id }-track` }>
            { elemBody }
        </div>
    );
}

export function renderWorks(el) {
    const elemBody = <span class="fred" />;

    // transpile good --> var elid = "".concat(el.id, "-track");
    const elid = `${ el.id }-track`;
    return (
        <div id={ elid }>
            { elemBody }
        </div>
    );
}

export function optionalReturnDoesNotWork(colIndex,myClass) {
    if (colIndex === 0) {
        return (
            // transpile good -> return (0, _incrementalDom.elementVoid)("th", null, null, "id", "class=".concat(myClass, "-fred1"));
            <th id={ `class=${myClass}-fred1`} />
        );
    }
    return (
        // transpile bad --> (0, _incrementalDom.elementVoid)("th", null, null, "id", `class=${myClass}-fred2`);
        <th id={ `class=${myClass}-fred2`} />
    );
}