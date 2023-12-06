function NavBar() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Discord</li>
                <li>Other</li>
            </ul>
            <div>
                <label class="theme-toggle">
                    <input class="theme-input" type="checkbox" />
                    <span class="theme-slider round"></span>
                </label>
            </div>
        </nav>
    );
}

export default NavBar;