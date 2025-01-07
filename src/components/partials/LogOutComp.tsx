import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/slices";
import { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
// images
import drop from "../../assets/icons/drop.svg";
import { setDataSuccess } from "../../store/slices/authReducer";
interface Props {
  label: string;
  // link: string;
  isDrop?: boolean;
  icon: string;
}
const LogOutComp = ({ label, isDrop, icon }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  return (
    <div
      className={"nav"}
      onClick={() => {
        dispatch(setDataSuccess(false));
        navigate("/");
      }}
    >
      <div className={`nav__comp`}>
        {/* {isActive && <div className="nc__div"></div>} */}
        <div className="nc__flex">
          <img src={icon} alt="" className="nc__icon"></img>
          <p className="nc__p"> {label}</p>
          {/* dropdown */}

          {isDrop && <img src={drop} alt="" className="nc__drop"></img>}
        </div>
      </div>
    </div>
  );
};

export default LogOutComp;
