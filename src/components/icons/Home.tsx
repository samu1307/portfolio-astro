interface Props {
    className: string
}

const Home = ({ className }: Props) => {

    return (
        <svg className={className} viewBox="0 -0.5 25 25" fill="none">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.627 7.07343L10.359 5.55343C11.6913 4.81552 13.3097 4.81552 14.642 5.55343L17.374 7.07343C18.6778 7.78618 19.4919 9.15054 19.5 10.6364V14.8184C19.498 15.9628 19.0193 17.0546 18.179 17.8314C17.3679 18.5863 16.3 19.0043 15.192 19.0004H9.808C8.7 19.0043 7.63206 18.5863 6.821 17.8314C5.98068 17.0546 5.502 15.9628 5.5 14.8184V10.6364C5.50829 9.15033 6.32281 7.78591 7.627 7.07343Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round">
            </path>
            <path
                d="M10.167 19.0005V17.6005C10.167 16.3117 11.2117 15.267 12.5005 15.267C13.7892 15.267 14.834 16.3117 14.834 17.6005V19.0005"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round">
            </path>
        </svg>
    );
};


export default Home;



