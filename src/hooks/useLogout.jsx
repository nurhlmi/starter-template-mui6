import { useNavigate } from "react-router-dom";

export default function useLogout() {
   const navigate = useNavigate();

   const handleLogout = () => {
      navigate(`/signin`);
   };

   return handleLogout;
}
