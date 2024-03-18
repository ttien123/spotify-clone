const NoCheckIcon = () => {
    return (
        <svg
            aria-hidden="true"
            width={12}
            height={12}
            data-testid="password_requirement_one_letter-false"
            fill="currentColor"
        >
            <ellipse cx={6} cy={6} rx="5.5" ry="5.5" stroke="#A7A7A7" strokeWidth={1} fill="none" />
        </svg>
    );
};

export default NoCheckIcon;
