const reactEle = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank",
        style: "text-decoration:none; font-size:30px;"
    },
    children: "Click me to visit Google"
}


const mainCont = document.getElementById("root")


function customRender(reactEle,cont){
    // WEAKER APPROACH
    /* const domEle = document.createElement(reactEle.type);
    domEle.textContent = reactEle.children;
    domEle.setAttribute("href",reactEle.props.href);
    domEle.setAttribute("target",reactEle.props.target);
    
    cont.appendChild(domEle) */


    // BETTER APPROACH USING FOR IN LOOP
    const domEle = document.createElement(reactEle.type);
    domEle.textContent = reactEle.children;
    for(const key in reactEle.props){
        if (key === "children") continue;
        domEle.setAttribute(key,reactEle.props[key])
    }

    cont.appendChild(domEle);
}

customRender(reactEle,mainCont);