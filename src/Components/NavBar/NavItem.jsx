

function NavItem(props) {
    return (
        <a className="navitem" href={props.href} > <h4> {props.text} </h4></a>
    );


};

export default NavItem;