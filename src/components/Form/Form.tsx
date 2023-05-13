const Form = () => {
    return (
        <form>
            <div>
                <label htmlFor="name">
                    Your Name
                    <input type="text" id="email" />
                </label>
                {/* {emailInputHasError && <p className={styles.error}>Name is must not be empty</p>} */}
            </div>

            <div>
                <label htmlFor="password">
                    Your Name
                    <input type="password" id="password" />
                </label>
                {/* {passwordInputHasError && (
                    <p className={styles.error}>Password is must not be empty</p>
                )} */}
            </div>

            <div>
                <label htmlFor="rememberMe">
                    Remember Me
                    <input type="checkbox" id="rememberMe" />
                </label>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Form;
