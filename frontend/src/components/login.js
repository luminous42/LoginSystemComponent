const login = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="email" name="email" value={email} />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?
        <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default login;
