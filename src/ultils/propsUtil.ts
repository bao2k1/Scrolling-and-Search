

export const getMergedProps = <T>(defaultProps: T, props: Partial<T>): T => {
    return {
        ...defaultProps,
        ...props
    }
}