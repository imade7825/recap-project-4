import { IconArrowUp, IconArrowDown } from "@tabler/icons-react";
import "../styles/ThemePreview.css";
const ThemePreview = ({ theme, isExpanded }) => {
  return (
    <div className="them-preview">
      {/* Name and Toggle */}
      <div className="theme-header">
        <h3 className="theme-title">{theme.name}</h3>
        <span className="theme-toggle-raw">
          {isExpanded ? (
            <IconArrowDown color="green" size={32} />
          ) : (
            <IconArrowUp color="red" size={32} />
          )}
        </span>
      </div>

      {/* Farbkaesten */}
      <div className="theme-colors">
        {theme.colors.map((color, i) => (
          <div
            key={i}
            className="color-box"
            style={{ backgroundColor: color.value }}
          ></div>
        ))}
      </div>
    </div>
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     // alignItems: "center",
    //     // justifyContent: "space-between",
    //     margin: "10px 0",
    //     background: "#eee",
    //     padding: "10px",
    //     borderRadius: "8px",
    //     width: "100%",
    //   }}
    // >
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //       marginBottom: "10px",
    //     }}
    //   >
    //     <h3 style={{ margin: 0, fontFamily: "cursive" }}>{theme.name}</h3>
    //     <span style={{ cursor: "pointer" }}>
    //       {isExpanded ? (
    //         <IconArrowDown color="red" size={32} />
    //       ) : (
    //         <IconArrowUp color="red" size={32} />
    //       )}
    //     </span>
    //   </div>
    //   <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
    //     {theme.colors.map((color, i) => (
    //       <div
    //         key={i}
    //         style={{
    //           width: "48px",
    //           height: "48px",
    //           backgroundColor: color.value,
    //           border: "1px solid #000",
    //           borderRadius: "4px",
    //         }}
    //       ></div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default ThemePreview;
