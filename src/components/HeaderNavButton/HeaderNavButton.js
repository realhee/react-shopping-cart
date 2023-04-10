import { useNavigate } from "react-router-dom";

export default function HeaderNavButton({ title, toPath }) {
  const navigate = useNavigate();

  return (
    <button className="nav-button" onClick={() => navigate(toPath)}>
      {title}
    </button>
  );
}
