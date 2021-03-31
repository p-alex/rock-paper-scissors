import React from "react";
import "./RulesPopUp.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleRules } from "../../actions/toggleRules";
const RulesPopUp = () => {
  const tglRules = useSelector((state) => state.toggleRules);
  const dispatch = useDispatch();
  return (
    <>
      {tglRules ? (
        <div className="popUpContainer">
          <div className="popUp">
            <div className="popUpTitleAndClose">
              <img
                src="/images/icon-close.svg"
                className="closeBtn"
                onClick={() => dispatch(toggleRules())}
              />
              <h1>Rules</h1>
            </div>
            <img src="/images/image-rules.svg" className="rules" />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RulesPopUp;
