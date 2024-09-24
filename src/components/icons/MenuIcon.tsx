interface Props{
    className: string
}

const MenuIcon = ({className}: Props) => {

    return (
        <svg
            className={className}
            viewBox="0 0 24.00 24.00"
            fill="none"
            transform="rotate(0)"
            stroke="currentColor"
            stroke-width="1.2"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
                fill="currentColor">
            </path>
        </svg>
    );
};


export default MenuIcon;

