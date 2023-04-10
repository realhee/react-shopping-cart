import { useNavigate } from "react-router-dom";

export default function HeaderTitle({ title, toPath }) {
  const navigate = useNavigate();

  return (
    <div className="flex-center">
      <h1 className="nav-title" onClick={() => navigate(toPath)}>
        {title}
      </h1>
    </div>
  );
}
