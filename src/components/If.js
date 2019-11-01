import React from "react";

const If = props => (props.condition ? <>{props.children} </> : <> </>);

export default If;
