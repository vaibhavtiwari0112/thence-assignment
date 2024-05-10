import React from "react";
import "../../../styles/Homepage/center/CenterCard.css";

const CenterCard = () => {
  return (
    <div className="center-Card-container">
      <div className="center-Card">
        <img
          src="https://s3-alpha-sig.figma.com/img/c086/323e/b8fae54c91face434e9ea448a875ea3e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPPJu~LH5jYqxc8GcYbYi8GpYZgu3j-AFGk6P5AmeOJnOVh~MFFvaY-W2zLzP1Z-nbTnsFqaK9IwMhqY17hc~mTOe-T65fjKPsSLz2IuGlJPXLjCD0Nft~wq1uZntYN3HhCA5uVhv~0Et663QLCcv3lOLUCpuJFYrd1zDpR94UWGVhMmI-PnyW1EWDkGgfPIdMIBlyMQ5X9F7n2nNNI55Hp56B3F~tOPgUcBN9jDOTv2kKq1BuNYd-QxrPNSlQ~iJKerpafsOWRN14nu-xFnt8KbvT-IrBC3BatAs~MMcHy5IJBnBrAol9VY6q2kPz1p1ifSVXMX3tnrb9N4L74Zpg__"
          alt="center-logo"
          className="center-Card-image"
        />
        <div className="left-card">
          <div>
            <div className="vector1"></div>
            <div className="vector2"></div>
            <div className="vector3"></div>
            <div className="vector4"></div>
            <h4 className="percentage-text">40%</h4>
          </div>
          <p className="left-card-text">
            Achieved reduction in project execution time by optimising team
            availability
          </p>
        </div>
        <div className="bottom-offer">
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              backgroundColor: "#DDEFE0",
              borderRadius: "100%",
            }}
          >
            <path
              d="M13.1587 23.9525C13.11 24.1462 11.8912 28.71 5.18749 28.71C4.92227 28.71 4.66792 28.6046 4.48038 28.4171C4.29284 28.2295 4.18749 27.9752 4.18749 27.71C4.18749 21.0062 8.75124 19.7875 8.94499 19.7387C9.20241 19.6744 9.47484 19.715 9.70235 19.8515C9.92985 19.9881 10.0938 20.2094 10.1581 20.4669C10.2224 20.7243 10.1818 20.9967 10.0453 21.2242C9.90875 21.4517 9.68741 21.6157 9.42999 21.68C9.31749 21.7112 6.62749 22.4975 6.23499 26.6625C10.4 26.27 11.1875 23.585 11.22 23.46C11.2863 23.2029 11.452 22.9827 11.6807 22.8477C11.9094 22.7128 12.1823 22.6743 12.4394 22.7406C12.6965 22.8069 12.9167 22.9726 13.0516 23.2013C13.1865 23.43 13.225 23.7029 13.1587 23.96V23.9525ZM24.7837 15.5275L24.1875 16.1237V23.415C24.189 23.6786 24.138 23.9399 24.0376 24.1837C23.9372 24.4275 23.7893 24.6489 23.6025 24.835L19.3125 29.1225C19.1275 29.3088 18.9074 29.4566 18.665 29.5575C18.4226 29.6583 18.1626 29.7101 17.9 29.71C17.6833 29.7099 17.468 29.6749 17.2625 29.6062C16.9096 29.4895 16.5964 29.2764 16.3583 28.991C16.1202 28.7056 15.9666 28.3593 15.915 27.9912L15.2437 23.18L9.71749 17.6537L4.90874 16.9825C4.54017 16.9308 4.19333 16.7773 3.90724 16.5392C3.62116 16.3012 3.40718 15.988 3.28937 15.6349C3.17156 15.2819 3.15459 14.903 3.24038 14.5408C3.32618 14.1787 3.51132 13.8477 3.77499 13.585L8.06249 9.29498C8.24858 9.10821 8.46996 8.96031 8.71374 8.85988C8.95752 8.75945 9.21883 8.70849 9.48249 8.70998H16.7737L17.37 8.11373C20.705 4.77998 24.7225 4.63623 26.2962 4.72998C26.7838 4.75961 27.2437 4.96667 27.5891 5.31208C27.9345 5.6575 28.1416 6.11739 28.1712 6.60498C28.2625 8.17373 28.1187 12.1925 24.785 15.5275H24.7837ZM14.7737 10.71H9.48249L5.18749 15.0025L9.83124 15.65L14.7737 10.71ZM22.1875 18.1237L17.2462 23.065L17.8962 27.71L22.1875 23.415V18.1237Z"
              fill="#2DA950"
            />
          </svg>
          <div className="bottom-offer-entire-text">
            <p className="bottom-offer-heading">
              10 days
              <p className="bottom-offer-text">Staff Deployment</p>
            </p>
          </div>
        </div>
      </div>
      <div className="right-card">
        <div
          style={{
            display: "flex",
            "flex-direction": "row",
          }}
        >
          <p
            style={{
              fontFamily: "Switzer",
              fontSize: "63.37px",
              fontWeight: "500",
              lineHeight: "76.05px",
              letterSpacing: "-0.03em",
              textAlign: "left",
              width: "119px",
              height: "76px",
              marginTop: "8px",
              top: "0",
              position: "absolute",
            }}
          >
            $0.5
          </p>
          <p style={{ color: "gray", marginTop: "20px", marginLeft: "120px" }}>
            MILLION
          </p>
        </div>
        <p>Reduced client expenses by saving on hiring and employee costs.</p>
      </div>
    </div>
  );
};

export default CenterCard;
